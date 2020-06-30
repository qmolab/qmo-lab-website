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
    <div class="px-3 pb-6 hidden-xs-only">
      <div>
        <v-expand-transition>
          <div
            v-if="currentVideoID !== ''"
            class="videoPlayerContainer mx-auto no-overflow rounded"
          >
            <YoutubeEmbed :video-id="currentVideoID" />
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
              <BaseImage
                :src="{
                  src: `https://img.youtube.com/vi/${video.src}/default.jpg`,
                }"
                :alt="video.title"
                :title="video.title"
                :aspect-ratio="16 / 9"
                width="200"
                :link="video.src !== currentVideoID"
                :no-tooltip="video.title === ''"
                :img-class="{
                  'no-overflow rounded': video.src === currentVideoID,
                  link: video.src !== currentVideoID,
                }"
                class="mx-2"
                style="width: 200px;"
                @click="currentVideoID = video.src"
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
              </BaseImage>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </div>
    <div>
      <ModalImage
        :id="`modal-gallery`"
        v-model="currentImage"
        :images="currentImages"
      />
      <div v-for="(gallery, k) in galleryImages" :key="k" class="mt-4">
        <h2 class="px-6 text-h5">{{ gallery.title }}</h2>
        <waterfall
          :id="`waterfall-${k}`"
          :key="`waterfall-${k}`"
          v-slot="{ item, index }"
          :container-id="`waterfall-${k}`"
          :resizable="true"
          :items="gallery.images"
        >
          <GalleryImage
            :name="item.name"
            :placeholder="item.placeholder"
            :alt="item.title"
            :title="item.title"
            @click="click(index, gallery.images)"
          />
        </waterfall>
      </div>
    </div>
  </div>
</template>

<script>
  import { mdiYoutubeSubscription, mdiYoutube } from '@mdi/js';
  import BaseImage from '@/components/BaseImage.vue';
  import YoutubeEmbed from '@/components/lib/YoutubeEmbed.vue';
  import Waterfall from '@/components/lib/VuetifyWaterfall.vue';
  import GalleryImage from '@/components/GalleryImage.vue';
  import ModalImage from '@/components/ModalImage.vue';
  import headAndTitle from '@/assets/js/headAndTitle';

  export default {
    name: 'GalleryView',
    components: {
      BaseImage,
      YoutubeEmbed,
      Waterfall,
      GalleryImage,
      ModalImage,
    },
    async asyncData({ $axios }) {
      const payload = await $axios.$get('/gallery/');
      const videos = await $axios.$get('/videos/');
      const galleryImages = [];
      for (const title in payload) {
        galleryImages.push({
          title,
          index: null,
          images: payload[title],
        });
      }
      return { galleryImages, videos };
    },
    data: () => ({
      mdiYoutubeSubscription,
      mdiYoutube,
      currentVideoID: '',
      currentImage: -1,
      currentImages: [],
    }),
    methods: {
      click(index, images) {
        this.currentImages = images;
        this.currentImage = index;
      },
    },
    ...headAndTitle(
      'Gallery',
      'gallery/',
      'QMO Lab Gallery: Quantum Materials Optoelectronics @ UCR'
    ),
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
</style>
