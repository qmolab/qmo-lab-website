<template>
  <v-card>
    <slot></slot>
  </v-card>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Card',
    components: {
      // HelloWorld
    },
    props: {
      // firstName: String,
      // lastName: String
    },
  };
</script>

<style></style>
