<template>
  <div class="linksPage mb-8">
    <v-list-item
      href="https://small.ucr.edu/"
      target="_blank"
      rel="noopener"
      class="my-8"
    >
      <v-img
        src="https://small.ucr.edu/assets/images/SMALL_logo_small_v2.svg"
        alt="UCR Small Lab"
        max-width="150"
        style="border-radius: 4px;"
      />
      <v-list-item-title class="ml-2"
        >UCR Shared Micro-Assembly and Lithography Laboratory</v-list-item-title
      >
      <v-list-item-icon>
        <v-icon color="secondary">mdi-open-in-new</v-icon>
      </v-list-item-icon>
    </v-list-item>
    <v-list-item to="/members/theses/">
      <v-list-item-icon class="mx-2">
        <v-icon color="primary">mdi-book-open</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Dissertations</v-list-item-title>
    </v-list-item>
    <v-list-item to="/research/posters/">
      <v-list-item-icon class="mx-2">
        <v-icon color="primary">mdi-billboard</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Research Posters</v-list-item-title>
    </v-list-item>
    <v-list-item to="/contact/">
      <v-list-item-icon class="mx-2">
        <v-icon color="primary">mdi-message-arrow-right</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Contact Us</v-list-item-title>
    </v-list-item>
    <v-expansion-panels multiple class="py-8">
      <v-expansion-panel v-for="(panel, i) in panels" :key="i">
        <v-expansion-panel-header>
          <span>
            <v-icon color="secondary">{{ icons[i] }}</v-icon>
            {{ i }}
          </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list>
            <v-list-item
              v-for="(item, j) in panel"
              :key="j"
              :href="item.url"
              target="_blank"
              rel="noopener"
            >
              <v-list-item-title>{{ item.linkText }}</v-list-item-title>
              <v-list-item-icon>
                <v-icon color="secondary">mdi-open-in-new</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
  export default {
    name: 'LinksView',
    async asyncData({ $axios /* $payloadURL, route */ }) {
      const panels = await $axios.$get('/links/cards/');
      return { panels };
    },
    data() {
      return {
        icons: {
          'Lab Funding': 'mdi-currency-usd',
          'UCR Links': 'mdi-link-variant',
          'Science Journals': 'mdi-notebook-outline',
          'Other Groups': 'mdi-vector-link',
        },
      };
    },
  };
</script>
