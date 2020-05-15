<template>
  <v-container class="researchPage">
    <BreadCrumb />
    <h1 class="hidden-sm-and-down">QMO Lab Software and Documentation</h1>
    <p class="mt-4 mx-2">
      The QMO Lab prides itself in the development and use of state-of-the-art
      data acquisition, monitoring, and analysis software to aid in complex,
      data-driven optoelectronics experiments . On this page you will find
      several projects we have made open to the public, including the MPDPM
      repository. Check out the downloadable packages below, complete with
      documentation.
    </p>
    <v-row>
      <v-col v-for="(item, i) in items" :key="i" cols="12" md="6">
        <v-sheet class="stretchCard pb-12">
          <div class="title px-4 pt-4">{{ item.title }}</div>
          <div class="subtitle-1 px-4">{{ item.subtitle }}</div>
          <div class="summary pa-4">{{ item.text }}</div>
          <div class="pt-0 actions">
            <v-spacer />
            <v-btn
              text
              :disabled="!item.documentation"
              :href="item.documentation"
            >
              Documentation
              <v-icon right color="secondary">
                {{ mdiFileDocument }}
              </v-icon>
            </v-btn>
            <v-btn text :disabled="!item.download" :href="item.download">
              Download
              <v-icon right color="secondary">
                {{ mdiDownload }}
              </v-icon>
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mdiDownload, mdiFileDocument } from '@mdi/js';
  import BreadCrumb from '@/components/lib/BreadCrumb.vue';
  export default {
    components: { BreadCrumb },
    data() {
      return {
        mdiDownload,
        mdiFileDocument,
        items: [
          {
            title: 'Gabor Lab Toolkit',
            subtitle: 'By Trevor Arp',
            text: `The Gabor Lab Toolkit is a...`,
            download: '',
            documentation: '',
          },
          {
            title: 'hyperDAQ',
            subtitle: 'By Trevor Arp',
            text: `hyperDAQ is based on MPDPM (Multi-parameter dynamic photo-response microscopy), a
            growing...`,
            download: '',
            documentation: '',
          },
          {
            title: 'Noisy Antenna',
            subtitle: 'By Trevor Arp',
            text: `The Noisy Antenna program...`,
            download: '',
            documentation: '',
          },
        ],
      };
    },
  };
</script>
