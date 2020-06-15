<template>
  <div class="imageLink">
    <v-img
      ref="galleryImage"
      :src="src"
      :srcset="srcset"
      :lazy-src="lazySource"
      v-bind="attrs"
      :aspect-ratio="aspectRatio"
      :options="{ threshold: 0.1 }"
      transition="fade-transition"
      @click="$emit('click', $event)"
    />
    <v-tooltip
      v-if="title"
      bottom
      :open-delay="tooltipDelay"
      :close-delay="tooltipDelay / 2"
      :activator="$refs.galleryImage"
    >
      <span>{{ title }}</span>
    </v-tooltip>
  </div>
</template>

<script>
  export default {
    name: 'GalleryImage',
    inheritAttrs: false,
    data: () => ({ aspectRatio: undefined, tooltipDelay: '500' }),
    computed: {
      src() {
        return this.$attrs.src.src;
      },
      srcset() {
        return this.$attrs.webp || this.$attrs.srcset || this.$attrs.src.srcSet;
      },
      lazySource() {
        return this.$attrs.src.placeholder;
      },
      title() {
        return this.$attrs.title;
      },
      attrs() {
        const { src, webp, title, ...attrs } = this.$attrs;
        return attrs;
      },
    },
    mounted() {
      if (this.lazySource) {
        const img = new Image();
        img.onload = () => {
          this.aspectRatio = img.naturalWidth / img.naturalHeight;
        };
        img.src = this.lazySource;
      }
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
