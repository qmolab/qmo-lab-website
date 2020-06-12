<template>
  <div class="linksPage mb-8">
    <div class="py-8">
      <v-btn
        text
        href="/assets/images/socal-first-announcement.jpg"
        target="_blank"
        rel="noopener"
      >
        <span>SoCAL First announcement</span>
        <v-icon right color="secondary">{{ mdiOpenInNew }}</v-icon>
      </v-btn>
    </div>
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
                <v-icon color="secondary">{{ mdiOpenInNew }}</v-icon>
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
    mdiNotebookOutline,
    mdiOpenInNew,
    mdiVectorLink,
  } from '@mdi/js';
  export default {
    name: 'LinksView',
    async asyncData({ $axios /* $payloadURL, route */ }) {
      const panels = await $axios.$get('/links/cards/');
      return { panels };
    },
    data() {
      return {
        mdiOpenInNew,
        icons: {
          'Lab Funding': mdiCurrencyUsd,
          'UCR Links': mdiLinkVariant,
          'Science Journals': mdiNotebookOutline,
          'Other Groups': mdiVectorLink,
        },
      };
    },
  };
</script>
