<template>
  <v-carousel cycle show-arrows-on-hover height="inherit">
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src" />
  </v-carousel>
</template>

<script>
  export default {
    name: 'BaseCarousel',
    props: {
      slides: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style scoped lang="scss"></style>
