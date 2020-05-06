<template>
  <div :class="{ imageLink: link }" @click="$emit('click', $event)">
    <v-tooltip
      bottom
      :open-delay="tooltipDelay"
      :close-delay="tooltipDelay / 2"
      :eager="eagerSetting"
      :disabled="disabled"
    >
      <template v-slot:activator="{ on, value }">
        <v-img
          :src="hoverSource && value ? hoverSource : sourceChecked"
          :lazy-src="hvrLazySrc && value ? hvrLazySrc : lazySrcChecked"
          :srcset="hvrSourceSet && value ? hvrSourceSet : srcsetChecked"
          :eager="eagerSetting"
          :gradient="gradient"
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
            <v-row class="fill-height ma-0" align="center" justify="center">
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
      hoverSrc: { type: [String, Object], default: undefined },
      hoverWebp: { type: [String, Object], default: undefined },
      hoverLazySrc: { type: String, default: undefined },
      hoverSrcset: { type: String, default: undefined },
      gradient: { type: String, default: undefined },
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
      disabled: { type: Boolean, default: false },
    },
    asyncData({ store }) {
      return {
        eagerSetting: store.state.eager,
        transitionSetting: store.state.imageTransition,
      };
    },
    data() {
      return { aspectRatioChecked: undefined };
    },
    computed: {
      sourceChecked() {
        return typeof this.hoverSrc === 'string' ? this.src : this.src.src;
      },
      hoverSource() {
        return !this.hoverSrc || typeof this.hoverSrc === 'string'
          ? this.hoverSrc
          : this.hoverSrc.src;
      },
      srcsetChecked() {
        if (this.srcset) return this.srcset;
        else if (typeof this.src !== 'string') {
          let srcset = this.src.srcSet || this.src.srcset;
          if (this.webp) {
            if (this.webp.srcSet || this.webp.srcset)
              srcset += ' ' + this.webp.srcSet || this.webp.srcset;
            else srcset = this.webp;
          }
          return srcset;
        }
        return undefined;
      },
      hvrSourceSet() {
        if (this.hoverSrcset) return this.hoverSrcset;
        else if (this.hoverSrc && typeof this.hoverSrc !== 'string') {
          let srcset = this.hoverSrc.srcSet || this.hoverSrc.srcset;
          if (this.hoverWebp) {
            if (this.hoverWebp.srcSet || this.hoverWebp.srcset)
              srcset += ' ' + this.hoverWebp.srcSet || this.hoverWebp.srcset;
            else srcset = this.hoverWebp;
          }
          return srcset;
        }
        return undefined;
      },
      lazySrcChecked() {
        return (
          this.lazySrc ||
          (typeof this.src === 'string'
            ? undefined
            : this.src.placeholder || this.src.lazySrc)
        );
      },
      hvrLazySrc() {
        return (
          this.hoverLazySrc ||
          (!this.hoverSrc || typeof this.hoverSrc === 'string'
            ? undefined
            : this.hoverSrc.placeholder || this.hoverSrc.lazySrc)
        );
      },
    },
    mounted() {
      if (this.aspectRatio) this.aspectRatioChecked = this.aspectRatio;
      else if (this.lazySrcChecked && !(this.width && this.height)) {
        const img = new Image();
        img.onload = () => {
          this.aspectRatioChecked = img.naturalWidth / img.naturalHeight;
        };
        img.src = this.lazySrcChecked;
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
