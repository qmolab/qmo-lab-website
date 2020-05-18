<template>
  <div>
    <div class="carousel_slider">
      <v-carousel
        :cycle="cycle"
        height="100%"
        show-arrows-on-hover
        progress
        continuous
        hide-delimiters
        :next-icon="mdiChevronRight"
        :prev-icon="mdiChevronLeft"
      >
        <v-carousel-item
          v-for="(slide, i) in heroSlides"
          :key="i"
          class="fill-h"
        >
          <v-img
            :src="slide.src.src"
            :lazy-src="slide.src.placeholder"
            :srcset="slide.webp"
            :alt="slide.alt"
            cover
            height="100%"
          >
            <v-row class="lightbox align-end white--text pa-2 fill-h">
              <v-col>
                <v-sheet
                  link
                  hover
                  color="rgba(0, 0, 0, 0.3)"
                  class="mb-8 d-inline-block"
                >
                  <div class="subtitle-1 capitalize pa-2">
                    {{ slide.title }}
                  </div>
                </v-sheet>
                <v-spacer />
              </v-col>
            </v-row>
          </v-img>
        </v-carousel-item>
      </v-carousel>
    </div>
    <v-container>
      <slot />
    </v-container>
  </div>
</template>
<script>
  import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
  export default {
    data() {
      return {
        cycle: true,
        heroSlides: undefined,
        mdiChevronLeft,
        mdiChevronRight,
      };
    },
    created() {
      this.heroSlides = this.$store.state.images.heroSlides;
    },
  };
</script>

<style scoped lang="scss">
  .carousel_slider {
    height: 350px;
    @media (max-width: 1161px) {
      height: 250px;
    }
  }
  .capitalize {
    text-transform: capitalize;
  }
</style>
