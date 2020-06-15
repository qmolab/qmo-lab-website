<template>
  <div class="linksPage mb-8">
    <h2 class="headline mt-8">Helpful Links</h2>
    <v-list-item to="/members/theses/">
      <v-list-item-icon class="mx-2">
        <v-icon color="primary">$mdiBookOpen</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Student Dissertations and Theses</v-list-item-title>
    </v-list-item>
    <v-list-item to="/research/posters/">
      <v-list-item-icon class="mx-2">
        <v-icon color="primary">$mdiBillboard</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Research Presentation Posters</v-list-item-title>
    </v-list-item>
    <h2 class="headline mt-8 mb-4">External Resources</h2>
    <v-list-item href="https://small.ucr.edu/" target="_blank" rel="noopener">
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
        <v-icon color="secondary">$mdiOpenInNew</v-icon>
      </v-list-item-icon>
    </v-list-item>
    <v-expansion-panels multiple>
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
                <v-icon color="secondary">$mdiOpenInNew</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
  import headAndTitle from '@/assets/js/headAndTitle';
  export default {
    name: 'LinksView',
    async asyncData({ $axios, $payloadURL, route }) {
      if (process.static && process.client && $payloadURL)
        return await $axios.$get($payloadURL(route));
      const panels = await $axios.$get('/links/cards/');
      return { panels };
    },
    data() {
      return {
        icons: {
          'Lab Funding': '$mdiCurrencyUsd',
          'UCR Links': '$mdiLinkVariant',
          'Science Journals': '$mdiNotebookOutline',
          'Other Groups': '$mdiVectorLink',
          'Lab Safety': '$mdiSafetyGoggles',
        },
      };
    },
    ...headAndTitle(
      'Links and Resources',
      `QMO Lab @ UCR Links and Resources Page.`
    ),
  };
</script>
