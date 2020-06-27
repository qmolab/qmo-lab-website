<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="thesisPage">
    <v-row class="mt-8" dense>
      <v-col cols="12">
        <h2 class="text-h5" v-html="payload.title"></h2>
      </v-col>
      <v-col cols="12">
        <v-avatar size="75">
          <StoreImage
            width="82"
            height="82"
            sub-category="members"
            :item-id="payload.img"
          />
        </v-avatar>
        <span class="font-weight-light pl-2">
          <nuxt-link
            v-slot="{ navigate }"
            :to="`/members/#${payload.img}`"
            no-prefetch
          >
            <v-btn large nuxt text @click="navigate">
              <span>By {{ fullName }}</span>
            </v-btn>
          </nuxt-link>
        </span>
      </v-col>
      <v-col cols="12" class="my-8">
        <h3 class="text-center text-h5">Abstract</h3>
        <div class="body-1 font-weight-light" v-html="payload.summary" />
      </v-col>
      <v-col cols="12">
        <v-btn text :href="dissertationURL">
          <v-icon color="red">$pdf</v-icon>
          Download as PDF
          <v-icon right>$mdiDownload</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <!--<client-only placeholder="Loading PDF...">
      <PdfViewer
        v-if="prevPage"
        :url="dissertationURL"
        :title="`Doctoral Dissertation of ${fullName}`"
        :author="payload.img"
        :bookmarks="bookmarks[payload.img]"
      />
    </client-only>-->
  </div>
</template>

<script>
  import StoreImage from '@/components/StoreImage.vue';
  // import PdfViewer from '@/components/PdfViewer.vue';
  export default {
    components: { StoreImage },
    async asyncData({ $axios, params }) {
      const payload = await $axios.$get('/theses/routes/route/', {
        params: { author: params.id },
      });
      return { payload };
    },
    data: () => ({
      prevPage: undefined,
      bookmarks: {
        trevor: {
          startPage: 16,
          frontMatter: {
            Acknowledgement: 4,
            Dedication: 7,
            Abstract: 8,
            'Table of Contents': 10,
            'List of Figures': 13,
          },
          chapters: [
            {
              title: 'Motivation and Background ',
              page: 16,
            },
            {
              title: `Methodology and Metrology`,
              page: 30,
            },
            {
              title: 'Data Handling, Analysis, and Visualization',
              page: 58,
            },
            {
              title: `The Microscopic Scale`,
              page: 87,
            },
            {
              title: 'The Mesoscopic Scale',
              page: 122,
            },
            {
              title: 'The Statistical Scale',
              page: 152,
            },
            {
              title: 'Conclusion',
              page: 175,
            },
          ],
          endMatter: {
            References: 181,
            'Appendix 1: Sample Information': 191,
            'Appendix 2: Calculations': 198,
          },
        },
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
      fullName() {
        const idP = this.$route.params.id.split('_');
        return (
          idP[0].slice(0, 1).toUpperCase() +
          idP[0].slice(1) +
          ' ' +
          idP[1].slice(0, 1).toUpperCase() +
          idP[1].slice(1)
        );
      },
      dissertationURL() {
        return `${process.env.baseUrl}/assets/theses/${this.fullName.replace(
          / /g,
          '_'
        )}/Doctoral_Dissertation.pdf`;
      },
    },
    mounted() {
      this.$store.commit('pageTitle', `Dissertations: ${this.fullName}`);
    },
    head() {
      return {
        title: `Dissertation: ${this.fullName}`,
        base: { href: '/' },
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `The doctoral dissertation of ${this.fullName}.`,
          },
        ],
        link: [
          {
            rel: 'canonical',
            href: process.env.baseUrl + this.$route.path,
          },
        ],
      };
    },
  };
</script>
