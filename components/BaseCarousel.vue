<template>
  <v-carousel
    :cycle="cycle"
    :continuous="cycle"
    :show-arrows-on-hover="showArrowsOnHover"
    height="inherit"
    progress
    hide-delimiter-background
    :next-icon="mdiChevronRight"
    :prev-icon="mdiChevronLeft"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-img
        :src="slide.src.src"
        :lazy-src="slide.src.placeholder"
        :srcset="slide.webp"
        :alt="slide.alt"
        cover
        height="100%"
      >
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-card link hover color="rgba(0, 0, 0, 0.3)" class="subheading">
              <v-card-subtitle style="padding: 8px;">
                {{ slide.title }}
              </v-card-subtitle>
            </v-card>
            <v-spacer />
          </v-col>
        </v-row>
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5" />
          </v-row>
        </template>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';
  export default {
    name: 'BaseCarousel',
    props: {
      slides: {
        type: Array,
        required: true,
      },
      cycle: {
        type: Boolean,
        default: false,
      },
      showArrowsOnHover: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return { mdiChevronRight, mdiChevronLeft };
    },
  };
</script>

<style scoped lang="scss">
  .subheading {
    display: inline-block;
    text-transform: capitalize;
    margin-bottom: 30px;
  }
</style>
