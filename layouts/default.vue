<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      temporary
      app
    >
      <TheNavigationDrawer :nav-links="navLinks" />
    </v-navigation-drawer>
    <v-app-bar hide-on-scroll app>
      <TheHeader
        :title="title"
        :nav-links="navLinks"
        @toggle-drawer="drawer = !drawer"
      />
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
        navLinks: undefined,
      };
    },
    computed: {
      title() {
        const path = this.$route.path
          .substr(1, this.$route.path.length - 1)
          .split('/');
        let title = (this.$route.params.id
          ? path[path.length - 3] + ': ' + this.$route.params.id
          : path[path.length - 2] || 'Home'
        ).replace(/_/g, ' ');
        if (title) title = title.charAt(0).toUpperCase() + title.slice(1);
        return title;
      },
    },
    created() {
      this.navLinks = this.$store.state.navLinks.main;
    },
    head() {
      return {
        title: this.title,
      };
    },
  };
</script>
