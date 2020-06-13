<template>
  <div class="thesesPage">
    <waterfall
      id="thesisWaterfall"
      v-slot="{ item }"
      container-id="thesisWaterfall"
      :resizable="true"
      :items="memberTheses"
      :delay="150"
      :xl="3"
    >
      <v-card class="itemCard">
        <v-row class="mx-1 my-0">
          <v-col cols="2" class="mt-2" style="max-width: 75px;">
            <v-avatar :size="75">
              <StoreImage
                sub-category="members"
                :item-id="item.img"
                :width="75"
                :height="75"
              />
            </v-avatar>
          </v-col>
          <v-col>
            <v-card-title>{{ item.author }}</v-card-title>
            <v-card-subtitle>Doctoral Dissertation</v-card-subtitle>
          </v-col>
        </v-row>
        <v-card-text class="pt-0">{{ item.title }}</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            nuxt
            text
            :to="`/members/theses/${item.author
              .replace(/ /g, '_')
              .toLowerCase()}/`"
          >
            <span>Read more</span>
            <v-icon right color="secondary">mdi-page-next</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </waterfall>
  </div>
</template>

<script>
  import Waterfall from '@/components/lib/VuetifyWaterfall.vue';
  import StoreImage from '@/components/StoreImage.vue';
  export default {
    components: { Waterfall, StoreImage },
    async asyncData({ $axios /* $payloadURL, route */ }) {
      // if (process.static && process.client && $payloadURL)
      //   return await $axios.$get($payloadURL(route));
      const memberTheses = await $axios.$get('/theses/cards/');
      return { memberTheses };
    },
  };
</script>
