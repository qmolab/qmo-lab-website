<template>
  <v-row class="mt-8" no-gutters>
    <h2 class="headline">
      Adjusting Site Appearance (Pre-Alpha)
    </h2>
    <v-col cols="12">
      <v-expansion-panels class="mb-2">
        <v-expansion-panel>
          <v-expansion-panel-header>Font</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col cols="6">
                <v-select
                  v-model="headingFont"
                  :items="fonts"
                  label="Heading Font"
                  :color="theme.primary"
                />
              </v-col>
              <v-col cols="6">
                <v-select
                  v-model="bodyFont"
                  :items="fonts"
                  label="Body Font"
                  :color="theme.primary"
                />
              </v-col>
              <v-col cols="12">
                <v-slider
                  v-slot:append
                  v-model="fontBaseSize"
                  label="Font Base Size"
                  :color="theme.accent"
                  :min="8"
                  class="mt-4"
                >
                  <v-text-field
                    v-model="fontBaseSize"
                    class="pt-0"
                    hide-details
                    single-line
                    :rules="[(e) => !e || e > 7 || 'Invalid']"
                    type="number"
                    style="width: 60px; margin-top: -16px;"
                  />
                </v-slider>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Cards</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col>
                <v-row>
                  <v-col cols="6">
                    <v-checkbox v-model="cardOutlined" label="Outline" />
                  </v-col>
                  <v-col cols="6">
                    <v-checkbox v-model="cardHover" label="Hover" />
                  </v-col>
                  <v-col cols="12">
                    <v-slider
                      v-slot:append
                      v-model="cardElevation"
                      label="Elevation"
                      :color="theme.secondary"
                      :max="24"
                      :disabled="cardHover || cardOutlined"
                      class="mt-4"
                    >
                      <v-text-field
                        v-model="cardElevation"
                        class="pt-0"
                        hide-details
                        single-line
                        :rules="[(e) => !e || e < 25 || 'Invalid']"
                        type="number"
                        style="width: 60px; margin-top: -16px;"
                      />
                    </v-slider>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4">
                <span>Dark Color</span>
                <v-color-picker v-model="darkColor" class="my-2 mx-auto" />
              </v-col>
              <v-col cols="4">
                <span>Light Color</span>
                <v-color-picker v-model="lightColor" class="my-2 mx-auto" />
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Background</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col v-if="$vuetify.theme.isDark" cols="4">
                <div class="ta-center">Dark Theme Background Color</div>
                <v-color-picker v-model="darkBgColor" class="my-2 mx-auto" />
              </v-col>
              <v-col v-else cols="4">
                <div class="ta-center">Light Theme Background Color</div>
                <v-color-picker v-model="lightBgColor" class="my-2 mx-auto" />
              </v-col>
              <v-col cols="4">
                <div class="ta-center">Header Background Color</div>
                <v-color-picker v-model="headerColor" class="my-2 mx-auto" />
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>Colors</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row no-gutters>
              <v-col cols="12">
                <v-switch
                  v-model="$vuetify.theme.dark"
                  :color="theme.primary"
                  label="Dark Theme"
                />
              </v-col>
              <v-col
                class="ta-center"
                cols="4"
                :style="`color: ${theme.primary};`"
                >Primary {{ theme.primary }}</v-col
              >
              <v-col
                class="ta-center"
                cols="4"
                :style="`color: ${theme.secondary};`"
                >Secondary {{ theme.secondary }}</v-col
              >
              <v-col
                class="ta-center"
                cols="4"
                :style="`color: ${theme.accent};`"
                >Accent {{ theme.accent }}</v-col
              >
              <v-col cols="4">
                <v-color-picker
                  v-model="theme.primary"
                  class="my-2 mx-auto"
                  show-swatches
                  swatches-max-height="700px"
                />
              </v-col>
              <v-col cols="4">
                <v-color-picker
                  v-model="theme.secondary"
                  class="mx-auto"
                  show-swatches
                  swatches-max-height="700px"
                />
              </v-col>
              <v-col cols="4">
                <v-color-picker
                  v-model="theme.accent"
                  class="mx-auto"
                  show-swatches
                  swatches-max-height="700px"
                />
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
    <v-col>
      <div class="display-3">QMO Lab Heading 2</div>
      <div class="display-2">QMO Lab Heading 3</div>
      <div class="display-1">QMO Lab Heading 4</div>
      <div class="headline">headline</div>
      <div class="title">title</div>
      <div class="subtitle-1">subtitle-1</div>
      <div class="subtitle-2">subtitle-2</div>
      <div class="body-1">body-1</div>
      <div class="body-2">body-2</div>
      <div class="caption">caption</div>
      <div class="overline">overline</div>
      <div class="my-8">
        <v-card
          :elevation="cardOutlined || cardHover ? undefined : cardElevation"
          :outlined="cardOutlined"
          :hover="cardHover"
        >
          <v-row class="px-4">
            <v-col cols="1" style="min-width: 45px; width: 45px;">
              <v-avatar size="45" class="mt-4 mr-1">
                <StoreImage
                  width="45"
                  height="45"
                  sub-category="professors"
                  item-id="nathan"
                />
              </v-avatar>
            </v-col>
            <v-col>
              <v-card-title>
                <span class="title">Nathaniel Gabor</span>
              </v-card-title>
              <v-card-subtitle>
                <span>
                  JET Distinguished Associate Professor Of Physics
                </span>
              </v-card-subtitle>
            </v-col>
          </v-row>
          <v-card-text>
            <span><b>Research</b>: </span>
            <span class="font-weight-light">Light and Quantum Matter</span>
          </v-card-text>
        </v-card>
      </div>
      <div v-for="test in [true, false]" :key="test">
        <div v-for="(c, k) in ['primary', 'secondary', 'accent']" :key="k">
          <v-btn
            v-for="(item, i) in icons"
            :key="i"
            fab
            class="ma-2"
            small
            :color="test ? theme[c] : cardColor"
            :elevation="cardElevation"
          >
            <v-icon :color="test ? cardTextColor : theme[c]">{{ item }}</v-icon>
          </v-btn>
          <v-btn
            fab
            class="ma-2"
            small
            disabled
            :color="test ? theme[c] : cardColor"
            :elevation="cardElevation"
          >
            <v-icon :color="test ? cardTextColor : theme[c]">{{
              icons[Object.keys(icons)[0]]
            }}</v-icon>
          </v-btn>
          <v-btn
            fab
            class="ma-2"
            small
            to="/fonts/"
            :color="test ? theme[c] : cardColor"
            exact
            nuxt
            disabled
            :elevation="cardElevation"
          >
            <v-icon :color="test ? cardTextColor : theme[c]">{{
              icons[Object.keys(icons)[0]]
            }}</v-icon>
          </v-btn>
        </div>
      </div>
    </v-col>
    <v-col class="pa-4 body-1">
      <p>
        Quantum mechanics is a theoretical description of reality that has been
        used to understand numerous phenomena at atomic and subatomic scales. It
        is among the most successful scientific theories, exhibiting not one
        single contradiction in nearly a century since its inception. In the
        coming decades, the discovery of quantum phenomena in various scientific
        realms promises to revolutionize science, technology, and society. In
        biology, the quantum effects of photosynthesis are still being
        unraveled, while the miniaturization of integrated circuits forces us to
        confront quantum mechanics head-on. As scientists, we have a unique
        opportunity to explore quantum mechanics in the laboratory and unravel
        the bizarre and unintuitive behavior that emerges in atomic-scale
        systems.
      </p>
      <p class="font-weight-light">
        The QMO lab aims to discover new quantum phenomena in atomically thin
        two-dimensional (2D) electronic materials including graphene, hexagonal
        boron nitride, and layered transition metal dichalcogenides (TMDs).
        These materials, many of which can be separated into few or single
        atomic layers, exhibit quasi-low dimensionality that may lead to
        strongly correlated electron behavior. Among correlated electronic
        materials, true 2D materials provide the distinct advantage that they
        are one atom thick, thus allowing the utilization of techniques
        generally applied to small atomic ensembles, such as laser-cooling and
        optical cavity coupling. By incorporating these materials into nanoscale
        electronic devices, we envision a distinct field of research that
        explores atomically thin condensed matter systems using precision
        techniques and concepts employed in atomic, molecular, and optical
        physics.
      </p>
    </v-col>
  </v-row>
</template>

<script>
  import {
    mdiOpenInNew,
    mdiPageNext,
    mdiBookOpen,
    mdiMessage,
    mdiDatabase,
    mdiCodeBraces,
  } from '@mdi/js';
  import StoreImage from '@/components/StoreImage.vue';
  export default {
    components: { StoreImage },
    data() {
      const adobeFonts = [
        'acumin-pro',
        'acumin-pro-condensed',
        'acumin-pro-extra-condensed',
        'acumin-pro-semi-condensed',
        'acumin-pro-wide',
        'adaptive-mono',
        'aglet-slab',
        'alegreya',
        'alegreya-sc',
        'attribute-mono',
        'commuters-sans',
        'ff-avance-pro',
        'ff-basic-gothic-pro',
        'freight-big-pro',
        'freight-display-pro',
        'freight-macro-pro',
        'freight-micro-pro',
        'freightbigcmp-pro',
        'freightdispcmp-pro',
        'halyard-display',
        'halyard-micro',
        'halyard-text',
        'jaf-facitweb',
        'justus-pro',
        'league-gothic',
        'montserrat',
        'montserrat-alternates',
        'objektiv-mk1',
        'objektiv-mk2',
        'objektiv-mk3',
        'republic-web',
        'skolar-sans-latin',
        'skolar-sans-latin-compressed',
        'skolar-sans-latin-condensed',
        'skolar-sans-latin-extended',
        'tablet-gothic',
        'tablet-gothic-compressed',
        'tablet-gothic-condensed',
        'tablet-gothic-narrow',
        'tablet-gothic-semi-condensed',
        'tablet-gothic-wide',
      ];
      const googleFonts = [
        '"Open Sans"',
        'Lato',
        '"Noto Sans JP"',
        'Montserrat',
        '"Roboto Condensed"',
        '"Source Sans Pro"',
        'Oswald',
        'Raleway',
        '"Roboto Mono"',
        'Poppins',
        '"Noto Sans"',
        '"Roboto Slab"',
        'Merriweather',
        '"PT Sans"',
        '"Playfair Display"',
        'Muli',
        '"Open Sans Condensed"',
        '"Mukta"',
      ];
      return {
        googleFonts,
        adobeFonts,
        fonts: [
          {
            text: 'Cormorant Garamond',
            value: '"Cormorant Garamond"',
          },
          'Roboto',
          ...adobeFonts.map((e) => ({
            text: `Adobe: ${e.slice(0, 1).toUpperCase()}${e
              .slice(1)
              .replace('-', ' ')}`,
            value: e,
          })),
          ...googleFonts.map((e) => ({
            text: `Google: ${e[0] === '"' ? e.slice(1, -1) : e}`,
            value: e,
          })),
        ],
        bodyFont: 'Roboto',
        headingFont: '"Cormorant Garamond"',
        cardElevation: 2,
        cardOutlined: false,
        cardHover: false,
        fontBaseSize: 18,
        darkColor:
          (process.client &&
            !!document &&
            document.documentElement.style.getPropertyValue('--dark-color')) ||
          '#171717',
        headerColor:
          (process.client &&
            !!document &&
            document.documentElement.style.getPropertyValue(
              '--header-color'
            )) ||
          '#1c1c1c',
        lightColor:
          (process.client &&
            !!document &&
            document.documentElement.style.getPropertyValue('--light-color')) ||
          '#fff',
        darkBgColor:
          (process.client &&
            !!document &&
            document.documentElement.style.getPropertyValue(
              '--dark-bg-color'
            )) ||
          '#121212',
        lightBgColor:
          (process.client &&
            !!document &&
            document.documentElement.style.getPropertyValue(
              '--light-bg-color'
            )) ||
          '#fff',
        icons: {
          mdiOpenInNew,
          mdiPageNext,
          mdiBookOpen,
          mdiMessage,
          mdiDatabase,
          mdiCodeBraces,
        },
      };
    },
    computed: {
      cardColor() {
        return this.$vuetify.theme.isDark ? this.darkColor : this.lightColor;
      },
      cardTextColor() {
        return this.$vuetify.theme.isDark ? this.lightColor : this.darkColor;
      },
      theme() {
        return this.$vuetify.theme.themes[
          this.$vuetify.theme.isDark ? 'dark' : 'light'
        ];
      },
    },
    watch: {
      fontBaseSize() {
        if (document)
          document.documentElement.style.setProperty(
            '--font-size',
            `${this.fontBaseSize}px`
          );
      },
      headerColor() {
        if (document)
          document.documentElement.style.setProperty(
            '--header-color',
            this.headerColor
          );
      },
      darkColor() {
        if (document)
          document.documentElement.style.setProperty(
            '--dark-color',
            this.darkColor
          );
      },
      lightColor() {
        if (document)
          document.documentElement.style.setProperty(
            '--light-color',
            this.lightColor
          );
      },
      darkBgColor() {
        if (document)
          document.documentElement.style.setProperty(
            '--dark-bg-color',
            this.darkBgColor
          );
      },
      lightBgColor() {
        if (document)
          document.documentElement.style.setProperty(
            '--light-bg-color',
            this.lightBgColor
          );
      },
      headingFont() {
        if (document)
          document.documentElement.style.setProperty(
            '--font-heading',
            this.headingFont
          );
      },
      bodyFont() {
        if (document)
          document.documentElement.style.setProperty(
            '--font-body',
            this.bodyFont
          );
      },
    },
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Oswald:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Raleway:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Poppins:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Merriweather:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=PT+Sans:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Muli:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:100,300,400,500,700,900&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Mukta:100,300,400,500,700,900&display=swap');
  @import url('https://use.typekit.net/sjt5ago.css');

  :root {
    --dark-bg-color: #121212;
    --light-bg-color: #fff;
    --dark-color: #1a1a1a;
    --light-color: #fff;
    --header-color: #1f1f1f;
    --font-size: 18px;
    --font-heading: 'Cormorant Garamond';
    --font-body: 'Roboto';
  }
  html {
    font-size: var(--font-size) !important;
  }

  .v-application {
    font-family: var(--font-body) !important;
    &--wrap {
      .display-4,
      .display-3,
      .display-2,
      .display-1,
      .headline,
      .title {
        font-family: var(--font-heading) !important;
      }
      .subtitle-2,
      .subtitle-1,
      .body-2,
      .body-1,
      .caption,
      .overline {
        font-family: var(--font-body) !important;
      }
    }
  }

  .theme--light {
    &.v-application {
      background-color: var(--light-bg-color) !important;
    }
    &.v-expansion-panels .v-expansion-panel,
    &.v-card,
    &.v-sheet {
      background-color: var(--light-color) !important;
      color: var(--dark-color) !important;
    }
    &.v-card {
      & > &__text {
        color: var(--dark-color) !important;
        opacity: 0.7;
      }
      & &__subtitle,
      .body-2 {
        color: var(--dark-color) !important;
        opacity: 0.8;
      }
    }
  }
  .theme--dark {
    &.v-application {
      background-color: var(--dark-bg-color) !important;
    }
    &.v-expansion-panels .v-expansion-panel,
    &.v-card,
    &.v-sheet,
    &.v-navigation-drawer {
      background-color: var(--dark-color) !important;
      color: var(--light-color) !important;
    }
    &.v-card {
      & > .v-card__text {
        color: var(--light-color) !important;
        opacity: 0.7;
      }
      .v-card__subtitle,
      .body-2 {
        color: var(--light-color) !important;
        opacity: 0.8;
      }
    }
    &.v-app-bar.v-toolbar.v-sheet,
    .logoContainer .qmoLogo#spinner {
      background-color: var(--header-color) !important;
    }
  }
</style>
