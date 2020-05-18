<template>
  <div class="px-3 pb-6">
    <div
      :class="{
        videoPlayerContainer: true,
        activated: currentVideoID !== '',
      }"
    >
      <YoutubeEmbed :video-id="currentVideoID" />
    </div>
    <v-row>
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
          :srcset="`https://img.youtube.com/vi_webp/${video.src}/default.webp`"
          :alt="video.title"
          :title="video.title"
          class="videoGalleryVideoCard hide-overflow"
          :aspect-ratio="16 / 9"
          :disabled="video.src === currentVideoID"
          :link="video.src !== currentVideoID"
          :no-tooltip="video.title === ''"
          @click="currentVideoID = video.src"
        >
          <v-icon class="mdiYoutube">{{ mdiYoutube }}</v-icon>
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
    components: {
      YoutubeEmbed,
      BaseImage,
    },
    props: { videos: { type: Array, required: true } },
    data() {
      return {
        currentVideoID: '',
        mdiYoutube,
      };
    },
  };
</script>

<style scoped lang="scss">
  .videoPlayerContainer {
    height: 0;
    &.activated {
      height: $videoPlayerHeight;
      transition: height $transition_duration $transition_func_main;
      @media (max-width: 600px) {
        height: 56vw;
      }
    }
  }
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
