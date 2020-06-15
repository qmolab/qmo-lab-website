<template>
  <v-app>
    <!-- Begin Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" dark temporary app>
      <v-list v-if="drawer" nav dens>
        <v-list-item><div class="qmoLogo" /></v-list-item>
        <v-divider />
        <nuxt-link
          v-for="(link, i) in navLinks"
          :key="i"
          v-slot="{ navigate, isActive, isExactActive }"
          :to="link.to"
        >
          <div>
            <v-list-item
              color="primary"
              :disabled="isExactActive"
              dens
              link
              @click="navigate"
            >
              <v-list-item-icon>
                <v-icon :color="isExactActive ? 'primary' : undefined">
                  {{ link.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item>
            <div v-if="isActive && link.sub">
              <v-divider />
              <nuxt-link
                v-for="(item, j) in link.sub"
                :key="j"
                v-slot="{ navigate: n, isExactActive: a }"
                :to="item.to"
                class="mb-0"
              >
                <v-list-item color="primary" :disabled="a" dens link @click="n">
                  <v-list-item-title class="pl-12">{{
                    item.title
                  }}</v-list-item-title>
                </v-list-item>
              </nuxt-link>
              <v-divider />
            </div>
          </div>
        </nuxt-link>
      </v-list>
    </v-navigation-drawer>
    <!-- End Navigation Drawer -->

    <!-- Begin Header -->
    <v-app-bar ref="header" dark app :scroll-threshold="32" hide-on-scroll>
      <v-row justify="center" no-gutters class="fill-h">
        <v-col cols="12" md="0" class="hidden-md-and-up hide-overflow fill-h">
          <v-app-bar-nav-icon class="float-l" @click.stop="drawer = !drawer" />
          <h1 class="titleText headline ellipsis_text">
            QMO Lab
            {{ title }}
          </h1>
        </v-col>
        <v-col md="3" class="headerCol">
          <div :key="$route.path" class="hidden-sm-and-down mt-2">
            <QmoLogo />
          </div>
        </v-col>
        <v-spacer class="hidden-sm-and-down" />
        <v-col sm="auto" class="hidden-sm-and-down fill-h headerCol">
          <nav class="nav float-l d-flex align-center">
            <div
              v-for="(link, i) in navLinks"
              :key="i"
              class="rel fill-h float-l d-flex align-center"
            >
              <nuxt-link v-slot="{ navigate, isExactActive }" :to="link.to">
                <div>
                  <v-btn
                    :disabled="isExactActive"
                    class="mb-1"
                    exact
                    text
                    link
                    small
                    @click="navigate"
                  >
                    {{ link.title }}
                  </v-btn>
                  <div
                    :class="{ bottomBorder: isExactActive }"
                    :style="`background-color: ${$vuetify.theme.themes.dark.primary}`"
                  />
                </div>
              </nuxt-link>
            </div>
          </nav>
        </v-col>
      </v-row>
    </v-app-bar>
    <!-- End Header -->

    <!-- Begin Page Content -->
    <v-content>
      <!-- Begin Conditional Hero -->
      <v-expand-transition>
        <div v-if="heroOpen">
          <v-carousel
            cycle
            show-arrows-on-hover
            progress
            continuous
            hide-delimiters
            class="progressCarousel"
          >
            <v-carousel-item
              v-for="(slide, i) in $store.state.images.heroSlides"
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
                    $mdiOpenInNew
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
    <v-lazy transition="fade-transition" min-height="380">
      <TheFooter />
    </v-lazy>
    <!-- End Footer -->
  </v-app>
</template>

<script>
  import QmoLogo from '@/components/QmoLogo.vue';
  import TheFooter from '@/components/TheFooter.vue';
  export default {
    scrollToTop: true,
    components: { QmoLogo, TheFooter },
    data() {
      return { drawer: false, spinner: undefined };
    },
    computed: {
      title() {
        return this.$store.state.currentPageTitle;
      },
      navLinks() {
        return this.$store.state.navLinks;
      },
      heroOpen() {
        return this.$route.name
          ? this.$store.state.usesHeroSlider[this.$route.name]
          : false;
      },
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
  .titleText {
    margin-top: 6px;
  }
  .nav {
    height: 100%;
    margin-bottom: -8px;
  }
  .v-app-bar--hide-shadow .logoContainer {
    opacity: 0;
  }
  .bottomBorder {
    position: absolute;
    bottom: -3px;
    left: 12px;
    right: 12px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    height: 5px;
    background-color: $primary;
  }
</style>
