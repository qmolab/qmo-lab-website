import {
  mdiHome,
  mdiAlphaRCircle,
  mdiAlphaPCircle,
  mdiAccountGroup,
  mdiCameraIris,
  mdiLink,
} from '@mdi/js';

export const state = () => ({
  imageTransition: 'fade-transition',
  usesHeroSlider: {
    index: true,
    links: true,
    tour: true,
    'potential students': true,
    contact: true,
    resources: true,
    safety: true,
  },
  navLinks: {
    home: {
      icon: mdiHome,
      title: 'Home',
      to: '/',
    },
    members: {
      icon: mdiAccountGroup,
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
      icon: mdiAlphaRCircle,
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
      icon: mdiAlphaPCircle,
      title: 'Publications',
      to: '/publications/',
    },
    gallery: {
      icon: mdiCameraIris,
      title: 'Gallery',
      to: '/gallery/',
    },
    links: {
      icon: mdiLink,
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
