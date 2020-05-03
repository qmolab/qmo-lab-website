<template>
  <div>
    <HeroCarousel :slides="heroSlides" />
    <BaseLayout>
      <slot />
    </BaseLayout>
  </div>
</template>
<script>
  import HeroCarousel from '@/components/HeroCarousel.vue';
  import BaseLayout from '@/components/layouts/BaseLayout.vue';
  export default {
    components: { HeroCarousel, BaseLayout },
    computed: {
      heroSlides() {
        return this.$store.state.heroSlides;
      },
    },
  };
</script>
