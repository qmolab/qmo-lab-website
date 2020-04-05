<template>
  <div class="galleryPage">
    <h1 style="text-align: center;">QMO Lab Gallery</h1>
    <v-container v-for="(gallery, k) in galleryImages" :key="k">
      <h3>{{ gallery.title }}</h3>
      <div
        v-masonry="masonryGallery"
        transition-duration="0.3s"
        stagger="0.03s"
        item-selector=".masonry-gallery-tile"
        column-width="300"
        gutter="20"
        fit-width="true"
        style="margin: auto;"
      >
        <div
          v-for="(item, i) in gallery.images"
          :key="i"
          v-masonry-tile
          class="masonry-gallery-tile"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover } + ' imageCard'"
              link
              @click="expandImage(k * galleryImages.length + i)"
            >
              <v-tooltip bottom open-delay="500">
                <template v-slot:activator="{ on }">
                  <v-img :src="item.img" width="300" v-on="on" />
                </template>
                <span>{{ item.title }}</span>
              </v-tooltip>
            </v-card>
          </v-hover>
        </div>
      </div>
    </v-container>
    <v-dialog
      v-model="dialog"
      max-width="50vw"
      :fullscreen="$vuetify.breakpoint.smAndDown"
    >
      <v-carousel
        v-model="carousel"
        show-arrows
        max-width="50vw"
        width="100%"
        height="inherit"
        style=""
        hide-delimiters
      >
        <v-carousel-item v-for="(currentImage, i) in galleryList" :key="i">
          <v-img :src="currentImage.img" contain width="100%" max-width="80vw">
            <div class="fill-height" style="position: relative;">
              <p
                style="
                  position: absolute;
                  bottom: 0;
                  padding: 8px;
                  margin: 0;
                  background-color: #eee;
                  background-color: rgba(0, 0, 0, 0.5);
                "
              >
                {{ currentImage.title }}
              </p>
            </div>
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5" />
              </v-row>
            </template>
          </v-img>
        </v-carousel-item>
      </v-carousel>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'GalleryView',
    components: {},
    props: [],
    data() {
      return {
        dialog: false,
        carousel: 0,
        masonryGallery: null,
        galleryImages: [
          {
            title: 'Lab Gallery',
            images: [
              {
                img: 'https://qmolab.ucr.edu/assets/images/gallery/blue.png',
                title:
                  'Nonlinear response in our OPO laser means it can turn a red laser into a brilliant blue',
              },
              {
                img: 'https://qmolab.ucr.edu/assets/images/gallery/lasers.png',
                title:
                  "The QMO Lab's original laser bank: A titanium-sapphire laser pumps an OPO laser cavity",
              },
              {
                img:
                  'https://qmolab.ucr.edu/assets/images/gallery/laserlevel.png',
                title: 'For safety, leave the laser level for cameras only',
              },
              {
                img: 'https://qmolab.ucr.edu/assets/images/gallery/maxside.png',
                title:
                  "The QMO Lab 'microscopes' use a series of optics to scan a laser beam across samples, measuring point-by-point",
              },
              {
                img:
                  'https://qmolab.ucr.edu/assets/images/gallery/photodetector.jpg',
                title:
                  'Featured in Nature Nanotechnology, this photodetector is one thousand times thinner than a human hair',
              },
              {
                img:
                  'https://qmolab.ucr.edu/assets/images/gallery/cryostat2.jpg',
                title:
                  'A wired-up sample sits in our optical cryostat, waiting to be measured',
              },
              {
                img: 'https://qmolab.ucr.edu/assets/images/gallery/poster.png',
                title:
                  'Max and Fatemeh present their work at the 2nd Annual SHINES Symposium',
              },
              {
                img:
                  'https://qmolab.ucr.edu/assets/images/gallery/F_and_D_dice.png',
                title:
                  'The first two PhDs from the QMO Lab, Fatemeh and Dennis!',
              },
              {
                img: 'https://qmolab.ucr.edu/assets/images/gallery/atwork.png',
                title:
                  "Working in a laser lab can invite comparisons to H.G. Well's Morlocks",
              },
              {
                img:
                  'https://qmolab.ucr.edu/assets/images/gallery/mad_scientists.png',
                title:
                  'The most successful experiments are performed in a lightning storm at the stroke of midnight',
              },
              {
                img:
                  'https://qmolab.ucr.edu/assets/images/gallery/spectrum.png',
                title:
                  'White light passed through a monochromator casts a beautiful rainbow on the QMO Lab logo',
              },
            ],
          },
          {
            title: 'Group Photos',
            images: [
              {
                img:
                  'https://qmolab.ucr.edu/assets/images/gallery/oakglen/oakglen_group.jpg',
                title: 'QMO Lab at Oak Glen 2018',
              },
              {
                img:
                  'https://qmolab.ucr.edu/assets/images/gallery/aps_2018_monkey_th.jpg',
                title: 'QMO Lab at APS March Meeting 2018',
              },
            ],
          },
          {
            title: 'OAK GLEN GROUP HIKE 2018',
            images: [
              {
                img:
                  'https://qmolab.ucr.edu/assets/images/gallery/oakglen/oakglen_climb.jpg',
                title: 'Hiking towards Preservation Point',
              },
              {
                img:
                  'https://qmolab.ucr.edu/assets/images/gallery/oakglen/oakglen_jed.jpg',
                title: 'Taking in the view',
              },
              {
                img:
                  'https://qmolab.ucr.edu/assets/images/gallery/oakglen/oakglen_descent.jpg',
                title: 'Descending to the valleys',
              },
            ],
          },
          {
            title: 'TORREY PINES GROUP HIKE 2016',
            images: [
              {
                img:
                  'https://qmolab.ucr.edu/assets/images/gallery/stairs_2016.jpg',
                title: 'Scenic Torrey Pines',
              },
              {
                img:
                  'https://qmolab.ucr.edu/assets/images/gallery/group_2016.jpg',
                title: 'The group in 2016',
              },
              {
                img:
                  'https://qmolab.ucr.edu/assets/images/gallery/mufasa_2016.png',
                title: 'Professor Gabor is always with the group in spirit',
              },
            ],
          },
        ],
      };
    },
    computed: {
      galleryList() {
        const returning = [];
        this.galleryImages.forEach((gallery) => {
          gallery.images.forEach((e) => {
            returning.push(e);
          });
        });
        return returning;
      },
    },
    watch: {
      /* dialog (val) {
        if (!val) return;
        setTimeout(() => (this.dialog = false), 4000);
      }, */
    },
    methods: {
      expandImage(imageIndex /* event */) {
        this.carousel = imageIndex;
        // console.log(this.galleryList);
        this.dialog = true;
        // if(event) //event.target returns v-card element
      },
    },
  };
</script>

<style scoped lang="scss">
  #masonry-gallery-tile--width {
    max-width: 400px;
  }
  .masonry-gallery-tile {
    margin-bottom: 20px;
  }

  .imageCard {
    transition: opacity 0.4s ease-in-out;
    overflow: hidden;
  }
  .imageCard:not(.on-hover) {
    opacity: 0.8;
  }
</style>
