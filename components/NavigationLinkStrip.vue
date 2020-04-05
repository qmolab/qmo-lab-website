<template>
  <nav style="display: flex;">
    <NavigationLink v-for="link in links" :key="link.title" :link="link" />
  </nav>
</template>

<script>
  import NavigationLink from '@/components/NavigationLink.vue';
  export default {
    name: 'NavigationLinkStrip',
    components: {
      NavigationLink,
    },
    props: {
      links: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped lang="scss">
  .v-btn:before {
    background-color: #80f;
  }
</style>
