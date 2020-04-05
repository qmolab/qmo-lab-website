<template>
  <v-list nav dens>
    <v-list-item
      v-for="link in links"
      :key="link.title"
      color="primary"
      :to="link.path"
      dens
    >
      <v-list-item-icon>
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ link.title }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
  export default {
    name: 'NavigationLinkList',
    components: {},
    props: {
      links: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped lang="scss">
  .nav {
    display: flex;
  }
</style>
