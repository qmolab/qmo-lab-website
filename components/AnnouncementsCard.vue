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
    <transition-group id="newsItems" name="cardItem" tag="div">
      <div v-for="item in announcementsChecked" :key="item.title" class="pa-2">
        <div class="d-flex align-center">
          <v-avatar :size="75">
            <BaseImage
              :src="item.img"
              :webp="item.webp"
              :width="75"
              :height="75"
            />
          </v-avatar>
          <div class="px-4">
            <div class="title">{{ item.title }}!</div>
            <div class="subtitle-1">{{ item.subtitle }}</div>
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
  import BaseImage from '@/components/BaseImage.vue';

  export default {
    name: 'Home',
    components: { BaseImage },
    props: {
      announcements: { type: Array, required: true },
    },
    data() {
      return {
        newsSwitch: true,
        announcementsChecked: this.announcements.slice(0, 3),
        good: true,
        container: undefined,
      };
    },
    watch: {
      newsSwitch() {
        this.poll();
      },
    },
    mounted() {
      this.container = document.getElementById('newsItems');
      this.smallHeight = this.container.getBoundingClientRect().height;
      this.largeHeight = (this.smallHeight / 3) * this.announcements.length;
      this.container.style.height = `${this.smallHeight}px`;
    },
    methods: {
      poll() {
        if (this.good) this.switch();
        else setTimeout(this.poll, 56);
      },
      switch() {
        this.good = false;
        if (this.newsSwitch) {
          this.container.style.height = `${this.largeHeight}px`;
          this.recursivePop();
        } else {
          this.container.style.height = `${this.largeHeight}px`;
          setTimeout(this.recursiveAdd, 140);
        }
      },
      recursivePop() {
        if (this.announcementsChecked.length > 3) {
          this.announcementsChecked.pop();
          setTimeout(() => this.recursivePop(), 56);
        } else {
          this.container.style.height = `${this.smallHeight}px`;
          this.good = true;
        }
      },
      recursiveAdd() {
        if (this.announcementsChecked.length < this.announcements.length) {
          this.announcementsChecked.push(
            this.announcements[this.announcementsChecked.length]
          );
          setTimeout(() => this.recursiveAdd(), 56);
        } else {
          this.good = true;
          this.container.style.height = '';
        }
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
