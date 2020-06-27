<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="researchPage">
    <h2 class="text-h5 ml-1 mt-8">Featured Research Topics</h2>
    <div class="d-flex justify-center">
      <v-row class="researchContainer">
        <v-col v-for="(item, i) in researchLisMain" :key="i" cols="12" lg="6">
          <v-sheet rounded="lg" class="no-overflow">
            <v-list-item class="px-2" nuxt :to="`/research/${item.title}/`">
              <v-list-item-content class="pl-2 align-self-start">
                <h3
                  class="v-list-item__title text-h6 font-weight-thin mb-1 unsetWhiteSpace text-capitalize"
                  v-html="item.title.replace(/_/g, ' ')"
                />
                <v-list-item-subtitle
                  class="subtitle-1 unsetWhiteSpace"
                  v-html="item.description"
                />
              </v-list-item-content>
              <v-list-item-avatar tile size="120">
                <StoreImage
                  sub-category="research"
                  :item-id="item.img"
                  width="125"
                  height="125"
                />
              </v-list-item-avatar>
            </v-list-item>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
    <h2 class="text-h5 mb-4 ml-1 mt-8">Additional Research Topics</h2>
    <v-row>
      <v-col v-for="(item, i) in researchListAux" :key="i" cols="12" lg="6">
        <v-sheet rounded="lg" class="no-overflow">
          <v-list-item class="px-2" nuxt :to="`/research/${item.title}/`">
            <v-list-item-content class="pl-2 align-self-start">
              <h3
                class="v-list-item__title text-capitalize font-weight-thin text-h6 unsetWhiteSpace"
                v-html="item.title.replace(/_/g, ' ')"
              />
              <v-list-item-subtitle
                class="subtitle-1 unsetWhiteSpace"
                v-html="item.description"
              />
            </v-list-item-content>
            <v-list-item-avatar tile size="120">
              <StoreImage
                sub-category="research"
                :item-id="item.img"
                width="125"
                height="125"
                style="height: inherit;"
              />
            </v-list-item-avatar>
          </v-list-item>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import StoreImage from '@/components/StoreImage.vue';
  import headAndTitle from '@/assets/js/headAndTitle';

  export default {
    components: { StoreImage },
    async asyncData({ $axios }) {
      const researchList = await $axios.$get('/research/cards/');
      return {
        researchLisMain: researchList.main,
        researchListAux: researchList.aux,
      };
    },
    ...headAndTitle('Research', 'research/', `QMO Lab @ UCR Research Page.`),
  };
</script>

<style lang="scss" scoped>
  .researchContainer {
    max-width: 1650px;
  }
</style>
