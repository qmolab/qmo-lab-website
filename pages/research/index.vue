<template>
  <v-container class="researchPage">
    <h1 class="hidden-sm-and-down">QMO Lab Research</h1>
    <v-row>
      <v-col v-for="(item, i) in mainItems" :key="i" cols="12" sm="6" lg="4">
        <v-sheet
          :class="{
            'pt-3': true,
            'pb-12': item.paragraphs,
            stretchCard: true,
          }"
        >
          <BaseImage
            v-if="item.img || item.useFigureImg"
            class="px-3 aspect-667"
            :src="item.useFigureImg ? item.figures[item.img].img : item.img"
            :webp="item.useFigureImg ? item.figures[item.img].webp : item.webp"
            :alt="item.alt"
            :title="item.title"
            :aspect-ratio="3 / 2"
          />
          <div class="pt-1 px-4 title"><DynamicHtml :html="item.title" /></div>
          <div class="pa-4 summary">
            <DynamicHtml :html="item.description" />
          </div>
          <div v-if="item.paragraphs" class="actions px-2">
            <v-spacer />
            <v-btn
              nuxt
              text
              :to="`/research/${item.title.replace(/ /g, '_').toLowerCase()}/`"
            >
              Read more
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import BaseImage from '@/components/BaseImage.vue';
  import DynamicHtml from '@/components/DynamicHtml.vue';
  export default {
    components: { BaseImage, DynamicHtml },
    asyncData({ store }) {
      return {
        mainItems: store.state.research.topics,
      };
    },
  };
</script>
