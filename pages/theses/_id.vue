<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="thesisPage">
    <v-row class="mt-8" dense>
      <v-col cols="12">
        <h2 class="text-h5" v-html="payload.title"></h2>
      </v-col>
      <v-col cols="12">
        <v-avatar size="75">
          <QImg
            width="82"
            height="82"
            cat="members"
            :name="payload.img"
            :placeholder="payload.placeholder"
          />
        </v-avatar>
        <span class="font-weight-light pl-2">
          <nuxt-link
            v-slot="{ navigate }"
            :to="`/members/#${payload.img}`"
            no-prefetch
          >
            <v-btn large nuxt text @click="navigate">
              <span>By {{ fullName }}</span>
            </v-btn>
          </nuxt-link>
        </span>
      </v-col>
      <v-col cols="12" class="my-8">
        <h3 class="text-center text-h5">Abstract</h3>
        <div class="body-1 font-weight-light" v-html="payload.summary" />
      </v-col>
      <v-col cols="12">
        <v-btn text :href="dissertationURL">
          <v-icon color="red">$pdf</v-icon>
          Download as PDF
          <v-icon right>$mdiDownload</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <div class="d-flex justify-center align-center mb-8">
      <div style="height: 90vh; width: 100%;">
        <object
          :data="dissertationURL"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <iframe
            :src="`https://docs.google.com/viewer?url=${dissertationURL}&embedded=true`"
          />
        </object>
      </div>
    </div>
  </div>
</template>

<script>
  import QImg from '@/components/lib/QImg.vue';
  export default {
    components: { QImg },
    async asyncData({ $axios, params }) {
      const payload = await $axios.$get('/theses/routes/route/', {
        params: { author: params.id },
      });
      return { payload };
    },
    computed: {
      fullName() {
        const idP = this.$route.params.id.split('_');
        return (
          idP[0].slice(0, 1).toUpperCase() +
          idP[0].slice(1) +
          ' ' +
          idP[1].slice(0, 1).toUpperCase() +
          idP[1].slice(1)
        );
      },
      dissertationURL() {
        return `${process.env.baseUrl}/assets/theses/${this.fullName.replace(
          / /g,
          '_'
        )}/Doctoral_Dissertation.pdf`;
      },
    },
    mounted() {
      this.$store.commit('pageTitle', `Dissertations: ${this.fullName}`);
    },
    head() {
      return {
        title: `Dissertation: ${this.fullName}`,
        base: { href: '/' },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `The doctoral dissertation of ${this.fullName}.`,
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
