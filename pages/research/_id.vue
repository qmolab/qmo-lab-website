<template>
  <ResearchCard :id="$route.params.id" />
</template>

<script>
  import ResearchCard from '@/components/ResearchCard.vue';

  export default {
    components: { ResearchCard },
    computed: {
      name() {
        return this.$route.params.id.replace(/_/g, ' ');
      },
    },
    mounted() {
      this.$store.commit('pageTitle', `Research: ${this.name}`);
    },
    head() {
      return {
        title: this.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `${this.name}, Research @ the QMO Lab, UCR`,
          },
        ],
      };
    },
  };
</script>
