import colors from 'vuetify/es5/util/colors';

export default {
  mode: 'universal',
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
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#85a' },
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
    '@nuxtjs/vuetify',
    // Doc: https://www.bazzite.com/docs/nuxt-optimized-images
    '@bazzite/nuxt-optimized-images',
    // Doc: https://github.com/DreaMinder/nuxt-payload-extractor
    'nuxt-payload-extractor',
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    // 'nuxt-webfontloader',
    // Doc: https://pwa.nuxtjs.org/setup.html
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // Doc: https://github.com/robcresswell/nuxt-compress
    'nuxt-compress',
    // Doc: https://github.com/nuxt-community/webpackmonitor-module
    '@nuxtjs/webpackmonitor',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
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
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#d094ff',
          accent: '#9900ff',
          secondary: '#9b94ff',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
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
      /* workbox options */
    },
    /*
     ** meta module configuration
     ** https://pwa.nuxtjs.org/modules/meta.html#options
     */
    meta: {
      /* meta options */
      theme_color: '#85a',
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
      background_color: '#121212',
      theme_color: '#85a',
      display: 'browser',
    },
  },
  /*
   ** nuxt-sitemap module configuration
   ** https://github.com/nuxt-community/sitemap-module
   */
  sitemap: {
    // sitemap configuration
    hostname: 'http://localhost/',
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
