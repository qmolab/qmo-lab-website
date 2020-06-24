<template>
  <div>
    <v-btn text nuxt exact to="/research/">Back to Research Topics</v-btn>
    <ResearchCard
      :id="$route.params.id"
      :title="name"
      :content="payload.content"
      :subtitle="payload.subtitle"
      :youtube="payload.youtube"
      class="mb-8"
    />
  </div>
</template>

<script>
  import ResearchCard from '@/components/ResearchCard.vue';

  export default {
    components: { ResearchCard },
    async asyncData({ $axios, route }) {
      const item = await $axios.$get('/research/routes/route/', {
        params: { title: route.params.id },
      });
      return { payload: item };
    },
    computed: {
      name() {
        return this.$route.params.id.replace(/_/g, ' ');
      },
    },
    mounted() {
      this.$store.commit('pageTitle', `Research`);
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
        link: [
          {
            rel: 'canonical',
            href: process.env.baseUrl + this.$route.path,
          },
        ],
      };
    },
  };
</script>
