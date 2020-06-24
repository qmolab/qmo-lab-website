<template>
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
      <v-col
        v-for="(video, i) in videos"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="2"
      >
        <BaseImage
          :src="{ src: `https://img.youtube.com/vi/${video.src}/default.jpg` }"
          :alt="video.title"
          :title="video.title"
          class="videoGalleryVideoCard no-overflow"
          :aspect-ratio="16 / 9"
          :link="video.src !== currentVideoID"
          :no-tooltip="video.title === ''"
          :img-class="{
            'no-overflow rounded': video.src === currentVideoID,
            link: video.src !== currentVideoID,
          }"
          @click="currentVideoID = video.src"
        >
          <span class="v-icon notranslate mdiYoutube v-icon--svg theme--dark">
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
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { mdiYoutube } from '@mdi/js';
  import YoutubeEmbed from '@/components/lib/YoutubeEmbed.vue';
  import BaseImage from '@/components/BaseImage.vue';

  export default {
    name: 'VideoGallery',
    components: { YoutubeEmbed, BaseImage },
    props: { videos: { type: Array, required: true } },
    data() {
      return { currentVideoID: '', mdiYoutube };
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
</style>
