<template>
  <nav style="display: flex; height: 100%; margin-bottom: -8px;">
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

<style scoped lang="scss"></style>
