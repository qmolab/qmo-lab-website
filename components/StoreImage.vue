<template>
  <div>
    <BaseImage
      v-if="asset"
      v-slot:caption
      :src="asset.img"
      :webp="asset.webp"
      :width="width"
      :height="height"
      :title="figure ? undefined : asset.title"
      :alt="asset.alt"
      :aspect-ratio="aspectRatio"
      :max-width="maxWidth"
      border
    >
      <div v-if="figure" class="caption mb-2">
        Figure {{ figure }}: {{ asset.title }}
      </div>
    </BaseImage>
  </div>
</template>

<script>
  import BaseImage from '@/components/BaseImage.vue';
  export default {
    components: { BaseImage },
    props: {
      subCategory: { type: String, required: true },
      itemId: { type: String, required: true },
      width: { type: [String, Number], default: undefined },
      height: { type: [String, Number], default: undefined },
      aspectRatio: { type: [String, Number], default: undefined },
      maxWidth: { type: [String, Number], default: undefined },
      figure: { type: Number, default: undefined },
      border: { type: Boolean, default: false },
    },
    computed: {
      asset() {
        return this.$store.state.images[this.subCategory][this.itemId];
      },
    },
  };
</script>
