<template>
  <v-row justify="center" no-gutters style="height: 100%;">
    <v-col
      cols="12"
      md="0"
      class="hidden-md-and-up"
      style="height: 100%; overflow: hidden;"
    >
      <v-btn icon style="float: left;" @click.stop="$emit('toggle-drawer')">
        <v-icon>{{ mdiMenu }}</v-icon>
      </v-btn>
      <h2 class="middle-align-text fill-height">
        <div style="overflow: hidden; width: 60vw;">
          <div
            style="
              text-transform: capitalize;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            "
          >
            QMO Lab
            {{
              this.$route.params.id
                ? $route.name.substring(0, $route.name.length - 3) +
                  ': ' +
                  this.$route.params.id.replace('_', ' ')
                : $route.name
            }}
          </div>
        </div>
      </h2>
    </v-col>
    <v-col md="3" class="headerCol">
      <div class="hidden-sm-and-down qmoLogoText hiddentext">
        {{ LogoAltText }}
      </div>
    </v-col>
    <v-spacer class="hidden-sm-and-down" />
    <v-col sm="auto" class="hidden-sm-and-down fill-height headerCol">
      <nav class="nav">
        <NavigationLink
          v-for="link in navLinks"
          :key="link.title"
          :link="link"
        />
      </nav>
    </v-col>
  </v-row>
</template>

<script>
  import { mdiMenu } from '@mdi/js';
  import NavigationLink from '@/components/NavigationLink.vue';
  export default {
    name: 'TheHeader',
    components: {
      NavigationLink,
    },
    props: {},
    data() {
      return {
        LogoAltText: 'Quantum Materials Optoelectronics Laboratory',
        mdiMenu,
      };
    },
    computed: {
      navLinks() {
        return this.$store.state.navLinks.main;
      },
    },
  };
</script>

<style scoped lang="scss">
  @import '~vuetify/src/styles/styles.sass';
  .headerCol {
    display: flex;
    align-items: center;
    float: left;
  }
  .qmoLogoText {
    margin-top: 16px;
    min-width: 200px;
    width: 200px;
    height: 60px;
    background-position: 0 center;
    background-image: url('~assets/images/logo.svg');
    background-size: 200px;
  }
  .qmoLogoLogo {
    margin-top: 16px;
    min-width: 60px;
    width: 60px;
    height: 60px;
    background-position: 0 center;
    background-image: url('~assets/images/logo.svg');
    background-size: 200px;
    @media #{map-get($display-breakpoints, 'md-and-down')} {
      margin-top: 4px;
    }
  }
  .nav {
    display: flex;
    float: left;
    height: 100%;
    margin-bottom: -8px;
  }
</style>
