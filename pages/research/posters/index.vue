<template>
  <v-container class="researchPosterPage">
    <BreadCrumb />
    <h1 class="hidden-sm-and-down">QMO Lab Posters</h1>
    <waterfall
      id="posterWaterfall"
      v-slot="{ item }"
      container-id="posterWaterfall"
      :resizable="true"
      :items="posters"
      :delay="150"
      :sm="1"
      :lg="2"
      :xl="2"
    >
      <v-card>
        <v-card-title>{{ item.title }}</v-card-title>
        <v-card-subtitle>{{ item.authors }}</v-card-subtitle>
        <v-card-text>
          <DynamicHtml :html="item.discussion" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text :href="posterFolder + item.ppt" class="hide-sm-and-down">
            Download PPT
            <v-icon right>{{ mdiDownload }}</v-icon>
          </v-btn>
          <v-btn text :href="posterFolder + item.pdf">
            Download PDF
            <v-icon right>{{ mdiDownload }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </waterfall>
  </v-container>
</template>

<script>
  import { mdiDownload } from '@mdi/js';
  import Waterfall from '@/components/lib/VuetifyWaterfall.vue';
  import BreadCrumb from '@/components/lib/BreadCrumb.vue';
  import DynamicHtml from '@/components/DynamicHtml.vue';
  export default {
    components: { BreadCrumb, Waterfall, DynamicHtml },
    async asyncData({ $axios /* $payloadURL, route */ }) {
      const posters = await $axios.$get('/posters/');
      return { posters };
    },
    data() {
      return {
        mdiDownload,
        posterFolder: process.env.ROUTER_BASE + 'assets/posters/',
      };
    },
  };
</script>
