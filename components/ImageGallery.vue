<template>
  <div class="imageGallery">
    <v-container v-for="(gallery, k) in galleryImages" :key="k">
      <h3>{{ gallery.title }}</h3>
      <waterfall
        :id="k"
        :key="k"
        :container-id="k"
        :resizable="true"
        :items="gallery.images"
        popup-on-click
      />
    </v-container>
  </div>
</template>

<script>
  import Waterfall from '@/components/WaterfallLayout';

  export default {
    name: 'ImageGallery',
    components: {
      Waterfall,
    },
    props: {
      galleryImages: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {};
    },
  };
</script>
