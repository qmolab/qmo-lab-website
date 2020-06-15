<template>
  <div>
    <v-img
      ref="image"
      :src="src.src"
      :srcset="webp || srcset || src.srcSet"
      :lazy-src="lazySrc || src.placeholder"
      v-bind="$attrs"
      :class="{ imgBorder: border, imageLink: link }"
      :options="{ threshold: 0.1 }"
      transition="fade-transition"
      eager
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
      <span class="cap">{{ title }}</span>
    </v-tooltip>
  </div>
</template>

<script>
  export default {
    name: 'BaseImage',
    inheritAttrs: false,
    props: {
      src: { type: [String, Object], required: true },
      webp: { type: [String, Object], default: undefined },
      lazySrc: { type: String, default: undefined },
      srcset: { type: String, default: undefined },
      title: { type: String, default: undefined },
      link: { type: Boolean, default: false },
      border: { type: Boolean, default: false },
    },
    data: () => ({ tooltipDelay: '500', activator: undefined }),
    mounted() {
      this.activator = this.$refs.image;
    },
  };
</script>

<style lang="scss" scoped>
  .imageLink {
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
  }
  .imgBorder {
    border: 2px solid #212121;
  }
</style>
