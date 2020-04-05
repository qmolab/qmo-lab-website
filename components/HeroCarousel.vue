<template>
  <div class="carousel_slider">
    <BaseCarousel :slides="slides" />
  </div>
</template>

<script>
  import BaseCarousel from '@/components/primitive/BaseCarousel.vue';
  export default {
    name: 'HeroCarousel',
    components: {
      BaseCarousel,
    },
    props: {
      slides: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped lang="scss">
  @import '@/sass/variables.scss';
  .carousel_slider {
    height: 300px;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      height: 200px;
    }
  }
</style>
