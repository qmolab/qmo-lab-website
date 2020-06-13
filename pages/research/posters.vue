<template>
  <div class="researchPosterPage pt-8">
    <v-row>
      <v-col v-for="(item, i) in posters" :key="i" cols="12">
        <v-sheet class="pa-4 pb-0">
          <v-row>
            <v-col cols="12">
              <div class="title">{{ item.title }}</div>
              <div class="subtitle-2">{{ item.authors }}</div>
            </v-col>
            <v-col cols="12" sm="6" md="3" lg="3" xl="2">
              <v-img :src="img" :aspect-ratio="0.8" width="100%" />
            </v-col>
            <v-col>
              <div class="stretchCard pb-12">
                <div class="body-1 font-weight-light">
                  <DynamicText :html="item.discussion" />
                </div>
                <div class="pr-8 actions">
                  <v-spacer />
                  <v-btn
                    text
                    :href="posterFolder + item.ppt"
                    class="hide-sm-and-down"
                  >
                    <v-icon class="pb-1">mdi-file-powerpoint</v-icon>
                    Download PPT
                    <v-icon right class="pb-1">mdi-download</v-icon>
                  </v-btn>
                  <v-btn text :href="posterFolder + item.pdf">
                    <v-icon class="pb-1">mdi-file-pdf</v-icon>
                    Download PDF
                    <v-icon right class="pb-1">mdi-download</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import DynamicText from '@/components/DynamicText.vue';
  export default {
    components: { DynamicText },
    async asyncData({ $axios /* $payloadURL, route */ }) {
      const posters = await $axios.$get('/posters/');
      return { posters };
    },
    data() {
      return {
        posterFolder: process.env.ROUTER_BASE + 'assets/posters/',
        img: require('~/assets/images/posters/SHINES.png?resize'),
      };
    },
  };
</script>
