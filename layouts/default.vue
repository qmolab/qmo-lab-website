<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      temporary
      app
    >
      <TheNavigationDrawer :nav-links="items" />
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" hide-on-scroll color="grey darken-4" app>
      <TheHeader :nav-links="items" @toggle-drawer="drawer = !drawer" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
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
        clipped: false,
        drawer: false,
        miniVariant: false,
        items: [
          {
            icon: 'mdi-apps',
            title: 'Welcome',
            to: '/',
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Inspire',
            to: '/inspire',
          },
        ],
        title: 'Default Layout',
      };
    },
  };
</script>
