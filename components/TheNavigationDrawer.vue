<template>
  <v-list nav dens>
    <v-list-item><QmoLogo /></v-list-item>
    <v-divider />
    <v-list-item
      v-for="link in navLinks"
      :key="link.title"
      color="primary"
      :to="link.to"
      nuxt
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
  import QmoLogo from '@/components/QmoLogo.vue';
  export default {
    name: 'TheNavigationDrawer',
    components: { QmoLogo },
    props: {},
    computed: {
      navLinks() {
        return this.$store.state.navLinks.main;
      },
    },
  };
</script>

<style scoped lang="scss"></style>
