<template>
  <v-container class="galleryPage">
    <h2 class="title">QMO YouTube Channel</h2>
    <VideoGallery />
    <h2 class="title">QMO Lab Gallery</h2>
    <ImageGallery />
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
  };
</script>

<style scoped lang="scss">
  .title {
    text-align: center;
  }
</style>
