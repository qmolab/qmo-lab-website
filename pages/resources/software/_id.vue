<template>
  <v-container class="softwareOverviewPage">
    <BreadCrumb />
    <h1 class="hidden-sm-and-down heading">QMO Lab Software: {{ title }}</h1>
    <span>{{ subtitle }}</span>
    <h2 class="ta-center mt-12 heading">{{ title }} overview</h2>
    <p class="mt-8">{{ summary }}</p>
    <div class="mt-12 actions">
      <v-spacer />
      <v-btn v-if="documentation" text :href="documentation">
        Full documentation
        <v-icon right color="secondary">
          {{ mdiFileDocument }}
        </v-icon>
      </v-btn>
      <v-btn v-if="download" text :href="download">
        Download Latest
        <v-icon right color="secondary">
          {{ mdiDownload }}
        </v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
  import { mdiDownload, mdiFileDocument } from '@mdi/js';
  import BreadCrumb from '@/components/lib/BreadCrumb.vue';
  export default {
    components: { BreadCrumb },
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
