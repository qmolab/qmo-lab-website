<template>
  <div class="softwarePage">
    <div class="mt-4 mx-0">
      <span>
        The QMO Lab prides itself in the development and use of state-of-the-art
        data acquisition, monitoring, and analysis software to aid in complex,
        data-driven optoelectronics experiments. On this page you will find
        several projects we have made open to the public, including the hyperDAQ
        repository and our in-house python toolkit (the Gabor Lab Toolkit).
        Check out the downloadable packages below, complete with documentation.
        Additional resources, such as standardized practices for data
        acquisition, dat handling, and data visualization are enshrined in the
        overview and procedures documents available for download below. For
        additional technical support, fill out the form on our
      </span>
      <v-btn text small to="/resources/contact/#subject=software">
        contact page
      </v-btn>
      <span> and a member of our team will reach out as soon as possible.</span>
    </div>
    <div class="my-12">
      <h2 class="pb-3 headline">
        QMO Software Overview: Multi-Parameter Dynamic Photoresponse Microscopy
        (MPDPM)
      </h2>
      <v-list>
        <v-list-item to="/research/data_intensive_methodology/">
          Data Intensive Methodology
        </v-list-item>
        <v-list-item
          v-for="(item, i) in overviewFiles"
          :key="i"
          :href="item.href"
        >
          {{ item.title }}
          <v-icon v-if="item.type === 'pdf'" class="pl-1">
            {{ mdiFilePdf }}
          </v-icon>
          <v-icon v-else-if="item.type === 'ppt'" class="pl-1">
            {{ mdiFilePowerpoint }}
          </v-icon>
          <v-icon v-else class="pl-1">
            {{ mdiDownload }}
          </v-icon>
        </v-list-item>
      </v-list>
    </div>
    <div class="mb-12">
      <h2 class="title">Software Titles:</h2>
      <v-row>
        <v-col v-for="(item, i) in items" :key="i" cols="12" md="6">
          <v-sheet class="stretchCard pb-12">
            <div class="title px-4 pt-4">{{ item.title }}</div>
            <div class="subtitle-1 px-4">{{ item.subtitle }}</div>
            <div class="body-2 px-4 mt-4">
              <DynamicText :html="item.summary" />
            </div>
            <div class="pt-0 actions">
              <v-spacer />
              <v-btn
                text
                nuxt
                :to="`/resources/software/${item.title
                  .replace(/ /g, '_')
                  .toLowerCase()}/`"
              >
                <span>Read More</span>
                <v-icon right color="primary">
                  {{ mdiPageNext }}
                </v-icon>
              </v-btn>
              <v-btn text :disabled="!item.download" :href="item.download">
                <span>Download</span>
                <v-icon right color="secondary">
                  {{ mdiDownload }}
                </v-icon>
              </v-btn>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
  import {
    mdiFilePowerpoint,
    mdiFilePdf,
    mdiDownload,
    mdiPageNext,
  } from '@mdi/js';
  import DynamicText from '@/components/DynamicText.vue';
  export default {
    components: { DynamicText },
    async asyncData({ $axios /* $payloadURL, route */ }) {
      const items = await $axios.$get('/software/cards/');
      return { items };
    },
    data() {
      return {
        mdiFilePowerpoint,
        mdiFilePdf,
        mdiDownload,
        mdiPageNext,
        overviewFiles: [
          {
            title: 'MPDPM Overview (Slideshow)',
            href: '/software/mpdpm_overview/MPDPM_Overview.pptx',
            type: 'ppt',
          },
          {
            title: 'Data Acquisition Procedures',
            href: '/software/mpdpm_overview/MPDPM_Data_Acquisition.pdf',
            type: 'pdf',
          },
          {
            title: 'Data Handling Procedures',
            href: '/software/mpdpm_overview/MPDPM_Data_Handling.pdf',
            type: 'pdf',
          },
          {
            title: 'Visualization Scripting',
            href: '/software/mpdpm_overview/MPDPM_Visualization_Scripting.pdf',
            type: 'pdf',
          },
        ],
      };
    },
  };
</script>
