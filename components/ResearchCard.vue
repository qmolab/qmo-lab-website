<template>
  <v-card class="researchCard">
    <v-card-title class="pb-0">
      <DynamicHtml :html="research.title" />
    </v-card-title>
    <v-row class="pa-4" dense>
      <v-col :cols="12" :md="4" :lg="6">
        <BaseImage
          v-if="imgSrc"
          class="cardImage pt-1"
          :src="imgSrc"
          :webp="webpSrc"
          :alt="research.alt"
          :title="research.title"
          :aspect-ratio="3 / 2"
        />
      </v-col>
      <v-col :cols="12" :md="8" :lg="6">
        <p>
          <DynamicHtml :html="research.description" />
        </p>
      </v-col>
    </v-row>
    <v-card-actions v-if="research.paragraphs">
      <v-btn
        nuxg
        text
        :to="`/research/${research.title.replace(/ /g, '_').toLowerCase()}/`"
      >
        Read more
        <v-icon right color="secondary">{{ openInNewIcon }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mdiOpenInNew } from '@mdi/js';
  import BaseImage from '@/components/BaseImage.vue';
  import DynamicHtml from '@/components/DynamicHtml.vue';
  export default {
    name: 'ResearchCard',
    components: { BaseImage, DynamicHtml },
    props: { research: { type: [Object, Array], required: true } },
    data() {
      return {
        openInNewIcon: mdiOpenInNew,
      };
    },
    computed: {
      imgSrc() {
        return typeof this.research.img === 'number'
          ? this.research.figures[this.research.img].img
          : this.research.img;
      },
      webpSrc() {
        return typeof this.research.img === 'number'
          ? this.research.figures[this.research.img].webp
          : this.research.webp;
      },
    },
  };
</script>

<style scoped lang="scss"></style>
