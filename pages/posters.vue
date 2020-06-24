<template>
  <v-row class="researchPosterPage pt-8">
    <v-col v-for="(item, i) in posters" :key="i" cols="12">
      <v-sheet class="pa-4 pb-0">
        <v-row>
          <v-col cols="12">
            <div class="title">{{ item.title }}</div>
            <div class="subtitle-2">{{ item.authors }}</div>
          </v-col>
          <v-col cols="12" sm="4" md="3" lg="3" xl="2">
            <v-img :src="img" :aspect-ratio="0.8" width="100%" />
          </v-col>
          <v-col>
            <div class="stretchCard pb-10">
              <div class="body-1 font-weight-light">
                <dynamic-text :html="item.discussion" />
              </div>
              <div class="pr-8 actions">
                <v-spacer />
                <v-btn
                  text
                  :href="posterFolder + item.ppt"
                  class="hidden-xs-only"
                >
                  <v-icon>$ppt</v-icon>
                  <span>Download PPT</span>
                  <v-icon right>$mdiDownload</v-icon>
                </v-btn>
                <v-btn text :href="posterFolder + item.pdf">
                  <v-icon>$pdf</v-icon>
                  <span>Download PDF</span>
                  <v-icon right>$mdiDownload</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
  import headAndTitle from '@/assets/js/headAndTitle';
  export default {
    async asyncData({ $axios }) {
      const posters = await $axios.$get('/posters/');
      return { posters };
    },
    data() {
      return {
        posterFolder: process.env.baseUrl + '/assets/posters/',
        img: require('~/assets/images/posters/SHINES.png?resize'),
      };
    },
    ...headAndTitle(
      'Research Posters',
      'posters/',
      `QMO Lab @ UCR Research Posters Page. View or Download research presentation posters made by former student members.`
    ),
  };
</script>
