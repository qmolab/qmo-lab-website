<template>
  <div>
    <v-list-item>
      <v-img
        :src="require('~/assets/images/logo_transparent.svg')"
        alt="test"
      />
    </v-list-item>
    <v-divider />
    <NavigationLinkList :links="navLinks" />
  </div>
</template>

<script>
  import NavigationLinkList from '@/components/NavigationLinkList.vue';

  export default {
    name: 'TheNavigationDrawer',
    components: {
      NavigationLinkList,
    },
    props: {},
    computed: {
      navLinks() {
        if (this.$route.path.match('/research')) {
          return this.$store.state.navLinks.main.concat(
            this.$store.state.navLinks.research
          );
        } else {
          return this.$store.state.navLinks.main;
        }
      },
    },
  };
</script>

<style scoped lang="scss"></style>
