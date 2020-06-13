<template>
  <v-app>
    <!-- Begin Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" dark temporary app>
      <TheNavigationDrawer :nav-links="sideNavLinks" />
    </v-navigation-drawer>
    <!-- End Navigation Drawer -->

    <!-- Begin Header -->
    <v-app-bar ref="header" dark app :scroll-threshold="32" hide-on-scroll>
      <TheHeader
        :title="title"
        :nav-links="navLinks"
        @toggle-drawer="drawer = !drawer"
      />
    </v-app-bar>
    <!-- End Header -->

    <!-- Begin Page Content -->
    <v-content>
      <!-- Begin Conditional Hero -->
      <v-expand-transition>
        <div v-if="heroOpen">
          <v-carousel
            :cycle="cycle"
            show-arrows-on-hover
            progress
            continuous
            hide-delimiters
            class="progressCarousel"
          >
            <v-carousel-item
              v-for="(slide, i) in heroSlides"
              :key="i"
              :src="slide.src.src"
              :lazy-src="slide.src.placeholder"
              :srcset="slide.webp"
              :alt="slide.alt"
              cover
            >
              <div class="d-flex align-end fill-h pa-4 justify-end">
                <v-btn
                  :nuxt="slide.to ? true : false"
                  color="rgba(0, 0, 0, 0.4)"
                  :to="slide.to"
                  :href="slide.href"
                  :target="slide.to ? undefined : '_blank'"
                  :rel="slide.to ? undefined : 'noopener'"
                >
                  {{ slide.title }}
                  <v-icon v-if="slide.href" right color="secondary">
                    {{ mdiOpenInNew }}
                  </v-icon>
                </v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-expand-transition>
      <!-- End Conditional Hero -->

      <!-- Main Page Content -->
      <v-container :class="{ appContainer: !heroOpen }">
        <!-- Begin Page Title -->
        <h1 class="hidden-sm-and-down display-1 my-2">
          QMO Lab
          <v-fade-transition leave-absolute>
            <span :key="title">{{ title }}</span>
          </v-fade-transition>
        </h1>
        <!-- End Page Title -->

        <!-- Page Contents inserted here -->
        <nuxt />
        <!-- End Page Contents -->
      </v-container>
      <!-- End Main Page Content -->
    </v-content>
    <!-- End Page Content -->
    <!-- Begin Footer -->
    <TheFooter />
    <!-- End Footer -->
  </v-app>
</template>

<script>
  import { mdiOpenInNew } from '@mdi/js';
  import TheNavigationDrawer from '@/components/TheNavigationDrawer.vue';
  import TheHeader from '@/components/TheHeader.vue';
  import TheFooter from '@/components/TheFooter.vue';
  export default {
    scrollToTop: true,
    components: {
      TheNavigationDrawer,
      TheHeader,
      TheFooter,
    },
    data() {
      return { drawer: false, cycle: true, mdiOpenInNew };
    },
    computed: {
      heroSlides() {
        return this.$store.state.images.heroSlides;
      },
      heroOpen() {
        return this.$store.state.usesHeroSlider[this.name];
      },
      name() {
        return this.$route.name || '';
      },
      title() {
        if (this.name === 'index') return '';
        const title = this.$route.params.id
          ? (
              this.$route.matched[this.$route.matched.length - 2].path
                .split('/')
                .slice(-1)[0] +
              ': ' +
              this.$route.params.id
            ).replace(/_/g, ' ')
          : this.name.replace(/_/g, ' ').replace(/-/g, ': ');
        return title.charAt(0).toUpperCase() + title.slice(1);
      },
      navLinks() {
        return this.$store.state.navLinks;
      },
      sideNavLinks() {
        return { ...this.navLinks };
      },
    },
    head() {
      return { title: this.title };
    },
  };
</script>

<style lang="scss">
  .progressCarousel {
    height: 305px !important;
    .v-window__container {
      height: 301px !important;
      .v-window-item > .v-responsive.v-image.v-carousel__item {
        height: 301px !important;
      }
    }
  }
  .appContainer {
    min-height: 80vh;
  }
</style>
