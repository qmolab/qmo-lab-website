<template>
  <v-footer color="#121212" class="siteFooter">
    <v-container class="megaFooter" fluid>
      <v-row>
        <v-spacer />
        <v-col cols="12" sm="9">
          <UcrLogo />
        </v-col>
        <v-spacer />
      </v-row>
      <v-row class="additionalActions">
        <v-col class="breakAfter" cols="12" md="4">
          <v-btn text>Schedule a tour</v-btn>
        </v-col>
        <v-col class="breakAfter" cols="12" md="4">
          <v-btn text>
            Information for potential students
          </v-btn>
        </v-col>
        <v-col cols="12" md="4">
          <v-btn text>Contact Us</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <TheFooterAboutColumn />
        </v-col>
        <v-col cols="12" md="6">
          <FundingCard :col-span="6" />
        </v-col>
      </v-row>
    </v-container>
    <div class="copyrightNotice overline">
      <v-btn text x-small>Lab Resources</v-btn> |
      <v-btn text x-small>Privacy Policy</v-btn> |
      <span class="paddLeft">
        &copy;&nbsp; 2020 Regents of the University of California
      </span>
    </div>
  </v-footer>
</template>

<script>
  import UcrLogo from '@/components/UcrLogo.vue';
  import FundingCard from '@/components/FundingCard.vue';
  import TheFooterAboutColumn from '@/components/TheFooterAboutColumn.vue';
  export default {
    name: 'TheFooter',
    components: {
      UcrLogo,
      FundingCard,
      TheFooterAboutColumn,
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
      background-image: url('~assets/images/gallery/blue.png?resize&quality=55&format=jpg&size=760');
      background-size: cover;
      opacity: 0.2;
      z-index: 1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>
