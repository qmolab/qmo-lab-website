<template>
  <v-footer color="#121212" class="siteFooter rel pa-0">
    <v-container class="megaFooter ma-auto mb-8 pt-0" fluid>
      <v-row>
        <v-spacer />
        <v-col cols="12" sm="9" class="maxW432">
          <a href="https://ucr.edu" target="_blank" rel="noopener">
            <v-img
              :src="ucrLogo.src"
              :srcset="ucrSrcSet"
              :lazy-src="ucrLogo.placeholder"
              alt="University of California, Riverside"
              :aspect-ratio="204 / 43.49"
            />
          </a>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row class="ta-center">
        <v-col v-for="(item, i) in floatingLinks" :key="i" cols="12" md="4">
          <NuxtLink :to="item.to">{{ item.text }}</NuxtLink>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-row class="maxW432 mx-auto">
            <v-col cols="12" sm="9">
              <v-row>
                <v-col>
                  <div class="qmoLogo" />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="body-2">
                    QMO Lab<br />
                    Room 179<br />
                    Material Science and Engineering Building<br />
                    Department of Physics and Astronomy<br />
                    University of California, Riverside
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="3" class="ta-center mt-4">
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
                    :to="item.to"
                    class="ma-2"
                    exact
                    :aria-label="item.title"
                    v-on="on"
                  >
                    <v-icon :alt="item.title" :aria-label="item.title">
                      {{ item.icon }}
                    </v-icon>
                  </v-btn>
                </template>
                <span>{{ item.title }}</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :color="color(hover)"
              nuxt
              to="/links/"
              height="initial"
              class="transition_defualt"
            >
              <v-card-title>Lab Funding:</v-card-title>
              <v-row>
                <v-col
                  v-for="(fundingSource, n) in fundingImages"
                  :key="n"
                  :cols="6"
                >
                  <BaseImage
                    :src="fundingSource.src"
                    :webp="fundingSource.webp"
                    :alt="fundingSource.alt"
                    :title="fundingSource.title"
                    :max-height="80"
                    contain
                  />
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <div class="copyrightNotice fill-w abs pa-2 overline ta-center">
      <NuxtLink x-small to="/resources/">Lab Resources</NuxtLink> |
      <NuxtLink x-small to="/resources/privacy/">Privacy Policy</NuxtLink>
      <span>
        | &nbsp;&copy;&nbsp; 2020 Regents of the University of California
      </span>
    </div>
  </v-footer>
</template>

<script>
  import { mdiTwitter, mdiYoutube, mdiGithub, mdiFileDocument } from '@mdi/js';
  import NuxtLink from '@/components/NuxtLink.vue';
  import BaseImage from '@/components/BaseImage.vue';
  export default {
    name: 'TheFooter',
    components: {
      NuxtLink,
      BaseImage,
    },
    data() {
      return {
        tooltipDelay: 500,
        ucrLogo: require('~/assets/images/ucr_logo_blGd.png?resize&format=png&placeholder=true'),
        ucrLogoWebp: require('~/assets/images/ucr_logo_blGd.png?webp'),
        icons: [
          {
            icon: mdiTwitter,
            title: 'Follow us on Twitter',
            href: 'https://twitter.com/qmo_lab',
            color: '#08a0e9',
          },
          {
            icon: mdiYoutube,
            title: 'Check out our Youtube Channel',
            href: 'https://www.youtube.com/channel/UCJdmhoGpcmAFzVx9PolvBOA',
            color: '#c4302b',
          },
          {
            icon: mdiGithub,
            title: 'Lab Software Repository',
            href: 'https://github.com/qmolab',
            color: '#211F1F',
          },
          {
            icon: mdiFileDocument,
            title: 'Lab Software Documentation',
            to: '/resources/software/',
            color: '#211F1F',
          },
        ],
        floatingLinks: [
          { to: '/resources/tour/', text: 'Schedule a tour' },
          {
            to: '/resources/potential_students/',
            text: 'Information for potential students',
          },
          { to: '/resources/contact/', text: 'Contact Us' },
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
    .megaFooter {
      width: 90vw;
      z-index: 2;
    }
    .copyrightNotice {
      bottom: 0;
      background-color: #121212;
      z-index: 2;
      display: flex;
      justify-content: center;
    }
    &::after {
      content: '';
      background-image: url('~assets/images/gallery/blue.png?webp');
      background-size: cover;
      opacity: 0.2;
      z-index: 1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .maxW432 {
      max-width: 432px;
    }
  }
  .breakAfter {
    position: relative;
    &::after {
      content: '|';
      position: absolute;
      right: 0;
      top: 18px;
    }
  }
</style>
