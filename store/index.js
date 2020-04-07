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
      src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
  ],
});
