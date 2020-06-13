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
        exact
        text
        link
        @click="navigate"
      >
        <slot />
      </v-btn>
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
    },
  };
</script>
