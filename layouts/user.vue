<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary app>
      <TheNavigationDrawer :nav-links="navLinks" />
    </v-navigation-drawer>
    <v-app-bar ref="header" app>
      <TheHeader
        :title="title"
        :nav-links="navLinks"
        @toggle-drawer="drawer = !drawer"
      />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import TheNavigationDrawer from '@/components/TheNavigationDrawer.vue';
  import TheHeader from '@/components/TheHeader.vue';
  export default {
    scrollToTop: true,
    components: {
      TheNavigationDrawer,
      TheHeader,
    },
    data() {
      return { drawer: false, cycle: true };
    },
    computed: {
      path() {
        const temp = [];
        for (const i of this.$route.path.split('/')) i && temp.push(i);
        return temp;
      },
      name() {
        return (
          this.path[this.path.length - 1] ||
          (this.path.length === 0 ? 'home' : '')
        );
      },
      title() {
        const title = (this.$route.params.id
          ? this.path[this.path.length - 2] + ': ' + this.$route.params.id
          : this.path[this.path.length - 1] || ''
        ).replace(/_/g, ' ');
        return title.charAt(0).toUpperCase() + title.slice(1);
      },
      crumbs() {
        if (!this.navLinks[this.name]) {
          const crumbs = [{ to: '/', text: 'Home' }];
          this.path.forEach((e, i) => {
            crumbs.push({
              to: `/${this.path.slice(0, i + 1).join('/')}/`,
              text: e.replace(/_/g, ' '),
            });
          });
          return crumbs;
        }
        return undefined;
      },
      navLinks() {
        return {
          home: {
            title: 'Return to Website',
            to: '/',
          },
          user: {
            title: 'Member Home',
            to: '/user/',
          },
          schedule: {
            title: 'Schedule',
            to: '/user/schedule/',
          },
          logout: {
            title: 'Logout',
            to: '/user/logout/',
          },
        };
      },
    },
    head() {
      return { title: this.title };
    },
  };
</script>

<style>
  html {
    overflow-y: auto !important;
  }
</style>
