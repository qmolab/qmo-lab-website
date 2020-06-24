<template>
  <div>
    <v-img
      ref="image"
      :src="src.src"
      :srcset="srcset || src.srcSet"
      :lazy-src="lazySrc || src.placeholder"
      v-bind="$attrs"
      :class="imgClass"
      :options="{ threshold: 0.1 }"
      transition="fade-transition"
      @click="$emit('click', $event)"
    >
      <slot />
      <template v-slot:placeholder>
        <v-row class="fill-h ma-0 align-center justify-center">
          <v-progress-circular size="60" indeterminate color="primary" />
        </v-row>
      </template>
    </v-img>
    <v-tooltip
      v-if="title"
      bottom
      :open-delay="tooltipDelay"
      :close-delay="tooltipDelay / 2"
      :activator="activator"
    >
      <span class="text-capitalize">{{ title }}</span>
    </v-tooltip>
  </div>
</template>

<script>
  export default {
    name: 'BaseImage',
    inheritAttrs: false,
    props: {
      src: { type: [String, Object], required: true },
      lazySrc: { type: String, default: undefined },
      srcset: { type: String, default: undefined },
      title: { type: String, default: undefined },
      imgClass: { type: [String, Object], default: '' },
    },
    data: () => ({ tooltipDelay: '500', activator: undefined }),
    mounted() {
      this.activator = this.$refs.image;
    },
  };
</script>
