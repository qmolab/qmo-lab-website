<template>
  <nuxt-link
    v-slot="{ /* href, route, */ navigate, isExactActive /*, isActive*/ }"
    :to="to"
  >
    <div>
      <v-btn
        :x-small="xSmall"
        :small="small"
        :large="large"
        :x-large="xLarge"
        :disabled="isExactActive"
        :class="{ 'mb-1': activeBorder }"
        exact
        text
        link
        @click="navigate"
      >
        <slot />
      </v-btn>
      <div
        v-if="activeBorder"
        :class="{ bottomBorder: isExactActive }"
        :style="`background-color: ${$vuetify.theme.themes.dark.primary}`"
      />
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      to: { type: String, required: true },
      xSmall: { type: Boolean, default: false },
      small: { type: Boolean, default: false },
      large: { type: Boolean, default: false },
      xLarge: { type: Boolean, default: false },
      icon: { type: Boolean, default: false },
      activeBorder: { type: Boolean, default: false },
    },
  };
</script>

<style lang="scss" scoped>
  .bottomBorder {
    position: absolute;
    bottom: -3px;
    left: 12px;
    right: 12px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    height: 5px;
    background-color: $primary;
  }
</style>
