<template>
  <v-container class="galleryPage">
    <h1 class="hidden-sm-and-down">QMO Lab Gallery</h1>
    <v-btn
      x-large
      text
      class="my-2"
      href="https://www.youtube.com/channel/UCJdmhoGpcmAFzVx9PolvBOA"
    >
      QMO YouTube Channel
    </v-btn>
    <VideoGallery />
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
