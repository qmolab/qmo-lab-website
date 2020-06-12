<template>
  <div class="presentationPage my-8">
    <div class="font-weight-light headline" style="margin-top: -20px;">
      Presentation By: {{ authors }}<br />
      During {{ location }}
    </div>
    <v-row class="mt-2">
      <div class="rel pb-8 fill-h fill-w">
        <v-carousel show-arrows-on-hover height="45vw" width="80vw">
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            class=""
            :aspect-ratio="1"
          >
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-3">{{ slide }} Slide</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <div class="abs font-weight-light" style="bottom: 0; right: 0;">
          Copyright &copy; 2020 University of California, Riverside
        </div>
      </div>
      <v-col cols="12" class="my-8">
        <div>
          <v-btn text :disabled="!download" :href="download">
            <span>Download Original PowerPoint Presentation</span>
            <v-icon right color="secondary">{{ mdiFilePowerpoint }}</v-icon>
          </v-btn>
        </div>
        <div class="mt-4">
          <v-btn text nuxt to="/research/">
            <span>Read more about research in the QMO Labs</span>
            <v-icon right color="secondary">{{ mdiAlphaR }}</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { mdiFilePowerpoint, mdiAlphaR } from '@mdi/js';
  export default {
    data() {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
        authors: 'author(s)',
        location: 'meeting',
        download: undefined,
        mdiFilePowerpoint,
        mdiAlphaR,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .powerpointPage {
    width: 80vw;
    height: 0;
    padding-bottom: 56.25%;
  }
</style>
