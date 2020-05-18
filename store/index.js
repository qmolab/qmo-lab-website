import {
  mdiHome,
  mdiMicroscope,
  mdiAccountGroup,
  mdiAtomVariant,
  mdiCameraIris,
  mdiLink,
} from '@mdi/js';

export const state = () => ({
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
  },
});
