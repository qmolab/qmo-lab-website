<template>
  <v-container class="galleryPage">
    <h2 class="title">{{ videoGalleryTitle }}</h2>
    <VideoGallery :videos="videoGalleryVideoIds" />
    <h2 class="title">{{ imageGalleryTitle }}</h2>
    <ImageGallery
      :align="imageGalleryAlign"
      :img-width="imageGalleryImageWidth"
      :gallery-images="imageGalleryImages"
    />
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
        imageGalleryAlign: 'left',
        imageGalleryImageWidth: 355,
        videoGalleryTitle: 'QMO YouTube Channel',
        videoGalleryVideoIds: [
          'iOqmUeZVA0Q',
          'aVY4od4mfnA',
          'f6CjReJumHA',
          'm3KhuLkpTAA',
          'YEyQ1vrFAS8',
          'Q9CyY_0uLJs',
        ],
        imageGalleryTitle: 'QMO Lab Gallery',
        imageGalleryImages: [
          {
            title: 'Lab Gallery',
            index: null,
            images: [
              {
                href: require('~/assets/images/gallery/blue.png'),
                thumbnail: require('~/assets/images/gallery/blue.png?resize&quality=55&format=jpg&size=200'),
                lazy: require('~/assets/images/gallery/blue.png?resize&quality=55&format=jpg&size=200&lqip'),
                title:
                  'Nonlinear response in our OPO laser means it can turn a red laser into a brilliant blue',
              },
              {
                href: require('~/assets/images/gallery/laserlevel.png'),
                thumbnail: require('~/assets/images/gallery/laserlevel.png?resize&quality=55&format=jpg&size=200'),
                lazy: require('~/assets/images/gallery/laserlevel.png?resize&quality=55&format=jpg&size=200&lqip'),
                title: 'For safety, leave the laser level for cameras only',
              },
              {
                href: require('~/assets/images/gallery/lasers.png'),
                thumbnail: require('~/assets/images/gallery/lasers.png?resize&quality=55&format=jpg&size=200'),
                lazy: require('~/assets/images/gallery/lasers.png?resize&quality=55&format=jpg&size=200&lqip'),
                title:
                  "The QMO Lab's original laser bank: A titanium-sapphire laser pumps an OPO laser cavity",
              },
              {
                href: require('~/assets/images/gallery/maxside.png'),
                thumbnail: require('~/assets/images/gallery/maxside.png?resize&quality=55&format=jpg&size=200&resize&size=200'),
                lazy: require('~/assets/images/gallery/maxside.png?resize&quality=55&format=jpg&size=200&lqip'),
                title:
                  "The QMO Lab 'microscopes' use a series of optics to scan a laser beam across samples, measuring point-by-point",
              },
              {
                href: require('~/assets/images/gallery/photodetector.jpg'),
                thumbnail: require('~/assets/images/gallery/photodetector.jpg?resize&quality=55&format=jpg&size=200'),
                lazy: require('~/assets/images/gallery/photodetector.jpg?resize&quality=55&format=jpg&size=200&lqip'),
                title:
                  'Featured in Nature Nanotechnology, this photodetector is one thousand times thinner than a human hair',
              },
              {
                href: require('~/assets/images/gallery/cryostat2.jpg'),
                thumbnail: require('~/assets/images/gallery/cryostat2.jpg?resize&quality=55&format=jpg&size=200'),
                lazy: require('~/assets/images/gallery/cryostat2.jpg?resize&quality=55&format=jpg&size=200&lqip'),
                title:
                  'A wired-up sample sits in our optical cryostat, waiting to be measured',
              },
              {
                href: require('~/assets/images/gallery/poster.png'),
                thumbnail: require('~/assets/images/gallery/poster.png?resize&quality=55&format=jpg&size=200'),
                lazy: require('~/assets/images/gallery/poster.png?resize&quality=55&format=jpg&size=200&lqip'),
                title:
                  'Max and Fatemeh present their work at the 2nd Annual SHINES Symposium',
              },
              {
                href: require('~/assets/images/gallery/F_and_D_dice.png'),
                thumbnail: require('~/assets/images/gallery/F_and_D_dice.png?resize&quality=55&format=jpg&size=200'),
                lazy: require('~/assets/images/gallery/F_and_D_dice.png?resize&quality=55&format=jpg&size=200&lqip'),
                title:
                  'The first two PhDs from the QMO Lab, Fatemeh and Dennis!',
              },
              {
                href: require('~/assets/images/gallery/atwork.png'),
                thumbnail: require('~/assets/images/gallery/atwork.png?resize&quality=55&format=jpg&size=200'),
                lazy: require('~/assets/images/gallery/atwork.png?resize&quality=55&format=jpg&size=200&lqip'),
                title:
                  "Working in a laser lab can invite comparisons to H.G. Well's Morlocks",
              },
              {
                href: require('~/assets/images/gallery/mad_scientists.png'),
                thumbnail: require('~/assets/images/gallery/mad_scientists.png?resize&quality=55&format=jpg&size=200'),
                lazy: require('~/assets/images/gallery/mad_scientists.png?resize&quality=55&format=jpg&size=200&lqip'),
                title:
                  'The most successful experiments are performed in a lightning storm at the stroke of midnight',
              },
              {
                href: require('~/assets/images/gallery/spectrum.png'),
                thumbnail: require('~/assets/images/gallery/spectrum.png?resize&quality=55&format=jpg&size=200'),
                lazy: require('~/assets/images/gallery/spectrum.png?resize&quality=55&format=jpg&size=200&lqip'),
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
                thumbnail: require('~/assets/images/gallery/oakglen/oakglen_group.jpg?resize&quality=55&format=jpg&size=200'),
                lazy: require('~/assets/images/gallery/oakglen/oakglen_group.jpg?resize&quality=55&format=jpg&size=200&lqip'),
                title: 'QMO Lab at Oak Glen 2018',
              },
              {
                href: require('~/assets/images/gallery/aps_2018_monkey_th.jpg'),
                thumbnail: require('~/assets/images/gallery/aps_2018_monkey_th.jpg?resize&quality=55&format=jpg&size=200'),
                lazy: require('~/assets/images/gallery/aps_2018_monkey_th.jpg?resize&quality=55&format=jpg&size=200&lqip'),
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
                lazy: require('~/assets/images/gallery/oakglen/oakglen_climb.jpg?resize&quality=55&format=jpg&size=200&lqip'),
                thumbnail: require('~/assets/images/gallery/oakglen/oakglen_climb.jpg?resize&quality=55&format=jpg&size=200'),
                title: 'Hiking towards Preservation Point',
              },
              {
                href: require('~/assets/images/gallery/oakglen/oakglen_jed.jpg'),
                lazy: require('~/assets/images/gallery/oakglen/oakglen_jed.jpg?resize&quality=55&format=jpg&size=200&lqip'),
                thumbnail: require('~/assets/images/gallery/oakglen/oakglen_jed.jpg?resize&quality=55&format=jpg&size=200'),
                title: 'Taking in the view',
              },
              {
                href: require('~/assets/images/gallery/oakglen/oakglen_descent.jpg'),
                lazy: require('~/assets/images/gallery/oakglen/oakglen_jed.jpg?resize&quality=55&format=jpg&size=200&lqip'),
                thumbnail: require('~/assets/images/gallery/oakglen/oakglen_descent.jpg?resize&quality=55&format=jpg&size=200'),
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
                lazy: require('~/assets/images/gallery/stairs_2016.jpg?resize&quality=55&format=jpg&size=200&lqip'),
                thumbnail: require('~/assets/images/gallery/stairs_2016.jpg?resize&quality=55&format=jpg&size=200'),
                title: 'Scenic Torrey Pines',
              },
              {
                href: require('~/assets/images/gallery/group_2016.jpg'),
                lazy: require('~/assets/images/gallery/group_2016.jpg?resize&quality=55&format=jpg&size=200&lqip'),
                thumbnail: require('~/assets/images/gallery/group_2016.jpg?resize&quality=55&format=jpg&size=200'),
                title: 'The group in 2016',
              },
              {
                href: require('~/assets/images/gallery/mufasa_2016.png'),
                lazy: require('~/assets/images/gallery/mufasa_2016.png?resize&quality=55&format=jpg&size=200&lqip'),
                thumbnail: require('~/assets/images/gallery/mufasa_2016.png?resize&quality=55&format=jpg&size=200'),
                title: 'Professor Gabor is always with the group in spirit',
              },
            ],
          },
        ],
      };
    },
  };
</script>

<style scoped lang="scss">
  .title {
    text-align: center;
  }
</style>
