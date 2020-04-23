<template>
  <div class="carousel_slider">
    <BaseCarousel :slides="slides" cycle />
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
    height: 350px;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      height: 250px;
    }
  }
</style>
