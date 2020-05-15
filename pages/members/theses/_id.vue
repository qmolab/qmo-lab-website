<template>
  <v-container class="thesisWriteupPage">
    <BreadCrumb />
    <h1 class="hidden-sm-and-down">This is a thesis writeup page</h1>
    <h2>Page ID: {{ id }}</h2>
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
    asyncData({ params }) {
      return { id: params.id, thesis: [] };
    },
  };
</script>
