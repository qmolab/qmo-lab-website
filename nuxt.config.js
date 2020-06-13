// import colors from 'vuetify/es5/util/colors';
import axios from 'axios';
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

require('dotenv').config();
// Doc: https://axios.nuxtjs.org/usage.html
const modules = ['@nuxtjs/axios'];
let modern = false;
let base = '/';
let baseUrl = 'http://localhost:3000';
if (process.env.NODE_ENV === 'production') {
  modern = 'client';
  base = process.env.ROUTER_BASE;
  baseUrl = process.env.SITE_BASE + process.env.ROUTER_BASE;
}

const imageQuality = 0.85;

async function getRoute(table, routeBase, idColumn) {
  const res = await axios.get(process.env.API_BASE + table);
  return res.data.map((item) => {
    return {
      route: routeBase + item[idColumn].replace(/ /g, '_').toLowerCase(),
      payload: Object.keys(item).length === 1 ? undefined : item,
    };
  });
}

export default {
  vue: {
    config: {
      performance: process.env.NODE_ENV !== 'production', // you probably should detect dev mode here
    },
  },
  /*
   ** Nuxt mode property (one of spa or universal)
   ** https://nuxtjs.org/api/configuration-mode/
   */
  mode: 'universal',

  /*
   ** Nuxt modern property
   ** https://nuxtjs.org/api/configuration-modern/
   */
  modern,

  modules, // Nuxt.js modules (defined at top level)

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
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
    // Doc: https://github.com/DreaMinder/nuxt-payload-extractor
    // ['nuxt-payload-extractor', { blacklist: [] }],
    // Doc: https://pwa.nuxtjs.org/setup.html
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // Doc: https://github.com/nuxt-community/webpackmonitor-module
    // '@nuxtjs/webpackmonitor',
    // Doc: https://github.com/robcresswell/nuxt-compress
    'nuxt-compress',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/vue-pdf',
      ssr: false,
    },
  ],

  /*
   ** Router.base is required if app is running in subfolder
   ** https://nuxtjs.org/api/configuration-router/
   ** Guide: https://nuxtjs.org/guide/routing/
   */
  router: { base },

  /*
   ** Injects contents into process.env for client-side
   ** https://nuxtjs.org/api/configuration-env
   */
  env: { baseUrl },

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

  /*
   ** Default Head Meta Items
   ** https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: 'QMO Lab %s',
    title: '',
    meta: [
      { name: 'HandheldFriendly', content: 'true' },
      {
        hid: 'description',
        name: 'description',
        content: `QMO Lab is a leader in optoelectronic investigations of novel quantum materials.`,
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: `qmo lab, physics, quantum materials, condensed matter physics, nathan gabor, nathaniel gabor, gabor Lab, ucr physics, optoelectronics, ucr lab, graphene, nanotubes, physics`,
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
   ** @nuxtjs/axios module configuration
   ** https://axios.nuxtjs.org/options.html
   */
  axios: { baseURL: process.env.API_BASE },

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    defaultAssets: {
      font: false,
      // icons: false,
    },
    /* icons: {
      values: MY_ICONS,
    }, */
    treeShake: true,
    theme: {
      dark: true,
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
      placeholder: false,
      placeholderSize: 7,
    },
    webp: {
      preset: 'default',
      quality: imageQuality,
    },
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
    gzip: {
      cache: true,
      test: /\.(js|css|svg)$/,
    },
    /*
     ** brotli plugin for webpack module configuration
     ** https://github.com/mynameiswhm/brotli-webpack-plugin
     */
    brotli: {
      threshold: 0,
      test: /\.(js|css|svg)$/,
    },
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

  /*
   ** Build configuration
   ** https://nuxtjs.org/api/configuration-build
   */
  build: {
    transpile: ['vue-pdf'],
    terser: { extractComments: 'NODE_LICENSES' /* default was LICENSES */ },
    // extractCSS: true,
    /*
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(s?css|sass|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    }, */

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // config.output.globalObject = 'this';
      config.module.rules.push({
        test: /\.pdf$/,
        loader: 'url-loader',
      });
    },
  },

  /*
   ** Generate configuration
   ** https://nuxtjs.org/api/configuration-generate/
   ** Guide: https://nuxtjs.org/guide/routing/
   */
  generate: {
    async routes() {
      const theses = await getRoute(
        '/theses/routes/',
        '/members/theses/',
        'author'
      );
      const research = await getRoute(
        '/research/routes/',
        '/research/',
        'title'
      );
      return [...theses, ...research];
    },
  },
};
