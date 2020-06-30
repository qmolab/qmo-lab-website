<template>
  <div class="no-overflow link rounded">
    <QImg
      cat="gallery"
      :name="name"
      :placeholder="placeholder"
      :title="title"
      :alt="alt"
      :aspect-ratio="aspectRatio"
      v-bind="$attrs"
      @click="$emit('click', $event)"
    />
  </div>
</template>

<script>
  import QImg from '@/components/lib/QImg.vue';
  export default {
    name: 'GalleryImage',
    components: { QImg },
    inheritAttrs: false,
    props: {
      name: { type: String, required: true },
      placeholder: { type: String, required: true },
      title: { type: String, default: undefined },
      alt: { type: String, default: undefined },
    },
    data: () => ({ aspectRatio: undefined }),
    mounted() {
      if (this.placeholder) {
        const img = new Image();
        img.onload = () => {
          this.aspectRatio = img.naturalWidth / img.naturalHeight;
        };
        img.src = this.placeholder;
      }
    },
  };
</script>
