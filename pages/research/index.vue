<template>
  <v-container class="researchPage">
    <h1>QMO Lag Research</h1>
    <waterfall
      id="researchWaterfall"
      v-slot="{ item }"
      container-id="researchWaterfall"
      :resizable="true"
      :items="mainItems"
      :delay="150"
      :xl="3"
    >
      <v-card class="itemCard">
        <v-row class="pa-4 pt-0" dense>
          <v-col :cols="12">
            <BaseImage
              v-if="item.img || item.img === 0"
              class="ma-2"
              :src="
                typeof item.img === 'number'
                  ? item.figures[item.img].img
                  : item.img
              "
              :webp="
                typeof item.img === 'number'
                  ? item.figures[item.img].webp
                  : item.webp
              "
              :alt="item.alt"
              :title="item.title"
              :aspect-ratio="3 / 2"
            />
          </v-col>
          <v-card-title>
            <DynamicHtml :html="item.title" />
          </v-card-title>
          <v-card-text>
            <DynamicHtml :html="item.description" />
          </v-card-text>
        </v-row>
        <v-card-actions v-if="item.paragraphs">
          <v-btn
            nuxt
            text
            :to="`/research/${item.title.replace(/ /g, '_').toLowerCase()}/`"
          >
            Read more
          </v-btn>
        </v-card-actions>
      </v-card>
    </waterfall>
  </v-container>
</template>

<script>
  import Waterfall from '@/components/lib/VuetifyWaterfall.vue';
  import BaseImage from '@/components/BaseImage.vue';
  import DynamicHtml from '@/components/DynamicHtml.vue';
  export default {
    components: { Waterfall, BaseImage, DynamicHtml },
    asyncData({ store }) {
      const mainItems = store.state.research.topics;
      return {
        mainItems,
      };
    },
  };
</script>
