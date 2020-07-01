<template>
  <div>
    <v-btn text nuxt exact to="/research/">Back to Research Topics</v-btn>
    <v-sheet class="ma-0 pa-4 rel rounded fill-min-h" tile>
      <v-container>
        <h2 class="text-h5 text-capitalize">{{ name }}</h2>
        <h3 class="font-weight-light">{{ payload.subtitle }}</h3>
        <DynamicHtml
          class="mt-8"
          :page-content="payload.content"
          image-category="research"
          figures
        />
        <div
          v-if="payload.youtube"
          class="videoPlayerContainer no-overflow rounded mx-auto mt-4"
        >
          <YoutubeEmbed :video-id="payload.youtube" />
        </div>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
  import YoutubeEmbed from '@/components/lib/YoutubeEmbed.vue';
  import DynamicHtml from '@/components/lib/DynamicHtml.vue';
  export default {
    components: { YoutubeEmbed, DynamicHtml },
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
            href: process.env.baseUrl + this.$route.path + '/',
          },
        ],
      };
    },
  };
</script>
