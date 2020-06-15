<template>
  <v-footer dark class="siteFooter rel py-2 px-0">
    <v-container class="ma-auto mb-8 pt-0" style="max-width: 1500px;" fluid>
      <v-row>
        <v-spacer />
        <v-col cols="12" class="maxW432">
          <a id="ucrLogo" href="https://ucr.edu" target="_blank" rel="noopener">
            <v-img
              :src="ucrLogo.src"
              :srcset="ucrSrcSet"
              :lazy-src="ucrLogo.placeholder"
              alt="University of California, Riverside"
              :aspect-ratio="204 / 43.49"
              max-width="432"
            />
          </a>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row class="ta-center">
        <v-col v-for="(item, i) in floatingLinks" :key="i" cols="12" md="4">
          <v-btn
            text
            nuxt
            small
            :to="item.to"
            exact-active-class="v-btn--disabled"
          >
            <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
            <span>{{ item.text }}</span>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="py-4">
        <v-col cols="12" md="4" sm="6">
          <div style="max-width: 324px;">
            <div class="qmoLogo" />
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="ta-center mt-4">
          <v-tooltip
            v-for="(item, i) in icons"
            :key="i"
            bottom
            :open-delay="tooltipDelay"
            :close-delay="tooltipDelay / 2"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                fab
                small
                :color="item.color"
                :href="item.href"
                target="_blank"
                rel="noopener"
                class="ma-2"
                :aria-label="item.title"
                active-class="v-btn--disabled"
                v-on="on"
              >
                <v-icon
                  :alt="item.title"
                  :aria-label="item.title"
                  :x-large="item.large"
                >
                  {{ item.icon }}
                </v-icon>
              </v-btn>
            </template>
            <span>{{ item.title }}</span>
            <v-icon v-if="item.href" v-text="'$mdiOpenInNew'" />
          </v-tooltip>
        </v-col>
        <v-col
          cols="12"
          md="4"
          sm="6"
          style="justify-content: flex-end; display: flex;"
        >
          <p class="body-2" style="width: 400px;">
            QMO Lab<br />
            Material Science and Engineering Building Rm. 179<br />
            Department of Physics and Astronomy<br />
            University of California, Riverside
          </p>
        </v-col>
      </v-row>
    </v-container>
    <div class="copyrightNotice fill-w abs pa-2 overline ta-center">
      <NuxtLink x-small to="/privacy/">Privacy Policy</NuxtLink>
      <span>
        | &nbsp;&copy;&nbsp; 2020 Regents of the University of California
      </span>
    </div>
    <v-tooltip
      bottom
      :open-delay="tooltipDelay"
      :close-delay="tooltipDelay / 2"
      activator="#ucrLogo"
    >
      <span>
        <span>Visit the Official UCR Website</span>
        <v-icon v-text="'$mdiOpenInNew'" />
      </span>
    </v-tooltip>
  </v-footer>
</template>

<script>
  import NuxtLink from '@/components/NuxtLink.vue';
  export default {
    name: 'TheFooter',
    components: {
      NuxtLink,
    },
    data() {
      return {
        tooltipDelay: 500,
        ucrLogo: require('~/assets/images/ucr_logo_blGd.png?resize&format=png&placeholder=true'),
        ucrLogoWebp: require('~/assets/images/ucr_logo_blGd.png?webp'),
        icons: [
          {
            icon: '$mdiTwitter',
            title: 'Follow us on Twitter',
            href: 'https://twitter.com/qmo_lab',
            color: '#08a0e9',
          },
          {
            icon: '$mdiYoutube',
            title: 'Check out our Youtube Channel',
            href: 'https://www.youtube.com/channel/UCJdmhoGpcmAFzVx9PolvBOA',
            color: '#c4302b',
          },
          {
            icon: '$mdiGithub',
            title: 'Lab Software Repository',
            href: 'https://github.com/qmolabucr',
            color: '#211F1F',
          },
          {
            icon: '$mdiAtom',
            title: 'UCR Physics',
            href: 'https://physics.ucr.edu/',
            color: '#2d6cc0',
          },
          {
            icon: '$mdiAlphaS',
            title: 'UCR SMALL Lab',
            href: 'https://small.ucr.edu/',
            color: 'green darken-2',
            large: true,
          },
        ],
        floatingLinks: [
          {
            to: '/contact/tour/',
            text: 'Schedule a tour',
            icon: '$mdiBusMarker',
          },
          {
            to: '/contact/potential_students/',
            text: 'Information for potential students',
            icon: '$mdiInformationVariant',
          },
          {
            to: '/contact/',
            text: 'Contact Us',
            // icon: '$mdiMessage',
          },
        ],
        fundingImages: [
          {
            src: require('~/assets/images/funding_logos/NSF_logo.png?resize&format=png'),
            webp: require('~/assets/images/funding_logos/NSF_logo.png?webp'),
            alt: 'NSF Logo',
            title: 'The National Science Foundation',
          },
          {
            src: require('~/assets/images/funding_logos/CIFAR_logo.png?resize&format=png'),
            webp: require('~/assets/images/funding_logos/CIFAR_logo.png?webp'),
            alt: 'CIFAR Logo',
            title: 'Canadian Institute for the Advanced Research',
          },
          {
            src: require('~/assets/images/funding_logos/SHINES_logo.png?resize&format=png'),
            webp: require('~/assets/images/funding_logos/SHINES_logo.png?webp'),
            alt: 'SHINES Logo',
            title: 'Spin and Heat in Nanoscale Electronic Systems',
          },
          {
            src: require('~/assets/images/funding_logos/RCSA_logo.png?resize&format=png'),
            webp: require('~/assets/images/funding_logos/RCSA_logo.png?webp'),
            alt: 'RCSA Logo',
            title: 'Research Corporation for Science Advancement',
          },
        ],
      };
    },
    computed: {
      ucrSrcSet() {
        return (
          this.ucrLogoWebp.srcSet ||
          this.ucrLogoWebp.srcset ||
          this.ucrLogoWebp ||
          this.ucrLogo.srcSet ||
          this.ucrLogo.srcset
        );
      },
    },
    methods: {
      color(hovering) {
        return 'rgba(255,255,255,' + (hovering ? 0.02 : 0.01).toString() + ')';
      },
    },
  };
</script>

<style scoped lang="scss">
  .siteFooter {
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url('~assets/images/gallery/blue.png?webp');
      background-size: cover;
      opacity: 0.25;
    }
  }
  .copyrightNotice {
    bottom: 0;
    background-color: $black;
    display: flex;
    justify-content: center;
  }
  .maxW432 {
    max-width: 432px;
  }
</style>
