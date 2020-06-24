<template>
  <div>
    <BaseImage
      v-if="payload"
      :src="payload.img"
      :title="noTitle ? undefined : payload.title || itemId"
      :alt="payload.alt || itemId"
      v-bind="$attrs"
    >
      <slot />
    </BaseImage>
    <slot name="append" :payload="payload" />
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
      noTitle: { type: Boolean, default: false },
    },
    computed: {
      payload() {
        return this.$store.state.images[this.subCategory][this.itemId];
      },
    },
  };
</script>
