<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      temporary
      app
    >
      <TheNavigationDrawer />
    </v-navigation-drawer>
    <v-app-bar hide-on-scroll app :scroll-threshold="64">
      <TheHeader @toggle-drawer="drawer = !drawer" />
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <TheFooter />
  </v-app>
</template>

<script>
  import TheNavigationDrawer from '@/components/TheNavigationDrawer.vue';
  import TheHeader from '@/components/TheHeader.vue';
  import TheFooter from '@/components/TheFooter.vue';
  export default {
    components: {
      TheNavigationDrawer,
      TheHeader,
      TheFooter,
    },
    data() {
      return {
        drawer: false,
        miniVariant: false,
        title: 'Default Layout',
      };
    },
  };
</script>
