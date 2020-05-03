<template>
  <nav class="nav">
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
        type: Array,
        required: true,
      },
    },
  };
</script>

<style scoped lang="scss">
  .nav {
    display: flex;
    float: left;
    height: 100%;
    margin-bottom: -8px;
  }
</style>
