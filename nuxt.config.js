// import colors from 'vuetify/es5/util/colors';
import minifyTheme from 'minify-css-string';
import {
  primary,
  accent,
  secondary,
  info,
  warning,
  error,
  success,
  backgroundColor,
} from './assets/scss/colors';
import { MY_ICONS } from './assets/js/icons';

require('dotenv').config();
let modern = false;
let base = '/';
let baseUrl = 'http://localhost:3000';
if (process.env.NODE_ENV === 'production') {
  modern = 'client';
  base = process.env.ROUTER_BASE;
  baseUrl = process.env.SITE_BASE + process.env.ROUTER_BASE;
}

const imageQuality = 0.7;

export default {
  mode: 'universal',
  target: 'static',
  modern,

  modules: ['@nuxtjs/axios', 'nuxt-webfontloader'],
  buildModules: [
    'nuxt-polyfill',
    'nuxt-vuex-localstorage',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://www.bazzite.com/docs/nuxt-optimized-images
    '@bazzite/nuxt-optimized-images',
    // Doc: https://github.com/nuxt-community/vuetify-module
    '@nuxtjs/vuetify',
    // Doc: https://www.npmjs.com/package/vue-social-sharing
    'vue-social-sharing/nuxt',
    // Doc https://github.com/nuxt-community/analytics-module#readme
    '@nuxtjs/google-analytics',
    // Doc: https://pwa.nuxtjs.org/setup.html
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // Doc: https://github.com/robcresswell/nuxt-compress
    'nuxt-compress',
  ],
  plugins: [{ src: '~/plugins/dynamicText' }],

  /*
   ** Injects contents into process.env for client-side
   ** https://nuxtjs.org/api/configuration-env
   */
  env: { baseUrl },

  /*
   ** Router.base is required if app is running in subfolder
   ** https://nuxtjs.org/api/configuration-router/
   ** Guide: https://nuxtjs.org/guide/routing/
   */
  router: { base },

  /*
   ** @nuxtjs/axios module configuration
   ** https://axios.nuxtjs.org/options.html
   */
  axios: { baseURL: process.env.API_BASE },

  /*
   ** Nuxt - Google Analytics module
   */
  googleAnalytics: { id: process.env.GA_ID },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: primary },

  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main.scss'],

  /*
   ** Page transions improve user navigation
   ** Accepts a vue transition class name
   ** https://nuxtjs.org/api/configuration-transition
   */
  pageTransition: 'fade',
  layoutTransition: 'fade',

  webfontloader: {
    // add Google Fonts as "custom" | workaround required
    custom: {
      families: ['Roboto:n4,n5,n7,n9', 'Roboto Condensed:n1,n3,n4,n5'],
      urls: [
        // for each Google Fonts add url + options you want
        // here add font-display option
        'https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap',
        'https://fonts.googleapis.com/css?family=Roboto+Condensed:100,300,400,500&display=swap',
      ],
    },
  },

  /*
   ** Default Head Meta Items
   ** https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: 'QMO Lab %s',
    title: '',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `QMO Lab is a leader in optoelectronic investigations of novel quantum materials.`,
      },
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://cdn.jsdelivr.net',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
        crossorigin: 'anonymous',
      },
    ],
  },

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    defaultAssets: { font: false, icons: false },
    icons: { values: MY_ICONS },
    treeShake: true,
    theme: {
      dark: true,
      options: {
        // variations: false,
        minifyTheme,
        themeCache: {
          get: (key) => process.client && localStorage.getItem(key),
          set: (key, value) =>
            process.client && localStorage.setItem(key, value),
        },
      },
      themes: {
        dark: {
          primary,
          accent,
          secondary,
          info,
          warning,
          error,
          success,
        },
      },
    },
  },

  optimizeCSS: {
    assetNameRegExp: /\.optimize\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorPluginOptions: {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
    canPrint: true,
  },

  /*
   ** @bazzite/nuxt-optimized-images module configuration
   ** https://www.bazzite.com/docs/nuxt-optimized-images/configuration/
   ** https://www.bazzite.com/docs/nuxt-optimized-images/example/
   */
  optimizedImages: {
    inlineImageLimit: 500,
    responsive: {
      size: 450,
      format: 'jpg',
      quality: imageQuality,
      placeholder: true,
      placeholderSize: 6,
    },
    webp: { preset: 'default', quality: imageQuality },
    pngquant: [0.3, 0.5],
  },

  /*
   ** nuxt-compress module configuration
   ** https://github.com/robcresswell/nuxt-compress
   */
  'nuxt-compress': {
    /*
     ** compression-webpack-plugin module configuration
     ** https://github.com/webpack-contrib/compression-webpack-plugin
     */
    gzip: { cache: true, test: /\.(js|css|svg)$/ },
    /*
     ** brotli plugin for webpack module configuration
     ** https://github.com/mynameiswhm/brotli-webpack-plugin
     */
    brotli: { threshold: 0, test: /\.(js|css|svg)$/ },
  },

  /*
   ** nuxt-pwa module configuration
   ** https://pwa.nuxtjs.org/setup.html
   */
  pwa: {
    /*
     ** workbox module configuration
     ** https://pwa.nuxtjs.org/modules/workbox.html#options
     */
    workbox: {},
    /*
     ** meta module configuration
     ** https://pwa.nuxtjs.org/modules/meta.html#options
     */
    meta: { theme_color: primary },
    /*
     ** icon module configuration
     ** https://pwa.nuxtjs.org/modules/icon.html#options
     */
    icon: {},
    /*
     ** manifest module configuration
     ** https://pwa.nuxtjs.org/modules/manifest.html#options
     */
    manifest: {
      background_color: backgroundColor,
      theme_color: primary,
      display: 'browser',
    },
  },

  /*
   ** nuxt-sitemap module configuration
   ** https://github.com/nuxt-community/sitemap-module
   */
  sitemap: { hostname: baseUrl },

  // Configure polyfills:
  polyfill: {
    features: [
      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window,
      },
      {
        require: 'localstorage-polyfill',
        detect: () => typeof localStorage !== 'undefined',
      },
    ],
  },

  /*
   ** Build configuration
   ** https://nuxtjs.org/api/configuration-build
   */
  build: {
    transpile: ['vuetify', 'nuxt-vuex-localstorage'],
    // analyze: true,
  },
  /* vue: {
    config: { performance: process.env.NODE_ENV !== 'production' },
  }, */
};
