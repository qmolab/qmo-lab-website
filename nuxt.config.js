// import colors from 'vuetify/es5/util/colors';

const modules = [];
let modern = false;
if (process.env.NODE_ENV === 'production') {
  // Doc: https://github.com/Developmint/nuxt-webfontloader
  modules.push('nuxt-webfontloader');
  modern = 'client';
}

const primary = '#d094ff';
const accent = '#9900ff';
const secondary = '#9b94ff';
const info = '#26A69A';
const warning = '#FFC107';
const error = '#DD2C00';
const success = '#00E676';
const backgroundColor = '#121212';

const imageQuality = 0.65;

export default {
  mode: 'universal',
  modern,
  /*
   ** Headers of the page
   */
  // modern: 'client',
  pageTransition: 'fade',
  layoutTransition: 'fade',
  head: {
    titleTemplate: '%s -  QMO Lab',
    title: process.env.npm_package_name || '',
    meta: [
      { name: 'HandheldFriendly', content: 'true' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'qmo lab, physics, quantum materials, condensed matter physics, nathan gabor, nathaniel gabor, gabor Lab, ucr physics, optoelectronics, ucr lab, graphene, nanotubes, physics',
      },
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    ],
  },
  router: {
    base: process.env.NODE_ENV !== 'production' ? '/' : '/node/',
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: primary },
  /*
   ** Global CSS
   */
  css: ['~/assets/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/vuetify-module
    '@bazzite/nuxt-optimized-images',
    // Doc: https://github.com/DreaMinder/nuxt-payload-extractor
    '@nuxtjs/vuetify',
    // Doc: https://pwa.nuxtjs.org/setup.html
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // Doc: https://www.bazzite.com/docs/nuxt-optimized-images
    'nuxt-payload-extractor',
    // Doc: https://github.com/robcresswell/nuxt-compress
    'nuxt-compress',
    // Doc: https://github.com/nuxt-community/webpackmonitor-module
    '@nuxtjs/webpackmonitor',
  ],
  /*
   ** Nuxt.js modules
   */
  modules,
  /*
   ** Webfontloader options
   */
  webfontloader: {
    google: {
      families: [], // Loads Lato font with weights 400 and 700
    },
  },
  /*
   ** Internal optimizeCSS module options
   ** https://github.com/NMFR/optimize-css-assets-webpack-plugin
   */
  optimizeCSS: {
    assetNameRegExp: /\.optimize\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorPluginOptions: {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
    canPrint: true,
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: { family: 'Roboto' },
      icons: false,
    },
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
  /*
   ** @bazzite/nuxt-optimized-images module configuration
   ** https://www.bazzite.com/docs/nuxt-optimized-images/configuration/
   ** https://www.bazzite.com/docs/nuxt-optimized-images/example/
   */
  optimizedImages: {
    /* optimized Images options */
    inlineImageLimit: 100,
    responsive: {
      size: 300,
      sizes: [200, 300],
      format: 'jpg',
      quality: imageQuality,
      placeholder: true,
      placeholderSize: 10,
    },
    webp: {
      preset: 'default',
      quality: imageQuality,
      size: 15000,
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
    },
    /*
     ** brotli plugin for webpack module configuration
     ** https://github.com/mynameiswhm/brotli-webpack-plugin
     */
    brotli: {
      threshold: 10240,
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
    workbox: {
      /* Workbox options */
    },
    /*
     ** meta module configuration
     ** https://pwa.nuxtjs.org/modules/meta.html#options
     */
    meta: {
      /* meta options */
      theme_color: primary,
    },
    /*
     ** icon module configuration
     ** https://pwa.nuxtjs.org/modules/icon.html#options
     */
    icon: {
      /* icon options */
    },
    /*
     ** manifest module configuration
     ** https://pwa.nuxtjs.org/modules/manifest.html#options
     */
    manifest: {
      /* manifest options */
      background_color: backgroundColor,
      theme_color: primary,
      display: 'browser',
    },
  },
  /*
   ** nuxt-sitemap module configuration
   ** https://github.com/nuxt-community/sitemap-module
   */
  sitemap: {
    // sitemap configuration
    hostname: 'https://qmolab.ucr.edu/node/',
  },
  /*
   ** Build configuration
   ** https://nuxtjs.org/api/configuration-build
   */
  build: {
    extractCSS: true,
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
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
