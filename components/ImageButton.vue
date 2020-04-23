<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="flat ? 0 : hover ? hoverElevation : elevation"
      :class="{ 'on-hover': hover, imageCard: true }"
      :flat="flat"
      link
      @click="$emit('clicked', $event)"
    >
      <BaseImage
        :lazy-src="lazySrc || require('@/assets/images/logo.svg')"
        :src="src"
        :srcset="srcset"
        :sizes="sizes"
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
        @error="$emit('error', $event)"
        @load="$emit('load', $event)"
        @loaded="$emit('loaded', $event)"
        @sized="$emit('sized', $event)"
      >
        <slot />
      </BaseImage>
    </v-card>
  </v-hover>
</template>

<script>
  import BaseImage from '@/components/BaseImage.vue';
  export default {
    name: 'ImageButton',
    components: { BaseImage },
    props: {
      src: { type: [String, Object], required: true },
      lazySrc: { type: String, default: undefined },
      srcset: { type: String, default: undefined },
      sizes: { type: String, default: undefined },
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
      flat: { type: Boolean, default: false },
      elevation: { type: [Number, String], default: 2 },
      hoverElevation: { type: [Number, String], default: 12 },
    },
  };
</script>
