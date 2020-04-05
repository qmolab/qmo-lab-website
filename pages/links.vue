<template>
  <div class="linksPage">
    <HeroCarousel :slides="slides" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HeroCarousel from '@/components/HeroCarousel.vue';

  export default {
    name: 'LinksView',
    components: {
      HeroCarousel,
    },
    data() {
      return {
        slides: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      };
    },
  };
</script>

<style scoped lang="scss"></style>
