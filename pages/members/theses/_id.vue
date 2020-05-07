<template>
  <v-container class="researchPage">
    <BreadCrumb />
    <h1>This is a thesis writeup page</h1>
    <h3>Page ID: {{ id }}</h3>
    <div v-if="thesis">
      <h3>Payload:</h3>
      <h4>Title: {{ thesis.title }}</h4>
    </div>
  </v-container>
</template>

<script>
  import BreadCrumb from '@/components/lib/BreadCrumb.vue';
  export default {
    components: { BreadCrumb },
    asyncData({ params, error, payload }) {
      if (payload) return { id: params.id, thesis: payload };
      else {
        const thesis = {};
        return { id: params.id, thesis };
      }
    },
  };
</script>
