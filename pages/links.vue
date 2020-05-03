<template>
  <HeroLayout class="linksPage">
    <h1>Useful Links</h1>
    <div style="padding: 16px 32px;">
      <v-btn
        text
        href="https://qmolab.ucr.edu/assets/images/socal-first-announcement.jpg"
        target="_blank"
        rel="noopener"
      >
        SoCAL First announcement
        <v-icon right color="secondary">{{ mdiOpenInNew }}</v-icon>
      </v-btn>
    </div>
    <v-expansion-panels multiple style="padding: 32px; padding-bottom: 64px;">
      <v-expansion-panel v-for="(panel, i) in panels" :key="i">
        <v-expansion-panel-header :expand-icon="mdiMenuDown">
          {{ i }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list>
            <v-list-item v-for="(item, j) in panel" :key="j">
              <v-list-item-content>
                <v-btn text :href="item.url" target="_blank" rel="noopener">
                  {{ item.name }}
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
    data() {
      return {
        mdiOpenInNew,
        mdiMenuDown,
      };
    },
    computed: {
      panels() {
        return this.$store.state.links.panels;
      },
    },
  };
</script>

<style scoped lang="scss"></style>
