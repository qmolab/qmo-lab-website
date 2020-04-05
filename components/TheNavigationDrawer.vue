<template>
  <div>
    <v-list-item>
      <v-img src="/img/logos/logo.svg" alt="test" />
    </v-list-item>
    <v-divider />
    <NavigationLinkList :links="links" />
  </div>
</template>

<script>
  import NavigationLinkList from '@/components/NavigationLinkList.vue';

  export default {
    name: 'TheNavigationDrawer',
    components: {
      NavigationLinkList,
    },
    props: {
      links: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped lang="scss"></style>
