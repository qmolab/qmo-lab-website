<template>
  <div>
    <ModalImage
      :id="`modal-gallery`"
      v-model="currentIndex"
      :images="currentImages"
    />
    <div v-for="(gallery, k) in galleryImages" :key="k" class="mt-4">
      <h2 class="px-6">{{ gallery.title }}</h2>
      <waterfall
        :id="`waterfall-${k}`"
        :key="`waterfall-${k}`"
        v-slot="{ item, index }"
        :container-id="`waterfall-${k}`"
        :resizable="true"
        :items="gallery.images"
      >
        <BaseImage
          :src="item.thumbnail"
          :webp="item.webp"
          :alt="item.title"
          :title="item.title"
          link
          preload
          @click="click(index, gallery.images)"
        />
      </waterfall>
    </div>
  </div>
</template>

<script>
  import Waterfall from '@/components/lib/VuetifyWaterfall.vue';
  import BaseImage from '@/components/BaseImage.vue';
  import ModalImage from '@/components/ModalImage.vue';

  export default {
    name: 'ImageGallery',
    components: {
      Waterfall,
      ModalImage,
      BaseImage,
    },
    data() {
      return {
        currentIndex: -1,
        currentImages: [],
        galleryImages: [
          {
            title: 'Lab Gallery',
            index: null,
            images: [
              {
                href: require('~/assets/images/gallery/blue.png'),
                thumbnail: require('~/assets/images/gallery/blue.png?resize'),
                webp: require('~/assets/images/gallery/blue.png?webp'),
                title:
                  'Nonlinear response in our OPO laser means it can turn a red laser into a brilliant blue',
              },
              {
                href: require('~/assets/images/gallery/laserlevel.png'),
                thumbnail: require('~/assets/images/gallery/laserlevel.png?resize'),
                webp: require('~/assets/images/gallery/laserlevel.png?webp'),
                title: 'For safety, leave the laser level for cameras only',
              },
              {
                href: require('~/assets/images/gallery/lasers.png'),
                thumbnail: require('~/assets/images/gallery/lasers.png?resize'),
                webp: require('~/assets/images/gallery/lasers.png?webp'),
                title:
                  "The QMO Lab's original laser bank: A titanium-sapphire laser pumps an OPO laser cavity",
              },
              {
                href: require('~/assets/images/gallery/maxside.png'),
                thumbnail: require('~/assets/images/gallery/maxside.png?resize'),
                webp: require('~/assets/images/gallery/maxside.png?webp'),
                title:
                  "The QMO Lab 'microscopes' use a series of optics to scan a laser beam across samples, measuring point-by-point",
              },
              {
                href: require('~/assets/images/gallery/photodetector.jpg'),
                thumbnail: require('~/assets/images/gallery/photodetector.jpg?resize'),
                webp: require('~/assets/images/gallery/photodetector.jpg?webp'),
                title:
                  'Featured in Nature Nanotechnology, this photodetector is one thousand times thinner than a human hair',
              },
              {
                href: require('~/assets/images/gallery/cryostat2.jpg'),
                thumbnail: require('~/assets/images/gallery/cryostat2.jpg?resize'),
                webp: require('~/assets/images/gallery/cryostat2.jpg?webp'),
                title:
                  'A wired-up sample sits in our optical cryostat, waiting to be measured',
              },
              {
                href: require('~/assets/images/gallery/poster.png'),
                thumbnail: require('~/assets/images/gallery/poster.png?resize'),
                webp: require('~/assets/images/gallery/poster.png?webp'),
                title:
                  'Max and Fatemeh present their work at the 2nd Annual SHINES Symposium',
              },
              {
                href: require('~/assets/images/gallery/F_and_D_dice.png'),
                thumbnail: require('~/assets/images/gallery/F_and_D_dice.png?resize'),
                webp: require('~/assets/images/gallery/F_and_D_dice.png?webp'),
                title:
                  'The first two PhDs from the QMO Lab, Fatemeh and Dennis!',
              },
              {
                href: require('~/assets/images/gallery/atwork.png'),
                thumbnail: require('~/assets/images/gallery/atwork.png?resize'),
                webp: require('~/assets/images/gallery/atwork.png?webp'),
                title:
                  "Working in a laser lab can invite comparisons to H.G. Well's Morlocks",
              },
              {
                href: require('~/assets/images/gallery/mad_scientists.png'),
                thumbnail: require('~/assets/images/gallery/mad_scientists.png?resize'),
                webp: require('~/assets/images/gallery/mad_scientists.png?webp'),
                title:
                  'The most successful experiments are performed in a lightning storm at the stroke of midnight',
              },
              {
                href: require('~/assets/images/gallery/spectrum.png'),
                thumbnail: require('~/assets/images/gallery/spectrum.png?resize'),
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
                thumbnail: require('~/assets/images/gallery/oakglen/oakglen_group.jpg?resize'),
                webp: require('~/assets/images/gallery/oakglen/oakglen_group.jpg?webp'),
                title: 'QMO Lab at Oak Glen 2018',
              },
              {
                href: require('~/assets/images/gallery/aps_2018_monkey_th.jpg'),
                thumbnail: require('~/assets/images/gallery/aps_2018_monkey_th.jpg?resize'),
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
                thumbnail: require('~/assets/images/gallery/oakglen/oakglen_climb.jpg?resize'),
                webp: require('~/assets/images/gallery/oakglen/oakglen_climb.jpg?webp'),
                title: 'Hiking towards Preservation Point',
              },
              {
                href: require('~/assets/images/gallery/oakglen/oakglen_jed.jpg'),
                thumbnail: require('~/assets/images/gallery/oakglen/oakglen_jed.jpg?resize'),
                webp: require('~/assets/images/gallery/oakglen/oakglen_jed.jpg?webp'),
                title: 'Taking in the view',
              },
              {
                href: require('~/assets/images/gallery/oakglen/oakglen_descent.jpg'),
                thumbnail: require('~/assets/images/gallery/oakglen/oakglen_descent.jpg?resize'),
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
                thumbnail: require('~/assets/images/gallery/stairs_2016.jpg?resize'),
                webp: require('~/assets/images/gallery/stairs_2016.jpg?webp'),
                title: 'Scenic Torrey Pines',
              },
              {
                href: require('~/assets/images/gallery/group_2016.jpg'),
                thumbnail: require('~/assets/images/gallery/group_2016.jpg?resize'),
                webp: require('~/assets/images/gallery/group_2016.jpg?webp'),
                title: 'The group in 2016',
              },
              {
                href: require('~/assets/images/gallery/mufasa_2016.png'),
                thumbnail: require('~/assets/images/gallery/mufasa_2016.png?resize'),
                webp: require('~/assets/images/gallery/mufasa_2016.png?webp'),
                title: 'Professor Gabor is always with the group in spirit',
              },
            ],
          },
        ],
      };
    },
    methods: {
      click(index, images) {
        this.currentImages = images;
        this.currentIndex = index;
      },
    },
  };
</script>
