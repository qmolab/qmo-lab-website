<template>
  <BaseImage
    :lazy-src="lazySrc"
    :src="src"
    :webp="webp"
    :srcset="srcset"
    :alt="alt"
    :title="title"
    :gradient="gradient"
    :aspect-ratio="aspectRatio"
    :contain="contain"
    :height="height"
    :min-height="minHeight"
    :max-height="maxHeight"
    :width="width"
    :min-width="minWidth"
    :max-width="maxWidth"
    :position="position"
    :tooltip-delay="tooltipDelay"
    :class="{ imageLink: !disabled }"
    @click="disabled ? undefined : $emit('click', $event)"
  >
    <slot />
  </BaseImage>
</template>

<script>
  import BaseImage from '@/components/BaseImage.vue';
  export default {
    name: 'ImageButton',
    components: { BaseImage },
    props: {
      src: { type: [String, Object], required: true },
      webp: { type: [String, Object], default: undefined },
      lazySrc: { type: String, default: undefined },
      srcset: { type: String, default: undefined },
      gradient: { type: String, default: undefined },
      alt: { type: String, default: undefined },
      title: { type: String, default: '' },
      aspectRatio: { type: String, default: undefined },
      contain: { type: Boolean, default: false },
      height: { type: [Number, String], default: undefined },
      minHeight: { type: [Number, String], default: undefined },
      maxHeight: { type: [Number, String], default: undefined },
      width: { type: [Number, String], default: undefined },
      minWidth: { type: [Number, String], default: undefined },
      maxWidth: { type: [Number, String], default: undefined },
      position: { type: [String, Number], default: 'center, center' },
      tooltipDelay: { type: [String, Number], default: '500' },
      disabled: { type: Boolean, default: false },
    },
  };
</script>

<style lang="scss" scoped>
  .imageLink {
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
  }
</style>
