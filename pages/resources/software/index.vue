<template>
  <v-container class="researchPage">
    <BreadCrumb />
    <h1>QMO Lab Software and Documentation</h1>
    <v-row>
      <v-col v-for="item in items" :key="item.title" cols="12" md="6">
        <v-card>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
          <v-card-text>{{ item.text }}</v-card-text>
          <v-card-actions class="no-padding-top">
            <v-spacer />
            <v-btn text disabled>
              Documentation
              <v-icon right color="secondary">
                {{ mdiFileDocument }}
              </v-icon>
            </v-btn>
            <v-btn text disabled>
              Download
              <v-icon right color="secondary">
                {{ mdiDownload }}
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
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
            to: '',
          },
          {
            title: 'MPDPM',
            subtitle: 'By Trevor Arp',
            text: `MPDPM (Multi-parameter dynamic photo-response microscopy) is a
            growing...`,
            to: '',
          },
        ],
      };
    },
  };
</script>
