<template>
  <!-- eslint-disable vue/no-v-html -->
  <v-card class="mx-auto mb-5 pa-2 announcementCard" shaped>
    <div>
      <div class="float-right">
        <v-switch
          v-model="newsSwitch"
          color="primary"
          :loading="loading"
          :disabled="loading"
          :label="newsSwitch ? 'Recent News Only' : 'All News'"
        />
      </div>
      <h2 class="v-card__title text-h5 break-word">
        QMO LAB NEWS
      </h2>
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
              width="80"
              height="80"
            />
          </v-list-item-avatar>
          <v-list-item-content class="align-self-start">
            <v-list-item-title class="mb-1 text-h6 unsetWhiteSpace">
              <span>
                <PrettyDate :value="item.date" />
                <span>
                  <span>: </span>
                  <span v-html="item.title" />
                </span>
              </span>
            </v-list-item-title>
            <v-list-item-subtitle class="subtitle-1 unsetWhiteSpace">
              <dynamic-text :html="item.description" />
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </transition-group>
    </div>
    <div class="pb-0 text-right mr-4 body-1">
      For More QMO Lab Highlights, Please See Our Publications and Research
      Pages
    </div>
    <v-card-actions>
      <v-spacer />
      <v-btn text to="/publications/">
        <v-icon color="secondary" v-text="'$publicationsPage'" />
        <span>Publications</span>
      </v-btn>
      <v-btn text to="/research/">
        <v-icon color="secondary" v-text="'$researchPage'" />
        <span>Research</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import StoreImage from '@/components/StoreImage.vue';
  import PrettyDate from '@/components/lib/PrettyDate.vue';

  export default {
    name: 'Home',
    components: { StoreImage, PrettyDate },
    props: {
      announcements: { type: Array, required: true },
      secondaryAnnouncements: { type: Array, default: undefined },
    },
    data() {
      return {
        loading: false,
        newsSwitch: this.announcements.length === 3,
        oldAnnouncements: this.secondaryAnnouncements,
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
