<template>
  <v-container class="researchPage">
    <h1 class="hidden-sm-and-down">QMO Lab Research</h1>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6" lg="4">
        <v-sheet
          :class="{
            'pt-3 stretchCard': true,
            'pb-12': item.subtitle,
          }"
        >
          <StoreImage
            class="px-3 aspect-667"
            category="images"
            sub-category="research"
            :item-id="item.img"
            :aspect-ratio="3 / 2"
          />
          <div class="pt-1 px-4 title">
            <DynamicHtml :html="item.title.replace(/_/g, ' ')" />
          </div>
          <div class="pa-4 summary">
            <DynamicHtml :html="item.description" />
          </div>
          <div v-if="item.subtitle" class="actions px-2">
            <v-spacer />
            <v-btn nuxt text :to="`/research/${item.title}/`">
              Read more
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import StoreImage from '@/components/StoreImage.vue';
  import DynamicHtml from '@/components/DynamicHtml.vue';
  export default {
    components: { StoreImage, DynamicHtml },
    async asyncData({ $axios /* $payloadURL, route */ }) {
      // if (process.static && process.client && $payloadURL)
      //   return await $axios.$get($payloadURL(route));
      const items = await $axios.$get('/research/cards/');
      return { items };
    },
  };
</script>
