<template>
  <HeroLayout class="privacyPolicyPage">
    <BreadCrumb />
    <h1>QMO Lab Website Privacy Policy</h1>
    <v-card>
      <v-card-title>Privacy Policy</v-card-title>
      <v-card-subtitle>Effective 06/01/2020</v-card-subtitle>
      <v-card-text>We won't sell or give away any information...</v-card-text>
      <v-card-actions>
        <v-btn
          text
          href="https://www.ucr.edu/privacy.html"
          target="_blank"
          rel="noopener"
        >
          UCR Privacy Policy
          <v-icon right color="secondary">{{ mdiOpenInNew }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </HeroLayout>
</template>

<script>
  import { mdiOpenInNew } from '@mdi/js';
  import HeroLayout from '@/components/layouts/HeroLayout.vue';
  import BreadCrumb from '@/components/lib/BreadCrumb.vue';
  export default {
    components: { HeroLayout, BreadCrumb },
    data() {
      return { mdiOpenInNew };
    },
  };
</script>
