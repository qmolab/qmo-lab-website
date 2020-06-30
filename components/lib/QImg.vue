<template>
  <div>
    <v-img
      ref="image"
      :src="src"
      :lazy-src="placeholder"
      :class="imgClass"
      v-bind="$attrs"
      @click="$emit('click', $event)"
      @error="ext = '.jpg'"
    >
      <slot />
      <template v-slot:placeholder>
        <v-row class="fill-h ma-0 align-center justify-center">
          <v-progress-circular size="48" indeterminate color="primary" />
        </v-row>
      </template>
    </v-img>
    <v-tooltip
      v-if="!noTitle"
      bottom
      :open-delay="500"
      :close-delay="250"
      :activator="activator"
    >
      <span class="text-capitalize">{{
        title || name.replace(/_/g, ' ')
      }}</span>
    </v-tooltip>
    <slot name="append" />
  </div>
</template>

<script>
  export default {
    name: 'QImg',
    inheritAttrs: false,
    props: {
      cat: { type: String, required: true },
      name: { type: String, required: true },
      placeholder: { type: String, default: undefined },
      title: { type: String, default: undefined },
      imgClass: { type: [String, Object], default: '' },
      large: { type: Boolean, default: false },
      noTitle: { type: Boolean, default: false },
    },
    data: () => ({ ext: '.webp', activator: undefined }),
    computed: {
      fullPath() {
        return (
          'https://qmolab.ucr.edu/node/images/' + this.cat + '/' + this.name
        );
      },
      src() {
        if (this.large) return this.fullPath + '_large.jpg';
        return this.fullPath + this.ext;
      },
    },
    mounted() {
      this.activator = this.$refs.image;
    },
  };
</script>
