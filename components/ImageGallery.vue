<template>
  <div>
    <ModalImage
      :id="`modal-gallery`"
      v-model="currentIndex"
      :images="currentImages"
    />
    <div v-for="(gallery, k) in galleryImages" :key="k" class="mt-4">
      <h2 class="px-6 headline">{{ gallery.title }}</h2>
      <waterfall
        :id="`waterfall-${k}`"
        :key="`waterfall-${k}`"
        v-slot="{ item, index }"
        :container-id="`waterfall-${k}`"
        :resizable="true"
        :items="gallery.images"
      >
        <GalleryImage
          :src="item.thumbnail"
          :webp="item.webp"
          :alt="item.title"
          :title="item.title"
          @click="click(index, gallery.images)"
        />
      </waterfall>
    </div>
  </div>
</template>

<script>
  import Waterfall from '@/components/lib/VuetifyWaterfall.vue';
  import GalleryImage from '@/components/GalleryImage.vue';
  import ModalImage from '@/components/ModalImage.vue';

  export default {
    name: 'ImageGallery',
    components: {
      Waterfall,
      GalleryImage,
      ModalImage,
    },
    props: { galleryImages: { type: Array, required: true } },
    data() {
      return {
        currentIndex: -1,
        currentImages: [],
      };
    },
    methods: {
      click(index, images) {
        this.currentImages = images;
        this.currentIndex = index;
      },
    },
  };
</script>
