<template>
  <v-container class="thesesPage">
    <BreadCrumb />
    <h1 class="hidden-sm-and-down">QMO Lab Student Theses</h1>
    <waterfall
      id="thesisWaterfall"
      v-slot="{ item }"
      container-id="thesisWaterfall"
      :resizable="true"
      :items="memberTheses"
      :delay="150"
      :xl="3"
    >
      <v-card class="itemCard">
        <v-row class="mx-1 my-0">
          <v-col cols="2" style="min-width: 75px;">
            <v-avatar :size="75">
              <StoreImage
                category="members"
                sub-category="members"
                :item-id="item.img"
                :width="75"
                :height="75"
              />
            </v-avatar>
          </v-col>
          <v-col>
            <v-card-title>{{ item.author }}</v-card-title>
            <v-card-subtitle>Doctoral Dissertation</v-card-subtitle>
          </v-col>
        </v-row>
        <v-card-text class="pt-0">{{ item.title }}</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            nuxt
            text
            :to="`/members/theses/${item.author
              .replace(/ /g, '_')
              .toLowerCase()}/`"
          >
            Read more
          </v-btn>
          <v-btn
            text
            :href="`${baseURL}assets/theses/${item.author.replace(
              / /g,
              '_'
            )}/Doctoral_Dissertation.pdf`"
          >
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
  import StoreImage from '@/components/StoreImage.vue';
  export default {
    components: { Waterfall, BreadCrumb, StoreImage },
    async asyncData({ $axios /* $payloadURL, route */ }) {
      // if (process.static && process.client && $payloadURL)
      //   return await $axios.$get($payloadURL(route));
      const memberTheses = await $axios.$get('/theses/cards/');
      return { memberTheses };
    },
    data() {
      return { mdiDownload };
    },
    computed: {
      baseURL() {
        return process.env.ROUTER_BASE;
      },
    },
  };
</script>
