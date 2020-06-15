<template>
  <v-card class="mx-auto mb-5 pa-2 announcementCard">
    <div>
      <div class="float-r" style="width: 225px;">
        <v-switch
          v-model="newsSwitch"
          color="primary"
          :loading="loading"
          :disabled="loading"
          :label="newsSwitch ? 'Recent News Only' : 'All News'"
        />
      </div>
      <v-card-title class="headline" style="min-width: 225px;">
        QMO LAB NEWS
      </v-card-title>
    </div>
    <div class="pa-4">
      <transition-group
        tag="div"
        class="v-list v-sheet v-sheet--tile theme--dark v-list--flat"
        name="cardItem"
      >
        <v-list-item
          v-for="item in announcementsChecked"
          :key="item.title"
          class="mb-2"
        >
          <v-list-item-avatar size="75" color="grey">
            <StoreImage
              v-if="item.imageSubCategory && item.imageRef"
              :sub-category="item.imageSubCategory"
              :item-id="item.imageRef"
              width="75"
              height="75"
            />
          </v-list-item-avatar>
          <v-list-item-content class="align-self-start">
            <v-list-item-title class="mb-1" style="white-space: unset;">
              <span>
                <PrettyDate :value="item.date" />
                <span>
                  <span>: </span>
                  <DynamicText :html="item.title" />
                </span>
              </span>
            </v-list-item-title>
            <v-list-item-subtitle style="white-space: unset;">
              <DynamicText :html="item.description" />
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </transition-group>
    </div>
    <div class="pb-0 ta-right mr-4 body-1">
      For More QMO Lab Highlights, Please See Our Publications and Research
      Pages
    </div>
    <v-lazy>
      <v-card-actions>
        <v-spacer />
        <v-btn text to="/publications/">
          <v-icon color="secondary" v-text="'$mdiAlphaPCircle'" />
          <span>Publications</span>
        </v-btn>
        <v-btn text to="/research/">
          <v-icon color="secondary" v-text="'$mdiAlphaRCircle'" />
          <span>Research</span>
        </v-btn>
      </v-card-actions>
    </v-lazy>
  </v-card>
</template>

<script>
  import StoreImage from '@/components/StoreImage.vue';
  import PrettyDate from '@/components/lib/PrettyDate.vue';
  import DynamicText from '@/components/DynamicText.vue';

  export default {
    name: 'Home',
    components: { StoreImage, PrettyDate, DynamicText },
    props: {
      announcements: { type: Array, required: true },
    },
    data() {
      return {
        loading: false,
        newsSwitch: true,
        oldAnnouncements: undefined,
        announcementsChecked: this.announcements,
      };
    },
    watch: {
      async newsSwitch() {
        this.loading = true;
        if (this.newsSwitch) this.recursivePop();
        else {
          if (!this.oldAnnouncements)
            this.oldAnnouncements = await this.$axios.$get('/news/offset/');
          this.recursiveAdd(0);
        }
      },
    },
    methods: {
      recursivePop() {
        if (this.announcementsChecked.length > 3) {
          this.announcementsChecked.pop();
          setTimeout(() => this.recursivePop(), 75);
        } else this.loading = false;
      },
      recursiveAdd(l) {
        if (l < this.oldAnnouncements.length) {
          const r = this.oldAnnouncements[l];
          if (r.title) {
            this.announcementsChecked.push(r);
            setTimeout(() => this.recursiveAdd(l + 1), 75);
          }
        } else {
          this.loading = false;
        }
      },
    },
  };
</script>
