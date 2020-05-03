<template>
  <v-container class="publicationsPage">
    <h2>Selected Publications</h2>
    <waterfall
      id="pubWaterfall"
      v-slot="{ item }"
      container-id="pubWaterfall"
      :resizable="true"
      :items="mainItems"
      :delay="150"
    >
      <PublicationCard :publication="item" />
    </waterfall>
    <br />
    <v-card class="mx-3">
      <v-card-title>Additional Publications and Patents</v-card-title>
      <waterfall
        id="pubAdditionalWaterfall"
        v-slot="{ item }"
        container-id="pubAdditionalWaterfall"
        :resizable="true"
        :items="additionalItems"
        :delay="0"
        :cols="1"
        :sm="2"
        :md="2"
        :lg="2"
        :xl="2"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            :href="item.href"
            link
            :elevation="hover ? 6 : 1"
            :color="color(hover)"
            class="additionalPublicationCard"
            :style="hover ? 'transform: scale(1.01);' : ''"
          >
            <v-card-title style="display: block;" v-html="item.title" />
            <v-card-subtitle class="pl-4" v-html="item.subtitle" />
            <v-card-text v-html="item.text" />
          </v-card>
        </v-hover>
      </waterfall>
    </v-card>
  </v-container>
</template>

<script>
  import PublicationCard from '@/components/PublicationCard.vue';
  import Waterfall from '@/components/lib/VuetifyWaterfall.vue';
  export default {
    components: {
      PublicationCard,
      Waterfall,
    },
    computed: {
      mainItems() {
        return this.$store.state.publications.mainItems;
      },
      additionalItems() {
        return this.$store.state.publications.additionalItems;
      },
    },
    methods: {
      color(hovering) {
        return 'rgba(255,255,255,' + (hovering ? 0.03 : 0.01).toString() + ')';
      },
    },
  };
</script>

<style scoped lang="scss">
  .publicationsPage {
    max-width: 1350px;
    margin: auto;
  }
  .publicationsPage ::v-deep .v-card__title {
    word-break: break-word;
    text-transform: capitalize;
    flex-direction: column;
    align-items: stretch;
  }
</style>
