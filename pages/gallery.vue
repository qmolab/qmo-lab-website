<template>
  <v-container class="galleryPage">
    <h2 class="title">{{ videoGalleryTitle }}</h2>
    <VideoGallery :videos="videoGalleryVideoIds" />
    <h2 class="title">{{ imageGalleryTitle }}</h2>
    <ImageGallery :gallery-images="imageGalleryImages" />
  </v-container>
</template>

<script>
  import VideoGallery from '@/components/VideoGallery';
  import ImageGallery from '@/components/ImageGallery';

  export default {
    name: 'GalleryView',
    components: {
      VideoGallery,
      ImageGallery,
    },
    computed: {
      videoGalleryVideoIds() {
        return this.$store.state.gallery.videoGalleryVideoIds;
      },
      imageGalleryImages() {
        return this.$store.state.gallery.imageGalleryImages;
      },
      videoGalleryTitle() {
        return this.$store.state.gallery.videoGalleryTitle;
      },
      imageGalleryTitle() {
        return this.$store.state.gallery.imageGalleryTitle;
      },
    },
  };
</script>

<style scoped lang="scss">
  .title {
    text-align: center;
  }
</style>
