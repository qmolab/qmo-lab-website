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
        <v-col cols="12" md="0" class="hidden-md-and-up no-overflow fill-h">
          <v-app-bar-nav-icon
            class="float-left"
            aria-label="menu"
            @click.stop="drawer = !drawer"
          />
          <h1 class="titleText headline text-truncate d-block">
            QMO Lab
            {{ title }}
          </h1>
        </v-col>
        <v-col md="3" class="headerCol">
          <div :key="$route.path" class="hidden-sm-and-down mt-2">
            <div class="logoContainer rel fill-w">
              <div class="qmoLogo spinning abs t0 l0 rounded-circle" />
              <div class="qmoLogo textLogo abs t0 r0" />
            </div>
          </div>
        </v-col>
        <v-spacer class="hidden-sm-and-down" />
        <v-col sm="auto" class="hidden-sm-and-down fill-h headerCol">
          <nav class="fill-h mb-n2 float-left d-flex align-center">
            <div
              v-for="(link, i) in navLinks"
              :key="i"
              class="rel fill-h float-left d-flex align-center"
            >
              <v-btn
                :to="link.to"
                exact-active-class="v-btn--disabled"
                class="mb-1 noOverlay"
                text
                link
                nuxt
              >
                {{ link.title }}
              </v-btn>
              <div
                :class="{
                  primary: true,
                  'bottomBorder primary abs l0 r0 b0 mx-3 mb-n1':
                    $route.path === link.to,
                }"
              />
            </div>
          </nav>
        </v-col>
      </v-row>
    </v-app-bar>
    <!-- End Header -->

    <!-- Begin Page Content -->
    <v-main>
      <!-- Begin Conditional Hero -->
      <v-expand-transition>
        <div v-if="heroOpen">
          <v-carousel
            v-model="carouselModel"
            show-arrows-on-hover
            progress
            continuous
            hide-delimiters
            class="stretchCarousel progressCarousel"
          >
            <v-carousel-item
              v-for="(slide, i) in heroSlides"
              :key="i"
              :src="imgPath + slide.name + ext"
              :lazy-src="slide.placeholder"
              :alt="slide.alt"
              cover
              @error="ext = '.jpg'"
            >
              <div class="d-flex align-end fill-h pa-4 justify-end">
                <v-btn
                  :nuxt="slide.to ? true : false"
                  text
                  :to="slide.to"
                  :href="slide.href"
                  :target="slide.to ? undefined : '_blank'"
                  :rel="slide.to ? undefined : 'noopener'"
                  class="hidden-sm-and-down black--80"
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
        <div v-if="heroOpen" class="caption hidden-md-and-up">
          <v-btn
            v-for="(slide, i) in heroSlides"
            v-show="carouselModel === i"
            :key="i"
            :nuxt="slide.to ? true : false"
            text
            :to="slide.to"
            :href="slide.href"
            :target="slide.to ? undefined : '_blank'"
            :rel="slide.to ? undefined : 'noopener'"
            class="unsetWhiteSpace"
          >
            {{ slide.title }}
            <v-icon v-if="slide.href" right color="secondary">
              $mdiOpenInNew
            </v-icon>
          </v-btn>
        </div>
        <!-- Begin Page Title -->
        <h1 class="hidden-sm-and-down text-h4 my-2">
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
    </v-main>
    <!-- End Page Content -->
    <!-- Begin Footer -->
    <v-lazy transition="fade-transition" min-height="380">
      <TheFooter />
    </v-lazy>
    <!-- End Footer -->
  </v-app>
</template>

<script>
  import TheFooter from '@/components/TheFooter.vue';
  export default {
    scrollToTop: true,
    components: { TheFooter },
    data() {
      return {
        drawer: false,
        spinner: undefined,
        carouselModel: 0,
        ext: '.webp',
        imgPath: 'https://qmolab.ucr.edu/node/images/hero_carousel/',
      };
    },
    computed: {
      heroSlides() {
        return this.$store.state.hero_images;
      },
      currentSlide() {
        return this.heroSlides[
          Object.keys(this.heroSlides)[this.carouselModel]
        ];
      },
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
  .bottomBorder {
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    height: 5px;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .logoContainer {
    min-width: 194px;
    max-width: 226px;
    .spinning {
      background-position: -1px center;
      width: 30%;
      background-color: $header;
      animation: spin 1.12s ease;
    }
    .textLogo {
      background-position: right center;
      width: 68%;
    }
  }
  .v-app-bar--hide-shadow .logoContainer {
    opacity: 0;
  }
  .stretchCarousel.v-carousel .v-responsive__content {
    height: 100%;
  }
</style>
