import colors from 'vuetify/es5/util/colors';

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'HandheldFriendly', content: 'true' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  scss: [],
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
    // Doc: https://github.com/Developmint/nuxt-bundle-buddy
    // 'nuxt-bundle-buddy',
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    // 'nuxt-webfontloader',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://pwa.nuxtjs.org/setup.html
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/webpackmonitor-module
    '@nuxtjs/webpackmonitor',
    // Doc: https://github.com/robcresswell/nuxt-compress
    'nuxt-compress',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
  ],
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
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#85a',
          accent: colors.grey.darken3,
          secondary: '#3678d0',
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
    },
  },
  /*
   ** nuxt-sitemap module configuration
   ** https://github.com/nuxt-community/sitemap-module
   */
  sitemap: {
    // sitemap configuration
    hostname: 'https://qmolab.ucr.edu',
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
            test: /\.(s?css|vue)$/,
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
