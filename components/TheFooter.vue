<template>
  <v-footer dark class="siteFooter rel py-2 px-0">
    <v-container class="ma-auto mb-8 pt-0" fluid>
      <v-row>
        <v-spacer />
        <v-col cols="12" class="ucrLogoContainer">
          <a id="ucrLogo" href="https://ucr.edu" target="_blank" rel="noopener">
            <v-img
              :src="ucrLogo.src"
              :lazy-src="ucrLogo.placeholder"
              alt="University of California, Riverside"
              max-width="432"
            />
          </a>
        </v-col>
        <v-spacer />
      </v-row>
      <v-row class="text-center">
        <v-col v-for="(item, i) in floatingLinks" :key="i" cols="12" md="4">
          <v-btn text nuxt :to="item.to" exact-active-class="v-btn--disabled">
            <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
            <span>{{ item.text }}</span>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="py-4">
        <v-col cols="12" md="4" sm="6">
          <div class="logoContainer">
            <div class="qmoLogo" />
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4" class="text-center mt-4">
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
        <v-col cols="12" md="4" sm="6" class="d-flex justify-end">
          <p class="body-2 address">
            QMO Lab<br />
            Material Science and Engineering Building Rm. 179<br />
            Department of Physics and Astronomy<br />
            University of California, Riverside
          </p>
        </v-col>
      </v-row>
    </v-container>
    <div
      class="
        copyrightNotice
        caption
        text--secondary
        d-flex
        justify-center
        fill-w
        abs
        b0
        pa-2
        text-center
      "
    >
      <v-btn
        x-small
        to="/privacy/"
        exact-active-class="v-btn--disabled"
        exact
        text
        class="caption text--secondary"
      >
        Privacy Policy
      </v-btn>
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
  export default {
    name: 'TheFooter',
    data() {
      return {
        tooltipDelay: 500,
        ucrLogo: require('~/assets/images/UC_Riverside_Horiz_WhtBG.png?resize&format=png&placeholder=true'),
        icons: [
          {
            icon: '$twitter',
            title: 'Follow us on Twitter',
            href: 'https://twitter.com/qmo_lab',
            color: '#08a0e9',
          },
          {
            icon: '$youtube',
            title: 'Check out our Youtube Channel',
            href: 'https://www.youtube.com/channel/UCJdmhoGpcmAFzVx9PolvBOA',
            color: '#c4302b',
          },
          {
            icon: '$github',
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
      };
    },
  };
</script>

<style scoped lang="scss">
  .siteFooter {
    .v-container {
      max-width: 1500px !important;
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url('~assets/images/blue.jpg?webp');
      background-size: cover;
      opacity: 0.25;
    }
  }
  .ucrLogoContainer {
    max-width: 432px;
  }
  .logoContainer {
    max-width: 324px;
  }
  .address {
    width: 400px;
  }
  .copyrightNotice {
    background-color: $black;
  }
</style>
