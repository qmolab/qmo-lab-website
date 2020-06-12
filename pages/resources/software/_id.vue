<template>
  <div class="softwareOverviewPage">
    <span>{{ subtitle }}</span>
    <h2 class="ta-center mt-12 headline">{{ title }} Overview</h2>
    <div class="body-2 mt-4"><DynamicText :html="summary" /></div>
    <h2 class="mt-12">This page is still under development!</h2>
    <span>
      It shall contain a general overview of the software <br />
      Please let me know if you have any suggestions
    </span>
    <div class="mt-12 actions">
      <v-spacer />
      <v-btn v-if="documentation" text :href="documentation">
        <span>Full documentation</span>
        <v-icon right color="secondary">{{ mdiFileDocument }}</v-icon>
      </v-btn>
      <v-btn v-if="download" text :href="download">
        <span>Download Latest</span>
        <v-icon right color="secondary">{{ mdiDownload }}</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
  import { mdiDownload, mdiFileDocument } from '@mdi/js';
  import DynamicText from '@/components/DynamicText.vue';
  export default {
    components: { DynamicText },
    async asyncData({ $axios, payload, params /* $payloadURL, route */ }) {
      if (payload)
        return {
          title: params.id.replace(/_/g, ' '),
          subtitle: payload.subtitle,
          summary: payload.summary,
          download: payload.download,
          documentation: payload.documentation,
        };
      // else if (process.static && process.client && $payloadURL)
      //   return await $axios.$get($payloadURL(route));
      else {
        const item = await $axios.$get('/software/routes/route/', {
          params: { title: params.id },
        });
        return {
          title: params.id.replace(/_/g, ' '),
          subtitle: item.subtitle,
          summary: item.summary,
          download: item.download,
          documentation: item.documentation,
        };
      }
    },
    data() {
      return {
        mdiDownload,
        mdiFileDocument,
      };
    },
  };
</script>
