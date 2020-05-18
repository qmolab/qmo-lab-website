<template>
  <div :style="`max-width: ${maxWidth}`">
    <BaseImage
      v-if="asset"
      :src="asset.img"
      :webp="asset.webp"
      :width="width"
      :height="height"
      :title="asset.title"
      :alt="asset.alt"
      :aspect-ratio="aspectRatio"
    />
  </div>
</template>

<script>
  import BaseImage from '@/components/BaseImage.vue';
  export default {
    components: { BaseImage },
    props: {
      category: { type: String, required: true },
      subCategory: { type: String, required: true },
      itemId: { type: String, required: true },
      width: { type: [String, Number], default: undefined },
      height: { type: [String, Number], default: undefined },
      aspectRatio: { type: [String, Number], default: undefined },
      maxWidth: { type: [String, Number], default: undefined },
    },
    computed: {
      asset() {
        return this.$store.state[this.category][this.subCategory][this.itemId];
      },
    },
  };
</script>
