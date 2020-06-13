<template>
  <v-card class="mx-auto mb-5 pa-2 announcementCard">
    <div>
      <div class="float-r" style="width: 225px;">
        <v-switch
          v-model="newsSwitch"
          color="primary"
          :label="newsSwitch ? 'Recent News Only' : 'All News'"
        />
      </div>
      <v-card-title class="headline" style="min-width: 225px;">
        QMO LAB NEWS
      </v-card-title>
    </div>
    <div class="pa-4">
      <transition-group tag="div" name="cardItem">
        <div
          v-for="item in announcementsChecked"
          :key="item.title"
          class="pa-2"
        >
          <div class="d-flex align-center">
            <v-avatar
              :size="75"
              :color="item.imageSubCategory ? undefined : 'primary'"
            >
              <StoreImage
                v-if="item.imageSubCategory && item.imageRef"
                :sub-category="item.imageSubCategory"
                :item-id="item.imageRef"
                :width="75"
                :height="75"
              />
            </v-avatar>
            <div class="px-4">
              <div class="body-1">
                <PrettyDate :value="item.date" />
                <span>
                  <span>: </span>
                  <DynamicText :html="item.title" />
                </span>
              </div>
              <div class="body-2">
                <DynamicText :html="item.description" />
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
    <div class="pb-0 ta-right">
      For More QMO Lab Highlights, Please See Our Publications and Research
      Pages
    </div>

    <v-card-actions class="pt-0">
      <v-spacer />
      <v-btn text to="/publications/">
        <v-icon color="secondary">{{ mdiAlphaPCircle }}</v-icon>
        <span>Publications</span>
      </v-btn>
      <v-btn text to="/research/">
        <v-icon color="secondary">{{ mdiAlphaRCircle }}</v-icon>
        <span>Research</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mdiAlphaRCircle, mdiAlphaPCircle } from '@mdi/js';
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
        announcementsChecked: this.announcements,
        good: true,
        newsSwitch: true,
        oldAnnouncements: undefined,
        mdiAlphaRCircle,
        mdiAlphaPCircle,
      };
    },
    watch: {
      newsSwitch() {
        this.poll();
      },
    },
    methods: {
      poll() {
        if (this.good) this.switch();
        else setTimeout(this.poll, 56);
      },
      async switch() {
        this.good = false;
        if (this.newsSwitch) {
          this.recursivePop();
        } else {
          if (!this.oldAnnouncements)
            this.oldAnnouncements = await this.getOldNews();
          this.recursiveAdd();
        }
      },
      recursivePop() {
        if (this.announcementsChecked.length > 3) {
          this.announcementsChecked.pop();
          setTimeout(() => this.recursivePop(), 56);
        } else {
          // this.height = `${this.smallHeight}px`;
          this.good = true;
        }
      },
      recursiveAdd() {
        const l = this.announcementsChecked.length - 3;
        if (l < this.oldAnnouncements.length) {
          const r = this.oldAnnouncements[l];
          if (r.title) {
            this.announcementsChecked.push(r);
            setTimeout(() => this.recursiveAdd(), 56);
          }
        } else {
          // this.height = 'unset';
          this.good = true;
        }
      },
      async getOldNews() {
        return await this.$axios.$get('/news/offset/');
      },
    },
  };
</script>
