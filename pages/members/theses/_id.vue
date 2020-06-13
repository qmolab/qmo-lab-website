<template>
  <div class="thesisPage">
    <v-row class="mt-8" dense>
      <v-col cols="12">
        <h2 class="headline">{{ title }}</h2>
      </v-col>
      <v-col cols="12">
        <v-avatar size="75">
          <StoreImage
            width="75"
            height="75"
            sub-category="members"
            :item-id="name"
          />
        </v-avatar>
        <span class="title font-weight-light pl-2">
          <v-btn large nuxt text :to="`/members/${name}/`">
            <span>By {{ fullName }}</span>
          </v-btn>
        </span>
      </v-col>
      <v-col cols="12" class="my-8">
        <h3 class="ta-center title">Abstract</h3>
        <DynamicText class="font-weight-light" :html="summary" />
      </v-col>
    </v-row>
    <PdfViewer
      :url="dissertationURL"
      :title="`Doctoral Dissertation of ${fullName}`"
      :author="name"
      :bookmarks="bookmarks[name]"
    />
  </div>
</template>

<script>
  import StoreImage from '@/components/StoreImage.vue';
  import DynamicText from '@/components/DynamicText.vue';
  import PdfViewer from '@/components/PdfViewer.vue';
  export default {
    components: { StoreImage, DynamicText, PdfViewer },
    async asyncData({ $axios, payload, params /* $payloadURL, route */ }) {
      const idP = params.id.split('_');
      if (payload)
        return {
          title: payload.title,
          fullName:
            idP[0].slice(0, 1).toUpperCase() +
            idP[0].slice(1) +
            ' ' +
            idP[1].slice(0, 1).toUpperCase() +
            idP[1].slice(1),
          summary: payload.summary,
          name: payload.img,
        };
      // else if (process.static && process.client && $payloadURL)
      //   return await $axios.$get($payloadURL(route));
      else {
        const item = await $axios.$get('/theses/routes/route/', {
          params: { author: params.id },
        });
        return {
          title: item.title,
          summary: item.summary,
          name: item.img,
          fullName:
            idP[0].slice(0, 1).toUpperCase() +
            idP[0].slice(1) +
            ' ' +
            idP[1].slice(0, 1).toUpperCase() +
            idP[1].slice(1),
        };
      }
    },
    data: () => ({
      bookmarks: {
        max: {
          startPage: 13,
          frontMatter: {
            Acknowledgement: 4,
            Dedication: 7,
            Abstract: 8,
            'Table of Contents': 9,
            'List of Figures': 11,
          },
          chapters: [
            {
              title: 'Introduction ',
              page: 13,
            },
            {
              title: `Instrumentation: Modular Muti-Dimensional Scanning Microscope`,
              page: 22,
            },
            {
              title: 'Photoluminescence in a Neodymium-Doped Ceramic',
              page: 41,
            },
            {
              title: `Photocurrent and Carrier Multiplication in TMD Heterostructures`,
              page: 58,
            },
            {
              title: 'Thermospintronic Imaging of Electrostatic Flux',
              page: 95,
            },
            {
              title: 'Conclusion',
              page: 114,
            },
          ],
          endMatter: {
            'Appendix A: Visualizing Nanoscience': 115,
          },
        },
        fatemeh: {
          startPage: 15,
          frontMatter: {
            Acknowledgement: 4,
            Dedication: 5,
            Abstract: 6,
            'Table of Contents': 8,
            'List of Figures': 11,
          },
          chapters: [
            {
              title: 'Introduction and Background',
              page: 15,
            },
            {
              title: `Theory of 2DEG and 2D-Transition Metal Dichalcogenides Band Structure`,
              page: 23,
            },
            {
              title: 'Device Fabrication',
              page: 44,
            },
            {
              title: `Instrumentation: Low Temperature Broadband Photocurrent Scanning Microscope`,
              page: 55,
            },
            {
              title: 'Basic Optical Characterization of TMDs Heterostructures',
              page: 89,
            },
            {
              title: `Hot Carrier-Enhanced Interlayer Electron-Hole Pair Multiplication in 2D Semiconductor Heterostructure Photocells`,
              page: 99,
            },
            {
              title: `Phonon-Assisted Antistokes Upconversion in a 2D-TMD Heterostructure`,
              page: 129,
            },
            {
              title: 'Conclusions',
              page: 143,
            },
          ],
        },
        dennis: {
          startPage: 17,
          frontMatter: {
            Acknowledgement: 4,
            Dedication: 8,
            Abstract: 9,
            'Table of Contents': 11,
            'List of Figures': 13,
            'Forward: About the fullName': 15,
            "Quantum Confinement: There's not so much room at the bottom": 17,
          },
          chapters: [
            {
              title: 'Excitons in the 2-Dimensional Limit',
              page: 20,
            },
            {
              title: 'Properties of Ultrathin MoTe_2 Heterostructures',
              page: 39,
            },
            {
              title: 'Device Fabrication and Measurement',
              page: 53,
            },
            {
              title: 'Basic Characterization of MoTe_2 Photocells',
              page: 91,
            },
            {
              title: `Auger Recombination in the Extreme Electron-Hole Density Limit of a MoTe_2 Photocell`,
              page: 101,
            },
            {
              title: `Electron-Hole Liquid in a Van Der Waals Heterostructure Photocell at Room Temperature`,
              page: 115,
            },
            {
              title: 'Conclusion',
              page: 130,
            },
          ],
          endMatter: {
            References: 131,
          },
        },
      },
    }),
    computed: {
      dissertationURL() {
        return `${process.env.ROUTER_BASE}assets/theses/${this.fullName.replace(
          / /g,
          '_'
        )}/Doctoral_Dissertation.pdf`;
      },
    },
  };
</script>
