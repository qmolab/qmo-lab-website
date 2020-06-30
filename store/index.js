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
      icon: '$mdiHome',
      title: 'Home',
      to: '/',
    },
    members: {
      icon: '$membersPage',
      title: 'Members',
      to: '/members/',
    },
    research: {
      icon: '$researchPage',
      title: 'Research',
      to: '/research/',
      sub: {
        posters: {
          icon: '$postersPage',
          title: 'Posters',
          to: '/posters/',
        },
      },
    },
    publications: {
      icon: '$publicationsPage',
      title: 'Publications',
      to: '/publications/',
    },
    gallery: {
      icon: '$galleryPage',
      title: 'Gallery',
      to: '/gallery/',
    },
    /* theses: {
      icon: '$thesesPage',
      title: 'Student Theses',
      to: '/theses/',
    }, */
    links: {
      icon: '$linksPage',
      title: 'Links',
      to: '/links/',
    },
  },
  currentPageTitle: '',
  hero_images: [],
});

export const mutations = {
  addToNavLinks(state, { parent, payload }) {
    state.navLinks[parent].sub = payload;
  },
  pageTitle(state, payload) {
    state.currentPageTitle = payload;
  },
  heroImages(state, payload) {
    state.hero_images = payload;
  },
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('storeDispatchFunc');
  },
  async storeDispatchFunc({ commit }) {
    const { data } = await this.$axios.get('/hero/');
    commit('heroImages', data);
  },
};
