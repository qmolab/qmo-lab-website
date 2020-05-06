import {
  mdiHome,
  mdiMicroscope,
  mdiAccountGroup,
  mdiAtomVariant,
  mdiCameraIris,
  mdiLink,
  mdiNewspaper,
} from '@mdi/js';
import customRoutes from '~/assets/script/customRoutes';

export const state = () => ({
  theme: 'dark',
  eager: false,
  imageTransition: 'fade-transition',
  navLinks: {
    main: [
      {
        icon: mdiHome,
        title: 'Home',
        to: '/',
      },
      {
        icon: mdiAccountGroup,
        title: 'Members',
        to: '/members/',
      },
      {
        icon: mdiMicroscope,
        title: 'Research',
        to: '/research/',
      },
      {
        icon: mdiAtomVariant,
        title: 'Publications',
        to: '/publications/',
      },
      {
        icon: mdiCameraIris,
        title: 'Gallery',
        to: '/gallery/',
      },
      {
        icon: mdiLink,
        title: 'Links',
        to: '/links/',
      },
    ],
    hidden: [
      {
        icon: mdiNewspaper,
        title: 'News Archive',
        to: '/news/',
      },
    ],
    ...customRoutes,
  },
});

export const mutations = {
  toggleTheme(state) {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
  },
  lightTheme(state) {
    state.theme = 'light';
  },
  darkTheme(state) {
    state.theme = 'dark';
  },
};
