<template>
  <div :class="{ imageLink: link }" @click="$emit('click', $event)">
    <v-tooltip
      bottom
      :open-delay="tooltipDelay"
      :close-delay="tooltipDelay / 2"
      :disabled="noTooltip"
    >
      <template v-slot:activator="{ on }">
        <v-img
          :src="sourceChecked"
          :lazy-src="lazySrcChecked"
          :srcset="srcsetChecked"
          :alt="alt"
          :aspect-ratio="aspectRatioChecked"
          :contain="contain"
          :height="height"
          :min-height="minHeight"
          :max-height="maxHeight"
          :width="width"
          :min-width="minWidth"
          :max-width="maxWidth"
          :options="{
            threshold: 0.1,
          }"
          transition="fade-transition"
          v-on="on"
        >
          <slot />
          <template v-slot:placeholder>
            <v-row class="fill-h ma-0 align-center justify-center">
              <v-progress-circular indeterminate color="grey lighten-5" />
            </v-row>
          </template>
        </v-img>
      </template>
      <span>{{ title }}</span>
    </v-tooltip>
  </div>
</template>

<script>
  export default {
    name: 'BaseImage',
    props: {
      src: { type: [String, Object], required: true },
      webp: { type: [String, Object], default: undefined },
      lazySrc: { type: String, default: undefined },
      srcset: { type: String, default: undefined },
      alt: { type: String, default: undefined },
      title: { type: String, default: '' },
      aspectRatio: { type: [Number, String], default: undefined },
      contain: { type: Boolean, default: false },
      height: { type: [Number, String], default: undefined },
      minHeight: { type: [Number, String], default: undefined },
      maxHeight: { type: [Number, String], default: undefined },
      width: { type: [Number, String], default: undefined },
      minWidth: { type: [Number, String], default: undefined },
      maxWidth: { type: [Number, String], default: undefined },
      position: { type: [String, Number], default: 'center, center' },
      tooltipDelay: { type: [String, Number], default: '500' },
      link: { type: Boolean, default: false },
      noTooltip: { type: Boolean, default: false },
      preload: { type: Boolean, default: false },
    },
    data() {
      return {
        aspectRatioChecked: undefined,
        sourceChecked: undefined,
        srcsetChecked: undefined,
        lazySrcChecked: undefined,
      };
    },
    watch: {
      src() {
        this.updateSources();
      },
    },
    created() {
      this.updateSources();
    },
    mounted() {
      if (this.aspectRatio || !this.preload)
        this.aspectRatioChecked = this.aspectRatio;
      else if (
        !(this.width || this.height) &&
        this.lazySrcChecked &&
        !(this.width && this.height)
      ) {
        const img = new Image();
        img.onload = () => {
          this.aspectRatioChecked = img.naturalWidth / img.naturalHeight;
        };
        img.src = this.lazySrcChecked;
      }
    },
    methods: {
      updateSources() {
        if (typeof this.src === 'string') {
          this.sourceChecked = this.src;
          this.srcsetChecked = this.srcset;
          this.lazySrcChecked = this.lazySrc;
        } else {
          this.sourceChecked = this.src.src;
          const srcSet = this.srcset || this.src.srcset || this.src.srcSet;
          if (this.webp) {
            const webpSrcSet = this.webp.srcset || this.webp.srcSet;
            this.srcsetChecked = webpSrcSet
              ? srcSet
                ? srcSet.concat(webpSrcSet)
                : webpSrcSet
              : this.webp;
          } else {
            this.srcsetChecked = srcSet;
          }
          this.lazySrcChecked =
            this.lazySrc || this.src.placeholder || this.src.lazySrc;
        }
      },
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
