<template>
  <v-footer color="#121212">
    <div class="ucrLogoContainer">
      <a href="//ucr.edu" target="blank">
        <img
          src="~assets/images/ucr_logo_blueGold.png"
          class="ucrLogoLarge"
          alt="University of California, Riverside"
        />
      </a>
    </div>
    <div
      style="padding-top: 0; width: 90vw; margin: auto; margin-bottom: 30px;"
    >
      <v-row class="additionalActions">
        <v-col>
          <v-btn class="additionalAction" text>Schedule a tour</v-btn>
        </v-col>
        |
        <v-col>
          <v-btn class="additionalAction" text>
            Information for potential students
          </v-btn>
        </v-col>
        |
        <v-col><v-btn class="additionalAction" text>Contact Us</v-btn></v-col>
      </v-row>
      <v-row style="display: flex;">
        <div class="qmoLogoLogo"></div>
        <v-col height="150" class="address">
          <p class="body-2">
            Quantum Materials Optoelectronics Laboratory<br />
            Department of Physics and Astronomy<br />
            Material Science and Engineering Building<br />
            University of California, Riverside
          </p>
        </v-col>
        <v-col style="padding: 0; width: 500px;">
          <FundingCard />
        </v-col>
      </v-row>
    </div>
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
  import FundingCard from '@/components/FundingCard.vue';
  export default {
    name: 'TheFooter',
    components: {
      FundingCard,
    },
  };
</script>

<style scoped lang="scss">
  .ucrLogoContainer {
    width: 300px;
    margin: auto;
    .ucrLogoLarge {
      width: 300px;
    }
  }
  .address {
    max-width: 330px;
    min-width: 330px;
    display: flex;
    align-items: center;
  }
  .additionalActions {
    text-align: center;
    display: flex;
    align-items: center;
    .additionalAction {
      flex-grow: 1;
    }
  }
  .qmoLogoLogo {
    margin-top: 39px;
    min-width: 90px;
    width: 90px;
    height: 90px;
    background-position: 0 center;
    background-image: url('~assets/images/logo.svg');
    background-size: 300px;
  }
  .copyrightNotice {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
</style>
