<template>
  <v-row justify="center" no-gutters class="fill-h">
    <v-col cols="12" md="0" class="hidden-md-and-up hide-overflow fill-h">
      <v-app-bar-nav-icon
        class="float-l"
        @click.stop="$emit('toggle-drawer')"
      />
      <h1 class="titleText headline ellipsis_text">
        QMO Lab
        {{ title }}
      </h1>
    </v-col>
    <v-col md="3" class="headerCol">
      <div :key="$route.path" class="hidden-sm-and-down mt-2">
        <div class="logoContainer">
          <div id="spinner" class="qmoLogo spinning" />
          <div class="qmoLogo textLogo" />
        </div>
      </div>
    </v-col>
    <v-spacer class="hidden-sm-and-down" />
    <v-col sm="auto" class="hidden-sm-and-down fill-h headerCol">
      <nav class="nav float-l d-flex align-center">
        <div
          v-for="(link, i) in navLinks"
          :key="i"
          class="rel fill-h float-l d-flex align-center"
        >
          <nuxt-link v-slot="{ navigate, isExactActive }" :to="link.to">
            <div>
              <v-btn
                :disabled="isExactActive"
                class="mb-1"
                exact
                text
                link
                small
                @click="navigate"
              >
                {{ link.title }}
              </v-btn>
              <div
                :class="{ bottomBorder: isExactActive }"
                :style="`background-color: ${$vuetify.theme.themes.dark.primary}`"
              />
            </div>
          </nuxt-link>
        </div>
      </nav>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'TheHeader',
    props: {
      title: { type: String, required: true },
      navLinks: { type: Object, required: true },
    },
    data() {
      return { spinner: undefined };
    },
    mounted() {
      this.spinner = document.getElementById('spinner');
      this.spinner.addEventListener('animationend', () => {
        this.spinner.className = 'qmoLogo';
      });
    },
    updated() {
      this.spin();
    },
    methods: {
      spin() {
        this.spinner.className = 'qmoLogo spinning';
      },
    },
  };
</script>

<style scoped lang="scss">
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .titleText {
    margin-top: 6px;
  }
  .nav {
    height: 100%;
    margin-bottom: -8px;
  }
  .logoContainer {
    position: relative;
    min-width: 194px;
    max-width: 226px;
    width: 100%;
    opacity: 1;
    transition: opacity 0.28s ease;
    .qmoLogo {
      position: absolute;
      top: 0;
      &#spinner {
        left: 0;
        background-position: -1px center;
        border-radius: 50%;
        width: 30%;
        background-color: $header;
        &.spinning {
          animation: spin 1.12s ease;
        }
      }
      &.textLogo {
        right: 0;
        background-position: right center;
        width: 68%;
      }
    }
  }
  .v-app-bar--hide-shadow .logoContainer {
    opacity: 0;
  }
  .bottomBorder {
    position: absolute;
    bottom: -3px;
    left: 12px;
    right: 12px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    height: 5px;
    background-color: $primary;
  }
</style>
