<template>
  <v-row justify="center" no-gutters>
    <v-col sm="1" class="hidden-md-and-up middle-align-text">
      <v-btn fab text @click.stop="$emit('toggle-drawer')">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-col>
    <h2 class="hidden-md-and-up middle-align-text">
      QMO Lab {{ $route.name }}
    </h2>
    <v-spacer class="hidden-md-and-up" />
    <v-col sm="1" style="display: flex; align-items: center;">
      <div class="qmoLogoLogo d-none d-sm-flex"></div>
      <div class="hidden-sm-and-down qmoLogoText hiddentext">
        {{ LogoAltText }}
      </div>
    </v-col>
    <v-spacer class="hidden-sm-and-down" />
    <v-col
      sm="auto"
      style="display: flex; align-items: center;"
      class="hidden-sm-and-down"
    >
      <NavigationLinkList :links="links" />
    </v-col>
  </v-row>
</template>

<script>
  import NavigationLinkList from '@/components/NavigationLinkStrip.vue';
  export default {
    name: 'TheHeader',
    components: {
      NavigationLinkList,
    },
    props: {
      links: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        LogoAltText: 'Quantum Materials Optoelectronics Laboratory',
      };
    },
  };
</script>

<style scoped lang="scss">
  .qmoLogoText {
    margin-top: 15px;
    min-width: 135px;
    width: 135px;
    height: 60px;
    background-position: -60px center;
    background-image: url('/img/logos/logo.svg');
    background-size: 200px;
  }
  .qmoLogoLogo {
    margin-top: 15px;
    min-width: 60px;
    width: 60px;
    height: 60px;
    background-position: 0 center;
    background-image: url('/img/logos/logo.svg');
    background-size: 200px;
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      margin-top: 0;
    }
  }
</style>
