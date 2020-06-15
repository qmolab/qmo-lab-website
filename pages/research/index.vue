<template>
  <div class="researchPage d-flex justify-center">
    <v-row style="max-width: 1650px;">
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        md="6"
        lg="4"
        xl="3"
        class="narrowCard mx-auto"
      >
        <v-card
          :class="{
            'pt-3 stretchCard': true,
            'pb-12': item.subtitle,
            'pb-3': !item.subtitle,
          }"
        >
          <StoreImage
            class="aspect-667 px-3"
            sub-category="research"
            :item-id="item.img"
            :aspect-ratio="3 / 2"
          />
          <v-card-title class="pt-1">
            <DynamicText :html="item.title.replace(/_/g, ' ')" />
          </v-card-title>
          <v-card-text>
            <DynamicText :html="item.description" />
          </v-card-text>
          <v-card-actions v-if="item.subtitle" class="actions">
            <v-spacer />
            <!--<v-btn nuxt text :to="`/research/${item.title}/`">
              <span>Read more</span>
              <v-icon right color="primary">$mdiPageNext</v-icon>
            </v-btn>-->
            <v-dialog v-model="item.dialog" fullscreen>
              <template v-slot:activator="{ on, attrs }">
                <v-btn text small v-bind="attrs" v-on="on">
                  <span>Read more</span>
                  <v-icon right color="primary">$mdiPageNext</v-icon>
                </v-btn>
              </template>
              <ResearchCard
                :id="item.title"
                :close="() => (item.dialog = false)"
              />
            </v-dialog>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        v-for="i in [10000, 10001, 10002]"
        :key="i"
        cols="12"
        sm="6"
        lg="4"
        xl="3"
        class="narrowCard mx-auto"
      />
    </v-row>
  </div>
</template>

<script>
  import StoreImage from '@/components/StoreImage.vue';
  import DynamicText from '@/components/DynamicText.vue';
  import ResearchCard from '@/components/ResearchCard.vue';
  import headAndTitle from '@/assets/js/headAndTitle';

  export default {
    components: { StoreImage, DynamicText, ResearchCard },
    async asyncData({ $axios, $payloadURL, route }) {
      if (process.static && process.client && $payloadURL)
        return await $axios.$get($payloadURL(route));
      const items = await $axios.$get('/research/cards/');
      return { items };
    },
    ...headAndTitle('Research', `QMO Lab @ UCR Research Page.`),
  };
</script>
