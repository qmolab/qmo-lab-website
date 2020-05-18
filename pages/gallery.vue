<template>
  <v-container class="galleryPage">
    <h1 class="hidden-sm-and-down">QMO Lab Gallery</h1>
    <v-btn
      x-large
      text
      class="my-2"
      href="https://www.youtube.com/channel/UCJdmhoGpcmAFzVx9PolvBOA"
    >
      QMO YouTube Channel
    </v-btn>
    <VideoGallery :videos="videos" />
    <ImageGallery :gallery-images="galleryImages" />
  </v-container>
</template>

<script>
  import VideoGallery from '@/components/VideoGallery';
  import ImageGallery from '@/components/ImageGallery';

  export default {
    name: 'GalleryView',
    components: {
      VideoGallery,
      ImageGallery,
    },
    data() {
      return {
        galleryImages: [
          {
            title: 'Lab Gallery',
            index: null,
            images: [
              {
                href: require('~/assets/images/gallery/blue.png'),
                thumbnail: require('~/assets/images/gallery/blue.png?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/blue.png?webp'),
                title:
                  'Nonlinear response in our OPO laser means it can turn a red laser into a brilliant blue',
              },
              {
                href: require('~/assets/images/gallery/laserlevel.png'),
                thumbnail: require('~/assets/images/gallery/laserlevel.png?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/laserlevel.png?webp'),
                title: 'For safety, leave the laser level for cameras only',
              },
              {
                href: require('~/assets/images/gallery/lasers.png'),
                thumbnail: require('~/assets/images/gallery/lasers.png?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/lasers.png?webp'),
                title:
                  "The QMO Lab's original laser bank: A titanium-sapphire laser pumps an OPO laser cavity",
              },
              {
                href: require('~/assets/images/gallery/maxside.png'),
                thumbnail: require('~/assets/images/gallery/maxside.png?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/maxside.png?webp'),
                title:
                  "The QMO Lab 'microscopes' use a series of optics to scan a laser beam across samples, measuring point-by-point",
              },
              {
                href: require('~/assets/images/gallery/photodetector.jpg'),
                thumbnail: require('~/assets/images/gallery/photodetector.jpg?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/photodetector.jpg?webp'),
                title:
                  'Featured in Nature Nanotechnology, this photodetector is one thousand times thinner than a human hair',
              },
              {
                href: require('~/assets/images/gallery/cryostat2.jpg'),
                thumbnail: require('~/assets/images/gallery/cryostat2.jpg?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/cryostat2.jpg?webp'),
                title:
                  'A wired-up sample sits in our optical cryostat, waiting to be measured',
              },
              {
                href: require('~/assets/images/gallery/poster.png'),
                thumbnail: require('~/assets/images/gallery/poster.png?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/poster.png?webp'),
                title:
                  'Max and Fatemeh present their work at the 2nd Annual SHINES Symposium',
              },
              {
                href: require('~/assets/images/gallery/F_and_D_dice.png'),
                thumbnail: require('~/assets/images/gallery/F_and_D_dice.png?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/F_and_D_dice.png?webp'),
                title:
                  'The first two PhDs from the QMO Lab, Fatemeh and Dennis!',
              },
              {
                href: require('~/assets/images/gallery/atwork.png'),
                thumbnail: require('~/assets/images/gallery/atwork.png?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/atwork.png?webp'),
                title:
                  "Working in a laser lab can invite comparisons to H.G. Well's Morlocks",
              },
              {
                href: require('~/assets/images/gallery/mad_scientists.png'),
                thumbnail: require('~/assets/images/gallery/mad_scientists.png?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/mad_scientists.png?webp'),
                title:
                  'The most successful experiments are performed in a lightning storm at the stroke of midnight',
              },
              {
                href: require('~/assets/images/gallery/spectrum.png'),
                thumbnail: require('~/assets/images/gallery/spectrum.png?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/spectrum.png?webp'),
                title:
                  'White light passed through a monochromator casts a beautiful rainbow on the QMO Lab logo',
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
                webp: require('~/assets/images/gallery/oakglen/oakglen_group.jpg?webp'),
                title: 'QMO Lab at Oak Glen 2018',
              },
              {
                href: require('~/assets/images/gallery/aps_2018_monkey_th.jpg'),
                thumbnail: require('~/assets/images/gallery/aps_2018_monkey_th.jpg?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/aps_2018_monkey_th.jpg?webp'),
                title: 'QMO Lab at APS March Meeting 2018',
              },
            ],
          },
          {
            title: 'OAK GLEN GROUP HIKE 2018',
            index: null,
            images: [
              {
                href: require('~/assets/images/gallery/oakglen/oakglen_climb.jpg'),
                thumbnail: require('~/assets/images/gallery/oakglen/oakglen_climb.jpg?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/oakglen/oakglen_climb.jpg?webp'),
                title: 'Hiking towards Preservation Point',
              },
              {
                href: require('~/assets/images/gallery/oakglen/oakglen_jed.jpg'),
                thumbnail: require('~/assets/images/gallery/oakglen/oakglen_jed.jpg?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/oakglen/oakglen_jed.jpg?webp'),
                title: 'Taking in the view',
              },
              {
                href: require('~/assets/images/gallery/oakglen/oakglen_descent.jpg'),
                thumbnail: require('~/assets/images/gallery/oakglen/oakglen_descent.jpg?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/oakglen/oakglen_descent.jpg?webp'),
                title: 'Descending to the valleys',
              },
            ],
          },
          {
            title: 'TORREY PINES GROUP HIKE 2016',
            index: null,
            images: [
              {
                href: require('~/assets/images/gallery/stairs_2016.jpg'),
                thumbnail: require('~/assets/images/gallery/stairs_2016.jpg?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/stairs_2016.jpg?webp'),
                title: 'Scenic Torrey Pines',
              },
              {
                href: require('~/assets/images/gallery/group_2016.jpg'),
                thumbnail: require('~/assets/images/gallery/group_2016.jpg?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/group_2016.jpg?webp'),
                title: 'The group in 2016',
              },
              {
                href: require('~/assets/images/gallery/mufasa_2016.png'),
                thumbnail: require('~/assets/images/gallery/mufasa_2016.png?resize&placeholder=true'),
                webp: require('~/assets/images/gallery/mufasa_2016.png?webp'),
                title: 'Professor Gabor is always with the group in spirit',
              },
            ],
          },
        ],
        videos: [
          { src: 'iOqmUeZVA0Q', title: '' },
          { src: 'aVY4od4mfnA', title: '' },
          { src: 'f6CjReJumHA', title: '' },
          { src: 'm3KhuLkpTAA', title: '' },
          { src: 'YEyQ1vrFAS8', title: '' },
          { src: 'Q9CyY_0uLJs', title: '' },
        ],
      };
    },
  };
</script>
