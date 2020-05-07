<template>
  <v-card class="thesisCard">
    <v-card-title>{{ thesis.title }}</v-card-title>
    <v-card-subtitle>
      {{ thesis.author }}'s Doctoral Dissertation
    </v-card-subtitle>
    <v-card-text>
      <DynamicHtml
        :html="short ? thesis.description : thesis.longDescription"
      />
    </v-card-text>
    <v-card-actions>
      <v-btn
        nuxt
        text
        disabled
        :to="`/members/theses/${thesis.author
          .replace(/ /g, '_')
          .toLowerCase()}/`"
      >
        Read more
      </v-btn>
      <v-btn
        text
        :href="`/node/assets/theses/${thesis.author.replace(
          / /g,
          '_'
        )}/Doctoral_Dissertation.pdf`"
      >
        Download PDF
        <v-icon right>{{ mdiDownload }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mdiDownload } from '@mdi/js';
  import DynamicHtml from '@/components/DynamicHtml.vue';
  export default {
    name: 'ThesisCard',
    components: { DynamicHtml },
    props: {
      thesis: { type: [Object, Array], required: true },
      short: { type: Boolean, default: true },
    },
    data() {
      return { mdiDownload };
    },
  };
</script>

<style scoped lang="scss"></style>
