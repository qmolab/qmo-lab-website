<template>
  <nuxt-link
    v-slot="{ href, route, navigate, isExactActive /*, isActive*/ }"
    :to="link.to"
  >
    <div class="navButton">
      <v-btn :href="href" text @click="navigate">
        {{ link.title }}
      </v-btn>
      <div :class="{ activeLink: isExactActive, bottomBorder: true }" />
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'NavigationLink',
    components: {},
    props: {
      link: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped lang="scss">
  .navButton {
    display: flex;
    align-items: center;
    position: relative;
    .bottomBorder {
      position: absolute;
      bottom: 0;
      left: 12px;
      right: 12px;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      &.activeLink {
        height: 5px;
        background-color: $primary;
      }
    }
    .v-btn {
      margin-bottom: 4px;
      &:before {
        background-color: initial;
      }
    }
  }
</style>
