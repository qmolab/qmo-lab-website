<template>
  <v-btn :to="link.path" text>
    {{ link.title }}
  </v-btn>
</template>

<script>
  export default {
    name: 'NavigationLink',
    components: {},
    props: {
      link: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped lang="scss"></style>
