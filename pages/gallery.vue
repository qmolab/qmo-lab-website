<template>
  <div class="galleryPage">
    <h1 style="text-align: center;">QMO Lab Gallery</h1>
    <v-container v-for="(gallery, k) in galleryImages" :key="k">
      <h3>{{ gallery.title }}</h3>
      <v-row
        v-touch="{
          left: () => ++gallery.index,
          right: () => --gallery.index,
          up: () => closeSlide(gallery, -1),
          down: () => closeSlide(gallery, 1),
        }"
      >
        <VueGallery
          :id="`gallery-${k}`"
          :images="gallery.images"
          :index="gallery.index"
          @close="gallery.index = null"
      /></v-row>
      <waterfall
        :id="k"
        :gutter-width="20"
        :gutter-height="20"
        :align="align"
        :min-col="1"
        :max-col="4"
        :resizable="true"
      >
        <WaterfallItem
          v-for="(item, imageIndex) in gallery.images"
          :key="imageIndex"
          :width="imgWidth"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover, imageCard: true }"
              link
              @click="gallery.index = imageIndex"
            >
              <v-tooltip bottom open-delay="500">
                <template v-slot:activator="{ on }">
                  <v-img
                    :lazy-src="require('@/assets/images/logo.svg')"
                    :src="item.href"
                    v-on="on"
                  />
                </template>
                <span>{{ item.title }}</span>
              </v-tooltip>
            </v-card>
          </v-hover>
        </WaterfallItem>
      </waterfall>
    </v-container>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';
  import { Waterfall, WaterfallItem } from 'vue2-waterfall';
  import { Touch } from 'vuetify/lib/directives';

  export default {
    name: 'GalleryView',
    components: {
      VueGallery,
      Waterfall,
      WaterfallItem,
    },
    directives: {
      Touch,
    },
    props: [],
    data() {
      return {
        align: 'left',
        imgWidth: 355,
        galleryImages: [
          {
            title: 'Lab Gallery',
            index: null,
            images: [
              {
                href: 'https://qmolab.ucr.edu/assets/images/gallery/blue.png',
                title:
                  'Nonlinear response in our OPO laser means it can turn a red laser into a brilliant blue',
                height: '100',
              },
              {
                href:
                  'https://qmolab.ucr.edu/assets/images/gallery/laserlevel.png',
                title: 'For safety, leave the laser level for cameras only',
                height: '100',
              },
              {
                href: 'https://qmolab.ucr.edu/assets/images/gallery/lasers.png',
                title:
                  "The QMO Lab's original laser bank: A titanium-sapphire laser pumps an OPO laser cavity",
                height: '200',
              },
              {
                href:
                  'https://qmolab.ucr.edu/assets/images/gallery/maxside.png',
                title:
                  "The QMO Lab 'microscopes' use a series of optics to scan a laser beam across samples, measuring point-by-point",
                height: '100',
              },
              {
                href:
                  'https://qmolab.ucr.edu/assets/images/gallery/photodetector.jpg',
                title:
                  'Featured in Nature Nanotechnology, this photodetector is one thousand times thinner than a human hair',
                height: '200',
              },
              {
                href:
                  'https://qmolab.ucr.edu/assets/images/gallery/cryostat2.jpg',
                title:
                  'A wired-up sample sits in our optical cryostat, waiting to be measured',
                height: '200',
              },
              {
                href: 'https://qmolab.ucr.edu/assets/images/gallery/poster.png',
                title:
                  'Max and Fatemeh present their work at the 2nd Annual SHINES Symposium',
                height: '200',
              },
              {
                href:
                  'https://qmolab.ucr.edu/assets/images/gallery/F_and_D_dice.png',
                title:
                  'The first two PhDs from the QMO Lab, Fatemeh and Dennis!',
                height: '200',
              },
              {
                href: 'https://qmolab.ucr.edu/assets/images/gallery/atwork.png',
                title:
                  "Working in a laser lab can invite comparisons to H.G. Well's Morlocks",
                height: '200',
              },
              {
                href:
                  'https://qmolab.ucr.edu/assets/images/gallery/mad_scientists.png',
                title:
                  'The most successful experiments are performed in a lightning storm at the stroke of midnight',
                height: '200',
              },
              {
                href:
                  'https://qmolab.ucr.edu/assets/images/gallery/spectrum.png',
                title:
                  'White light passed through a monochromator casts a beautiful rainbow on the QMO Lab logo',
                height: '200',
              },
            ],
          },
          {
            title: 'Group Photos',
            index: null,
            images: [
              {
                href:
                  'https://qmolab.ucr.edu/assets/images/gallery/oakglen/oakglen_group.jpg',
                title: 'QMO Lab at Oak Glen 2018',
                height: '200',
              },
              {
                href:
                  'https://qmolab.ucr.edu/assets/images/gallery/aps_2018_monkey_th.jpg',
                title: 'QMO Lab at APS March Meeting 2018',
                height: '200',
              },
            ],
          },
          {
            title: 'OAK GLEN GROUP HIKE 2018',
            index: null,
            images: [
              {
                href:
                  'https://qmolab.ucr.edu/assets/images/gallery/oakglen/oakglen_climb.jpg',
                thumbnail:
                  'https://qmolab.ucr.edu/assets/images/gallery/oakglen/oakglen_climb.jpg',
                title: 'Hiking towards Preservation Point',
                height: '200',
              },
              {
                href:
                  'https://qmolab.ucr.edu/assets/images/gallery/oakglen/oakglen_jed.jpg',
                thumbnail:
                  'https://qmolab.ucr.edu/assets/images/gallery/oakglen/oakglen_jed.jpg',
                title: 'Taking in the view',
                height: '200',
              },
              {
                href:
                  'https://qmolab.ucr.edu/assets/images/gallery/oakglen/oakglen_descent.jpg',
                thumbnail:
                  'https://qmolab.ucr.edu/assets/images/gallery/oakglen/oakglen_descent.jpg',
                title: 'Descending to the valleys',
                height: '200',
              },
            ],
          },
          {
            title: 'TORREY PINES GROUP HIKE 2016',
            index: null,
            images: [
              {
                href:
                  'https://qmolab.ucr.edu/assets/images/gallery/stairs_2016.jpg',
                title: 'Scenic Torrey Pines',
                height: '200',
              },
              {
                href:
                  'https://qmolab.ucr.edu/assets/images/gallery/group_2016.jpg',
                title: 'The group in 2016',
                height: '200',
              },
              {
                href:
                  'https://qmolab.ucr.edu/assets/images/gallery/mufasa_2016.png',
                title: 'Professor Gabor is always with the group in spirit',
                height: '200',
              },
            ],
          },
        ],
      };
    },
    computed: {},
    watch: {},
    methods: {
      expandImage(imageIndex /* event */) {},
      closeSlide(gallery, direction) {
        gallery.index = null;
      },
    },
  };
</script>

<style scoped lang="scss">
  .imageCard {
    transition: opacity 0.4s ease-in-out;
    overflow: hidden;
    min-width: 50px;
    min-height: 50px;
  }
  .imageCard:not(.on-hover) {
    opacity: 0.8;
  }
</style>
