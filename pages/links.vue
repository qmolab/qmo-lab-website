<template>
  <div class="linksPage mb-8">
    <h2 class="text-h5 mt-8">Helpful Links</h2>
    <v-list-item to="/theses/">
      <v-list-item-icon class="mx-2">
        <v-icon color="primary">$thesesPage</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Student Dissertations and Theses</v-list-item-title>
    </v-list-item>
    <v-list-item to="/posters/">
      <v-list-item-icon class="mx-2">
        <v-icon color="primary">$postersPage</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Research Presentation Posters</v-list-item-title>
    </v-list-item>
    <h2 class="text-h5 mt-8 mb-4">External Resources</h2>
    <v-list-item
      href="https://small.ucr.edu/"
      target="_blank"
      rel="noopener"
      class="py-1 mb-8"
    >
      <v-img
        src="https://small.ucr.edu/assets/images/SMALL_logo_small_v2.svg"
        alt="UCR Small Lab"
        max-width="125"
        class="rounded"
      />
      <v-list-item-title class="ml-2 unsetWhiteSpace"
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
        <v-expansion-panel-content eager>
          <v-list>
            <v-list-item
              v-for="(item, j) in panel"
              :key="j"
              :href="item.url"
              target="_blank"
              rel="nofollow"
              class="py-1 py-sm-0"
            >
              <v-list-item-title class="unsetWhiteSpace">
                {{ item.linkText }}
              </v-list-item-title>
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
  import {
    mdiCurrencyUsd,
    mdiLinkVariant,
    mdiVectorLink,
    mdiNotebookOutline,
  } from '@mdi/js';
  import headAndTitle from '@/assets/js/headAndTitle';
  export default {
    name: 'LinksView',
    async asyncData({ $axios }) {
      const panels = await $axios.$get('/links/cards/');
      return { panels };
    },
    data() {
      return {
        icons: {
          'Lab Funding': mdiCurrencyUsd,
          'UCR Links': mdiLinkVariant,
          'Science Journals': mdiNotebookOutline,
          'Other Groups': mdiVectorLink,
          'Lab Safety': '$safety',
        },
      };
    },
    ...headAndTitle(
      'Links and Resources',
      'links/',
      `QMO Lab @ UCR Links and Resources Page.`
    ),
  };
</script>
