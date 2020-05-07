<template>
  <v-footer color="#121212" class="siteFooter">
    <v-container class="megaFooter" fluid>
      <v-row>
        <v-spacer />
        <v-col cols="12" sm="9" style="max-width: 380px;">
          <UcrLogo />
        </v-col>
        <v-spacer />
      </v-row>
      <v-row class="additionalActions">
        <v-col class="breakAfter" cols="12" md="4">
          <v-btn text nuxt to="/resources/tour/">Schedule a tour</v-btn>
        </v-col>
        <v-col class="breakAfter" cols="12" md="4">
          <v-btn text nuxt to="/resources/potential_students/">
            Information for potential students
          </v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn text nuxt to="/resources/contact/">Contact Us</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-row class="footerAbout">
            <v-col cols="12" sm="9">
              <v-row>
                <v-col>
                  <QmoLogo />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <p class="body-2">
                    QMO Lab<br />
                    Department of Physics and Astronomy<br />
                    Material Science and Engineering Building<br />
                    University of California, Riverside
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="3" class="socialIcons">
              <v-tooltip
                bottom
                :open-delay="tooltipDelay"
                :close-delay="tooltipDelay / 2"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    fab
                    small
                    color="#08a0e9"
                    alt="Follow us on Twitter"
                    aria-label="Follow us on Twitter"
                    href="https://twitter.com/qmo_lab"
                    v-on="on"
                  >
                    <v-icon>{{ mdiTwitter }}</v-icon>
                  </v-btn>
                </template>
                <span>Follow us on Twitter</span>
              </v-tooltip>
              <v-tooltip
                bottom
                :open-delay="tooltipDelay"
                :close-delay="tooltipDelay / 2"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    fab
                    small
                    color="#c4302b"
                    alt="Check out our Youtube Channel"
                    aria-label="Check out our Youtube Channel"
                    href="https://www.youtube.com/channel/UCJdmhoGpcmAFzVx9PolvBOA"
                    v-on="on"
                  >
                    <v-icon>{{ mdiYoutube }}</v-icon>
                  </v-btn>
                </template>
                <span>Check out our Youtube Channel</span>
              </v-tooltip>
              <v-tooltip
                bottom
                :open-delay="tooltipDelay"
                :close-delay="tooltipDelay / 2"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    fab
                    small
                    color="#211F1F"
                    alt="Lab Software Repository"
                    aria-label="Lab Software Repository"
                    href="https://github.com/qmolab"
                    v-on="on"
                  >
                    <v-icon>{{ mdiGithub }}</v-icon>
                  </v-btn>
                </template>
                <span>Lab Software Repository</span>
              </v-tooltip>
              <v-tooltip
                bottom
                :open-delay="tooltipDelay"
                :close-delay="tooltipDelay / 2"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    fab
                    small
                    color="#211F1F"
                    alt="Lab Software Documentation"
                    aria-label="Lab Software Documentation"
                    nuxt
                    to="/resources/software/"
                    v-on="on"
                  >
                    <v-icon>{{ mdiFileDocument }}</v-icon>
                  </v-btn>
                </template>
                <span>Lab Software Documentation</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <FundingCard :col-span="6" />
        </v-col>
      </v-row>
    </v-container>
    <div class="copyrightNotice overline">
      <v-btn text x-small nuxt exact to="/resources/">Lab Resources</v-btn> |
      <v-btn text x-small nuxt exact to="/resources/privacy/">
        Privacy Policy
      </v-btn>
      <span>
        | &nbsp;&copy;&nbsp; 2020 Regents of the University of California
      </span>
    </div>
  </v-footer>
</template>

<script>
  import { mdiTwitter, mdiYoutube, mdiGithub, mdiFileDocument } from '@mdi/js';
  import UcrLogo from '@/components/UcrLogo.vue';
  import QmoLogo from '@/components/QmoLogo.vue';
  import FundingCard from '@/components/FundingCard.vue';
  export default {
    name: 'TheFooter',
    components: {
      UcrLogo,
      QmoLogo,
      FundingCard,
    },
    data() {
      return {
        mdiTwitter,
        mdiYoutube,
        mdiGithub,
        mdiFileDocument,
        tooltipDelay: 500,
      };
    },
  };
</script>

<style scoped lang="scss">
  .siteFooter {
    position: relative;
    &.v-footer {
      padding: 0;
    }
    .megaFooter {
      padding-top: 0;
      width: 90vw;
      margin: auto;
      margin-bottom: 30px;
      z-index: 2;
      .additionalActions {
        text-align: center;
      }
    }
    .copyrightNotice {
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      background-color: #121212;
      z-index: 2;
      padding: 8px;
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
    .footerAbout {
      max-width: 432px;
      margin: auto;
    }
    .socialIcons {
      text-align: center;
      margin-top: 16px;
      .v-btn {
        margin: 8px;
      }
    }
  }
</style>
