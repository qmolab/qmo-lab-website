<template>
  <ResearchCard :id="$route.params.id" />
</template>

<script>
  import ResearchCard from '@/components/ResearchCard.vue';

  export default {
    components: { ResearchCard },
  };
</script>
