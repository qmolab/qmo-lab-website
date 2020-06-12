import {
  mdiHome,
  mdiAlphaRCircle,
  mdiAlphaPCircle,
  mdiAccountGroup,
  mdiCameraIris,
  mdiLink,
  mdiMessageArrowRight,
  mdiPresentation,
  mdiInformationVariant,
  mdiSafetyGoggles,
  mdiScriptText,
  mdiCodeTags,
  mdiDatabase,
  mdiBus,
  mdiFilePresentationBox,
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
  resourceLinks: {
    customize: {
      title: 'Customize Appearance',
      to: '/fonts/',
    },
    resources: {
      title: 'Resources',
      to: '/resources/',
      sub: {
        software: {
          title: 'Lab Software',
          to: '/resources/software/',
          icon: mdiCodeTags,
          iconColor: 'secondary',
        },
        data: {
          title: 'Lab Data',
          to: '/resources/data/',
          icon: mdiDatabase,
          iconColor: 'accent',
        },
        theses: {
          title: 'Student Theses',
          to: '/members/theses/',
          icon: mdiScriptText,
          iconColor: 'blue-grey',
        },
        presentations: {
          title: 'Presentations',
          to: '/resources/presentations/',
          icon: mdiPresentation,
          iconColor: 'red',
        },
        posters: {
          title: 'Research Posters',
          to: '/research/posters/',
          icon: mdiFilePresentationBox,
          iconColor: 'cyan',
        },
        tour: {
          title: 'Tours',
          to: '/resources/contact/tour/',
          icon: mdiBus,
          iconColor: 'yellow',
        },
        potential_students: {
          title: 'Information for Potential Students',
          to: '/resources/contact/potential_students/',
          icon: mdiInformationVariant,
          iconColor: 'orange',
        },
        contact: {
          title: 'Contact the QMO Lab',
          to: '/resources/contact/',
          icon: mdiMessageArrowRight,
          iconColor: 'primary',
        },
        safety: {
          title: 'Lab Safety',
          to: '/resources/safety/',
          icon: mdiSafetyGoggles,
          iconColor: 'green',
        },
        privacy: {
          title: 'Privacy Policy',
          to: '/resources/privacy/',
        },
      },
    },
  },
});

export const mutations = {
  addToNavLinks(state, { parent, payload }) {
    state.navLinks[parent].sub = payload;
  },
  nuxtServerInit({ commit }, { req }) {},
};
