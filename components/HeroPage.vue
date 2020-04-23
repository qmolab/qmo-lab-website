<template>
  <div>
    <HeroCarousel :slides="heroSlides" />
    <v-container>
      <slot />
    </v-container>
  </div>
</template>
<script>
  import HeroCarousel from '@/components/HeroCarousel.vue';
  export default {
    components: { HeroCarousel },
    data() {
      return {};
    },
    computed: {
      heroSlides() {
        return this.$store.state.heroSlides;
      },
    },
  };
</script>
