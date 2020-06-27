<template>
  <div class="galleryPage">
    <v-btn
      x-large
      text
      class="my-2"
      href="https://www.youtube.com/channel/UCJdmhoGpcmAFzVx9PolvBOA"
    >
      <span>QMO YouTube Channel</span>
      <v-icon right color="secondary">{{ mdiYoutubeSubscription }}</v-icon>
    </v-btn>
    <VideoGallery :videos="videos" />
    <ImageGallery :gallery-images="galleryImages" />
  </div>
</template>

<script>
  import { mdiYoutubeSubscription } from '@mdi/js';
  import ImageGallery from '@/components/ImageGallery';
  import VideoGallery from '@/components/VideoGallery';
  import headAndTitle from '@/assets/js/headAndTitle';

  export default {
    name: 'GalleryView',
    components: {
      ImageGallery,
      VideoGallery,
    },
    data() {
      return {
        galleryImages: [
          {
            title: 'Around the Lab',
            index: null,
            images: [
              {
                href: require('~/assets/images/gallery/blue.png'),
                thumbnail: require('~/assets/images/gallery/blue.png?resize&placeholder=true'),
                title: `Nonlinear response in our OPO laser means it can turn a red laser into a brilliant blue`,
              },
              {
                href: require('~/assets/images/gallery/laserlevel.png'),
                thumbnail: require('~/assets/images/gallery/laserlevel.png?resize&placeholder=true'),
                title: 'For safety, leave the laser level for cameras only',
              },
              {
                href: require('~/assets/images/gallery/lasers.png'),
                thumbnail: require('~/assets/images/gallery/lasers.png?resize&placeholder=true'),
                title: `The QMO Lab's original laser bank: A titanium-sapphire laser pumps an OPO laser cavity`,
              },
              {
                href: require('~/assets/images/gallery/maxside.png'),
                thumbnail: require('~/assets/images/gallery/maxside.png?resize&placeholder=true'),
                title: `The QMO Lab 'microscopes' use a series of optics to scan a laser beam across samples, measuring point-by-point`,
              },
              {
                href: require('~/assets/images/gallery/photodetector.jpg'),
                thumbnail: require('~/assets/images/gallery/photodetector.jpg?resize&placeholder=true'),
                title: `Featured in Nature Nanotechnology, this photodetector is one thousand times thinner than a human hair`,
              },
              {
                href: require('~/assets/images/gallery/cryostat2.jpg'),
                thumbnail: require('~/assets/images/gallery/cryostat2.jpg?resize&placeholder=true'),
                title: `A wired-up sample sits in our optical cryostat, waiting to be measured`,
              },
              {
                href: require('~/assets/images/gallery/poster.png'),
                thumbnail: require('~/assets/images/gallery/poster.png?resize&placeholder=true'),
                title: `Max and Fatemeh present their work at the 2nd Annual SHINES Symposium`,
              },
              {
                href: require('~/assets/images/gallery/F_and_D_dice.png'),
                thumbnail: require('~/assets/images/gallery/F_and_D_dice.png?resize&placeholder=true'),
                title: `The first two PhDs from the QMO Lab, Fatemeh and Dennis!`,
              },
              {
                href: require('~/assets/images/gallery/atwork.png'),
                thumbnail: require('~/assets/images/gallery/atwork.png?resize&placeholder=true'),
                title: `Working in a laser lab can invite comparisons to H.G. Well's Morlocks`,
              },
              {
                href: require('~/assets/images/gallery/mad_scientists.png'),
                thumbnail: require('~/assets/images/gallery/mad_scientists.png?resize&placeholder=true'),
                title: `The most successful experiments are performed in a lightning storm at the stroke of midnight`,
              },
              {
                href: require('~/assets/images/gallery/spectrum.png'),
                thumbnail: require('~/assets/images/gallery/spectrum.png?resize&placeholder=true'),
                title: `White light passed through a monochromator casts a beautiful rainbow on the QMO Lab logo`,
              },
            ],
          },
          {
            title: 'Group Photos',
            index: null,
            images: [
              {
                href: require('~/assets/images/gallery/oakglen/oakglen_group.jpg'),
                thumbnail: require('~/assets/images/gallery/oakglen/oakglen_group.jpg?resize&placeholder=true'),
                title: 'QMO Lab at Oak Glen 2018',
              },
              {
                href: require('~/assets/images/gallery/aps_2018_monkey.jpg'),
                thumbnail: require('~/assets/images/gallery/aps_2018_monkey.jpg?resize&placeholder=true'),
                title: 'QMO Lab at APS March Meeting 2018',
              },
              {
                href: require('~/assets/images/gallery/oakglen/oakglen_climb.jpg'),
                thumbnail: require('~/assets/images/gallery/oakglen/oakglen_climb.jpg?resize&placeholder=true'),
                title:
                  'OAK GLEN GROUP HIKE 2018: Hiking towards Preservation Point',
              },
              {
                href: require('~/assets/images/gallery/oakglen/oakglen_jed.jpg'),
                thumbnail: require('~/assets/images/gallery/oakglen/oakglen_jed.jpg?resize&placeholder=true'),
                title: 'OAK GLEN GROUP HIKE 2018: Taking in the view',
              },
              {
                href: require('~/assets/images/gallery/oakglen/oakglen_descent.jpg'),
                thumbnail: require('~/assets/images/gallery/oakglen/oakglen_descent.jpg?resize&placeholder=true'),
                title: 'OAK GLEN GROUP HIKE 2018: Descending to the valleys',
              },
              {
                href: require('~/assets/images/gallery/stairs_2016.jpg'),
                thumbnail: require('~/assets/images/gallery/stairs_2016.jpg?resize&placeholder=true'),
                title: 'TORREY PINES GROUP HIKE 2016: Scenic Torrey Pines',
              },
              {
                href: require('~/assets/images/gallery/group_2016.jpg'),
                thumbnail: require('~/assets/images/gallery/group_2016.jpg?resize&placeholder=true'),
                title: 'TORREY PINES GROUP HIKE 2016: The group in 2016',
              },
              {
                href: require('~/assets/images/gallery/mufasa_2016.png'),
                thumbnail: require('~/assets/images/gallery/mufasa_2016.png?resize&placeholder=true'),
                title:
                  'TORREY PINES GROUP HIKE 2016: Professor Gabor is always with the group in spirit',
              },
            ],
          },
        ],
        videos: [
          {
            src: 'sOrFEvEbZMQ',
            title: `Optimally spaced pairs of off-center absorption peaks can maximize photosynthetic output in the face of external noise.`,
          },
          { src: 'iOqmUeZVA0Q', title: 'The electron-hole liquid in MoTe2' },
          {
            src: 'aVY4od4mfnA',
            title: `Twisted graphene layers pave path for unprecedented quantum control`,
          },
          {
            src: 'f6CjReJumHA',
            title: `Physicists Show How Tiny Photosensors Can Double Their Efficiency`,
          },
          {
            src: 'm3KhuLkpTAA',
            title: `'Spin'-tronics: The Next Generation of Computing (UCR Grad Slam 2018 First Runner-Up)`,
          },
          {
            src: 'YEyQ1vrFAS8',
            title: `Bicep curls with 100kg weights? The physics behind a world record!`,
          },
          {
            src: 'Q9CyY_0uLJs',
            title: `Carrier multiplication in 2D materials`,
          },
        ],
        mdiYoutubeSubscription,
      };
    },
    ...headAndTitle(
      'Gallery',
      'gallery/',
      'QMO Lab Gallery: Quantum Materials Optoelectronics @ UCR'
    ),
  };
</script>
