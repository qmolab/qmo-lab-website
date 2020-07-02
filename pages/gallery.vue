<template>
  <div class="galleryPage">
    <div v-if="currentImages.length > 0">
      <v-dialog v-model="dialog" fullscreen>
        <div class="modalContainer fill-h black--80 no-overflow">
          <div class="d-flex align-center justify-center vh77">
            <QImg
              v-if="currentImages[currentImage]"
              cat="gallery"
              :name="currentImages[currentImage].name"
              large
              contain
              max-width="75vw"
              max-height="75vh"
              class="flex-grow-0"
            />
          </div>
          <div
            v-if="currentImages[currentImage]"
            class="vh6 d-flex justify-center subtitle-1"
          >
            {{ currentImages[currentImage].title }}
          </div>
          <div class="d-flex align-center justify-center vh17">
            <v-slide-group
              v-if="currentImages.length > 0"
              v-model="currentImage"
              class="hidden-sm-and-down vh15"
              show-arrows
              center-active
              mandatory
            >
              <v-slide-item
                v-for="(slide, i) in currentImages"
                :id="`modal-carousel-bsi-${i}`"
                :key="`modal-carousel-bsi-${i}`"
                v-slot:default="{ active, toggle }"
                class="mx-2 justify-self-center"
              >
                <QImg
                  max-height="15vh"
                  width="24vh"
                  :class="{ dimmer: active, link: !active }"
                  :name="slide.name"
                  :placeholder="slide.placeholder"
                  :alt="slide.alt"
                  :title="slide.title"
                  cat="gallery"
                  @click="toggle"
                />
              </v-slide-item>
            </v-slide-group>
          </div>
          <v-btn color="red" class="abs t0 r0 ma-4" fab @click="dialog = false">
            <v-icon x-large>$close</v-icon>
          </v-btn>
        </div>
      </v-dialog>
    </div>
    <v-btn
      x-large
      text
      class="my-2"
      href="https://www.youtube.com/channel/UCJdmhoGpcmAFzVx9PolvBOA"
    >
      <span>QMO YouTube Channel</span>
      <v-icon right color="secondary">{{ mdiYoutubeSubscription }}</v-icon>
    </v-btn>
    <div class="px-3 pb-6 hidden-xs-only">
      <div>
        <v-expand-transition>
          <div
            v-if="currentVideoID !== ''"
            class="videoPlayerContainer mx-auto no-overflow rounded"
          >
            <div class="link rounded fill-w fill-h rel no-overflow">
              <v-fade-transition>
                <v-img
                  v-if="!videoLoaded"
                  :src="videoThumb"
                  :aspect-ratio="16 / 9"
                  @click="videoLoaded = true"
                >
                  <v-icon class="mdiYoutube" :size="72">
                    $youtube
                  </v-icon>
                </v-img>
                <iframe
                  v-else
                  frameborder="0"
                  allow="encrypted-media"
                  allowfullscreen=""
                  :src="videoSource"
                  class="abs t0 l0 fill-w fill-h"
                />
              </v-fade-transition>
            </div>
          </div>
        </v-expand-transition>
      </div>
      <v-row>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="d-none"
        >
          <path id="ytIconPath" :d="mdiYoutube" />
        </svg>
        <v-col>
          <v-slide-group show-arrows center-active>
            <v-slide-item v-for="(video, i) in videos" :key="i">
              <div class="mx-2" style="width: 200px;">
                <v-tooltip bottom :open-delay="500" :close-delay="250">
                  <template v-slot:activator="{ on }">
                    <v-img
                      :src="`https://img.youtube.com/vi/${video.src}/default.jpg`"
                      :class="{
                        'no-overflow rounded': video.src === currentVideoID,
                        link: video.src !== currentVideoID,
                      }"
                      :alt="video.title"
                      :aspect-ratio="16 / 9"
                      width="200"
                      @click="currentVideoID = video.src"
                      v-on="on"
                    >
                      <span
                        class="v-icon notranslate mdiYoutube v-icon--svg theme--dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          height="24"
                          width="24"
                          role="img"
                          aria-hidden="true"
                        >
                          <use href="#ytIconPath" />
                        </svg>
                      </span>
                      <template v-slot:placeholder>
                        <v-row class="fill-h ma-0 align-center justify-center">
                          <v-progress-circular
                            size="60"
                            indeterminate
                            color="primary"
                          />
                        </v-row>
                      </template>
                    </v-img>
                  </template>
                  <span class="text-capitalize">{{ video.title }}</span>
                </v-tooltip>
              </div>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </div>
    <div
      v-for="(gallery, k) in galleryImages"
      id="galleryImageContainer"
      :key="k"
      class="mt-4"
    >
      <h2 class="px-6 text-h5">{{ gallery.title }}</h2>
      <waterfall v-slot="{ item, index }" :items="gallery.images">
        <GalleryImage
          v-if="item.name"
          :name="item.name"
          :placeholder="item.placeholder"
          :alt="item.title"
          :title="item.title"
          @click="click(index, gallery.images)"
        />
      </waterfall>
    </div>
  </div>
</template>

<script>
  import { mdiYoutubeSubscription, mdiYoutube } from '@mdi/js';
  import QImg from '@/components/lib/QImg.vue';
  import GalleryImage from '@/components/GalleryImage.vue';
  import Waterfall from '@/components/lib/VuetifyWaterfall.vue';

  export default {
    name: 'GalleryView',
    components: {
      QImg,
      GalleryImage,
      Waterfall,
    },
    async asyncData({ $axios }) {
      const payload = await $axios.$get('/gallery/');
      const videos = await $axios.$get('/videos/');
      const galleryImages = [];
      for (const title in payload) {
        galleryImages.push({
          title,
          images: payload[title],
        });
      }
      return { galleryImages, videos };
    },
    data: () => ({
      currentVideoID: '',
      currentImage: -1,
      dialog: false,
      currentImages: [],
      videoLoaded: false,
      videoSource: undefined,
      videoThumb: '',
      mdiYoutubeSubscription,
      mdiYoutube,
    }),
    watch: {
      currentVideoID() {
        if (this.currentVideoID.length !== 0) {
          const y = 'https://img.youtube.com/vi';
          this.videoThumb = y + '/' + this.currentVideoID + '/default.jpg';
          this.videoSource = `https://www.youtube-nocookie.com/embed/${this.currentVideoID}?rel=0&showinfo=0`;
        }
      },
    },
    mounted() {
      this.$store.commit('pageTitle', 'Gallery');
    },
    methods: {
      click(index, images) {
        this.currentImages = images;
        this.currentImage = index;
        this.dialog = true;
      },
    },
    head() {
      return {
        title: 'Gallery',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'QMO Lab Gallery: Quantum Materials Optoelectronics @ UCR',
          },
        ],
        link: [
          {
            rel: 'canonical',
            href: process.env.baseUrl + 'gallery/',
          },
        ],
      };
    },
  };
</script>

<style scoped lang="scss">
  .videoGalleryVideoCard {
    .mdiYoutube {
      width: 20px;
    }
    &:not(.selected):hover .mdiYoutube {
      color: $youtube-red;
      opacity: 1;
    }
  }
  .vh77 {
    height: 78vh;
  }
  .vh20 {
    height: 20vh;
  }
  .vh6 {
    height: 4vh;
  }
  .vh17 {
    height: 18vh !important;
  }
</style>
