<template>
  <HeroLayout class="linksPage mb-8">
    <h1 class="px-1 hidden-sm-and-down">Useful Links</h1>
    <div class="py-8">
      <v-btn
        text
        href="/assets/images/socal-first-announcement.jpg"
        target="_blank"
        rel="noopener"
      >
        SoCAL First announcement
        <v-icon right color="secondary">{{ mdiOpenInNew }}</v-icon>
      </v-btn>
    </div>
    <v-expansion-panels multiple class="py-8">
      <v-expansion-panel v-for="(panel, i) in panels" :key="i">
        <v-expansion-panel-header :expand-icon="mdiMenuDown">
          {{ i }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list>
            <v-list-item v-for="(item, j) in panel" :key="j">
              <v-list-item-content>
                <v-btn text :href="item.url" target="_blank" rel="noopener">
                  {{ item.linkText }}
                  <v-icon right color="secondary">{{ mdiOpenInNew }}</v-icon>
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </HeroLayout>
</template>

<script>
  import { mdiOpenInNew, mdiMenuDown } from '@mdi/js';
  import HeroLayout from '@/components/layouts/HeroLayout.vue';
  export default {
    name: 'LinksView',
    components: { HeroLayout },
    async asyncData({ $axios /* $payloadURL, route */ }) {
      const panels = await $axios.$get('/links/');
      return { panels };
    },
    data() {
      return {
        mdiOpenInNew,
        mdiMenuDown,
      };
    },
  };
</script>
