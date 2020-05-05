<template>
  <v-container class="researchPage">
    <h1>This is the research splash page</h1>
    <waterfall
      id="pubWaterfall"
      v-slot="{ item }"
      container-id="pubWaterfall"
      :resizable="true"
      :items="mainItems"
      :delay="150"
      :xl="3"
    >
      <ResearchCard :research="item" />
    </waterfall>
  </v-container>
</template>

<script>
  import ResearchCard from '@/components/ResearchCard.vue';
  import Waterfall from '@/components/lib/VuetifyWaterfall.vue';
  export default {
    components: {
      ResearchCard,
      Waterfall,
    },
    asyncData({ store }) {
      return {
        mainItems: store.state.research,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .researchPage {
    max-width: 1350px;
    margin: auto;
  }
</style>
