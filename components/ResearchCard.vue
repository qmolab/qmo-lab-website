<template>
  <v-card class="researchCard">
    <BaseImage
      v-if="imgSrc"
      class="cardImage"
      :src="imgSrc"
      :webp="webpSrc"
      :alt="research.alt"
      :title="research.title"
      :aspect-ratio="3 / 2"
    />
    <v-card-title v-html="research.title" />
    <v-card-subtitle v-html="research.subtitle" />
    <v-card-text v-html="research.description" />
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
  export default {
    name: 'ResearchCard',
    components: { BaseImage },
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
