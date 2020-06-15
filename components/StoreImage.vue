<template>
  <div>
    <BaseImage
      v-if="asset"
      :src="asset.img"
      :webp="asset.webp"
      :title="figure ? undefined : title"
      :alt="asset.alt"
      v-bind="$attrs"
      border
    >
      <slot />
    </BaseImage>
    <div v-if="figure" class="caption mb-2">
      Figure {{ figure }}: {{ asset.title }}
    </div>
  </div>
</template>

<script>
  import BaseImage from '@/components/BaseImage.vue';
  export default {
    name: 'StoreImage',
    components: { BaseImage },
    inheritAttrs: false,
    props: {
      subCategory: { type: String, required: true },
      itemId: { type: String, required: true },
      figure: { type: Number, default: undefined },
      border: { type: Boolean, default: false },
    },
    computed: {
      asset() {
        return this.$store.state.images[this.subCategory][this.itemId];
      },
      title() {
        return this.figure ? undefined : this.asset.title || this.itemId;
      },
    },
  };
</script>
