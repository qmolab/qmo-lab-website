<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      temporary
      app
    >
      <TheNavigationDrawer />
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" hide-on-scroll app>
      <TheHeader @toggle-drawer="drawer = !drawer" />
    </v-app-bar>
    <v-content>
      <HeroCarousel :slides="heroSlides" />
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
  import HeroCarousel from '@/components/HeroCarousel.vue';
  import TheFooter from '@/components/TheFooter.vue';
  export default {
    components: {
      TheNavigationDrawer,
      TheHeader,
      HeroCarousel,
      TheFooter,
    },
    data() {
      return {
        clipped: false,
        drawer: false,
        miniVariant: false,
        title: 'Default Layout with Hero Carousel',
      };
    },
    computed: {
      heroSlides() {
        return this.$store.state.heroSlides;
      },
    },
  };
</script>
