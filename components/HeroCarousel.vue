<template>
  <div class="carousel_slider">
    <BaseCarousel :slides="slides" />
  </div>
</template>

<script>
  import BaseCarousel from '@/components/BaseCarousel.vue';
  export default {
    name: 'HeroCarousel',
    components: {
      BaseCarousel,
    },
    props: {
      slides: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style scoped lang="scss">
  @import '~vuetify/src/styles/styles.sass';
  .carousel_slider {
    height: 300px;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      height: 200px;
    }
  }
</style>
