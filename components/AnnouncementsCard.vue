<template>
  <v-card class="mx-auto mb-5 pa-2 announcementCard" elevation="2">
    <v-card-title class="headline">
      QMO LAB NEWS
      <div class="float-r">
        <v-form>
          <v-switch v-slot:label v-model="newsSwitch" value>
            <v-slide-y-transition leave-absolute>
              <span :key="newsSwitch">
                {{ newsSwitch ? 'Recent News Only' : 'All News' }}
              </span>
            </v-slide-y-transition>
          </v-switch>
        </v-form>
      </div>
    </v-card-title>
    <transition-group
      id="newsItems"
      ref="newsItems"
      name="cardItem"
      tag="div"
      :style="`height: ${height}`"
    >
      <div v-for="item in announcementsChecked" :key="item.title" class="pa-2">
        <div class="d-flex align-center">
          <v-avatar :size="75">
            <StoreImage
              v-if="item.imageCategory"
              :category="item.imageCategory"
              :sub-category="item.imageSubCategory"
              :item-id="item.imageRef"
              :width="75"
              :height="75"
            />
          </v-avatar>
          <div class="px-4">
            <div class="title">{{ item.title }}!</div>
            <div class="subtitle-1">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </transition-group>
    <v-card-text class="pb-0">
      For More QMO Lab Highlights, Please See Our Publications and Research
      Pages.
    </v-card-text>

    <v-card-actions class="pt-0">
      <v-spacer />
      <v-btn text to="/publications/">
        Publications
      </v-btn>
      <v-btn text to="/research/">
        Research
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import StoreImage from '@/components/StoreImage.vue';

  export default {
    name: 'Home',
    components: { StoreImage },
    props: {
      announcements: { type: Array, required: true },
    },
    data() {
      return {
        newsSwitch: true,
        announcementsChecked: this.announcements,
        oldAnnouncements: undefined,
        good: true,
        height: 'unset',
      };
    },
    watch: {
      newsSwitch() {
        this.poll();
      },
    },
    mounted() {
      this.smallHeight = this.$refs.newsItems.$el.getBoundingClientRect().height;
      this.height = `${this.smallHeight}px`;
    },
    methods: {
      poll() {
        if (this.good) this.switch();
        else setTimeout(this.poll, 56);
      },
      async switch() {
        this.good = false;
        if (this.newsSwitch) {
          this.height = `${this.largeHeight}px`;
          this.recursivePop();
        } else {
          if (!this.largeHeight) {
            this.oldAnnouncements = await this.getOldNews();
            this.largeHeight =
              (this.smallHeight / 3) * (this.oldAnnouncements.length + 3);
          }
          this.height = `${this.largeHeight}px`;
          setTimeout(this.recursiveAdd, 140);
        }
      },
      recursivePop() {
        if (this.announcementsChecked.length > 3) {
          this.announcementsChecked.pop();
          setTimeout(() => this.recursivePop(), 56);
        } else {
          this.height = `${this.smallHeight}px`;
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
          this.height = 'unset';
          this.good = true;
        }
      },
      async getOldNews() {
        return await this.$axios.$get('/news/offset/');
      },
    },
  };
</script>

<style lang="scss" scoped>
  #newsItems {
    transition: height 560ms ease;
    overflow: hidden;
  }
</style>
