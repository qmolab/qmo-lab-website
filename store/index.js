export const state = () => ({
  imageTransition: 'fade-transition',
  usesHeroSlider: {
    index: true,
    links: true,
    tour: true,
    'potential students': true,
    contact: true,
  },
  navLinks: {
    home: {
      icon: 'mdi-home',
      title: 'Home',
      to: '/',
    },
    members: {
      icon: 'mdi-account-group',
      title: 'Members',
      to: '/members/',
      sub: {
        theses: {
          title: 'Theses',
          to: '/members/theses/',
        },
      },
    },
    research: {
      icon: 'mdi-alpha-r-circle',
      title: 'Research',
      to: '/research/',
      sub: {
        posters: {
          title: 'Posters',
          to: '/research/posters/',
        },
      },
    },
    publications: {
      icon: 'mdi-alpha-p-circle',
      title: 'Publications',
      to: '/publications/',
    },
    gallery: {
      icon: 'mdi-camera-iris',
      title: 'Gallery',
      to: '/gallery/',
    },
    links: {
      icon: 'mdi-link',
      title: 'Links',
      to: '/links/',
    },
  },
});

export const mutations = {
  addToNavLinks(state, { parent, payload }) {
    state.navLinks[parent].sub = payload;
  },
  nuxtServerInit({ commit }, { req }) {},
};
