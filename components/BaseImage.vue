<template>
  <v-tooltip
    bottom
    :open-delay="tooltipDelay"
    :close-delay="tooltipDelay / 2"
    :eager="eagerSetting"
  >
    <template v-slot:activator="{ on }">
      <v-lazy
        :options="{
          threshold: 0.5,
        }"
        transition="fade-transition"
      >
        <v-img
          :src="sourceChecked"
          :lazy-src="lazySrcChecked"
          :srcset="srcsetChecked"
          :sizes="sizesChecked"
          :eager="eagerSetting"
          :gradient="gradient"
          :alt="alt"
          :aspect-ratio="aspectRatio"
          :contain="contain"
          :height="height"
          :min-height="minHeight"
          :max-height="maxHeight"
          :width="width"
          :min-width="minWidth"
          :max-width="maxWidth"
          @error="$emit('error', $event)"
          @load="$emit('load', $event)"
          @sized="$emit('sized', $event)"
          v-on="on"
        >
          <slot />
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5" />
            </v-row>
          </template>
        </v-img>
      </v-lazy>
    </template>
    <span>{{ title }}</span>
  </v-tooltip>
</template>

<script>
  export default {
    name: 'BaseImage',
    props: {
      src: { type: [String, Object], required: true },
      lazySrc: { type: String, default: undefined },
      srcset: { type: String, default: undefined },
      sizes: { type: String, default: undefined },
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
    },
    data() {
      return {};
    },
    computed: {
      sourceChecked() {
        return this.src || undefined;
      },
      srcsetChecked() {
        return this.srcset || undefined;
      },
      lazySrcChecked() {
        return this.lazySrc || undefined;
      },
      sizesChecked() {
        return this.sizes || undefined;
      },
      eagerSetting() {
        // eager: { type: Boolean, default: false },
        return this.$store.state.eager;
      },
      transitionSetting() {
        // transition: { type: [Boolean, String], default: 'fade-transition' }
        return this.$store.state.imageTransition;
      },
    },
    mounted() {
      this.$emit('loaded');
    },
  };
</script>

<style></style>
