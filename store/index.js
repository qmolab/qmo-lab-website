export const state = () => ({
  navLinks: {
    main: [
      {
        icon: 'mdi-home',
        title: 'Home',
        to: '/',
      },
      {
        icon: 'mdi-account-group',
        title: 'Members',
        to: '/members',
      },
      {
        icon: 'mdi-microscope',
        title: 'Research',
        to: '/research/',
      },
      {
        icon: 'mdi-atom-variant',
        title: 'Publications',
        to: '/publications/',
      },
      {
        icon: 'mdi-camera-iris',
        title: 'Gallery',
        to: '/gallery/',
      },
      {
        icon: 'mdi-link',
        title: 'Links',
        to: '/links',
      },
    ],
    hidden: [
      {
        icon: 'mdi-microscope',
        title: 'News Archive',
        to: '/news',
      },
    ],
    research: [
      {
        title: 'carrier multiplication',
        to: '/research/carrier_multiplication',
      },
      {
        title: 'electron-hole condensation',
        to: '/research/electron-hole_condensation',
      },
      {
        title: 'ultrafast optoelectronics',
        to: '/research/ultrafast_optoelectronics',
      },
      {
        title: 'atomic layer materials',
        to: '/research/atomic_layer_materials',
      },
      {
        title: 'natural regulation',
        to: '/research/natural_regulation',
      },
    ],
  },
  heroSlides: [
    {
      src: require('~/assets/images/hero_carousel/jackyGloveBox2.jpg?resize&quality=55&format=jpg&size=1920'),
      lazy: require('~/assets/images/hero_carousel/jackyGloveBox2.jpg?lqip'),
      alt: 'Routine Lab Work Poster',
      title: 'learn more about research projects in the QMO Labs',
    },
    {
      src: require('~/assets/images/hero_carousel/e-h liquid banner 2.png?resize&quality=55&format=jpg&size=1920'),
      lazy: require('~/assets/images/hero_carousel/e-h liquid banner 2.png?lqip'),
      alt: 'Electron Hole Liquid',
      title:
        'exotic droplets: atomic layers can host novel electron-hole liquid ',
    },
    {
      src: require('~/assets/images/hero_carousel/graphene cool low dof hd cropped.png?resize&quality=55&format=jpg&size=1920'),
      lazy: require('~/assets/images/hero_carousel/graphene cool low dof hd cropped.png?lqip'),
      alt: 'Clean Graphene Sheets',
      title:
        'clean sheets: giant photocurrents manifest in pristine graphene layers ',
    },
    {
      src: require('~/assets/images/hero_carousel/green.jpg?resize&quality=55&format=jpg&size=1920'),
      lazy: require('~/assets/images/hero_carousel/green.jpg?lqip'),
      alt: 'Photosynthesis Poster',
      title:
        'green machines: quantum photocells naturally regulate internal energy flows',
    },
  ],
  gallery: {
    youtubePlayer: {
      host: 'https://www.youtube-nocookie.com', // Can be set to https://www.youtube-nocookie.com
    },
  },
  eager: false,
  imageTransition: 'fade-transition',
});
