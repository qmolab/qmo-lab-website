<template>
  <div class="videoGallery">
    <div
      :class="{
        videoGalleryPlayerContainer: true,
        activated: currentVideoID !== '',
      }"
    >
      <YoutubeEmbed :video-id="currentVideoID" />
    </div>
    <v-row v-if="displayPagination">
      <v-col
        v-for="video in videos"
        :key="video"
        cols="12"
        sm="6"
        md="4"
        lg="2"
      >
        <BaseImage
          :src="`https://img.youtube.com/vi/${video}/default.jpg`"
          :srcset="`https://img.youtube.com/vi_webp/${video}/default.webp`"
          alt="video alt"
          title="video title"
          class="videoGalleryVideoCard"
          :aspect-ratio="16 / 9"
          :disabled="video === currentVideoID"
          :link="video !== currentVideoID"
          @click="currentVideoID = video"
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
    props: {
      playerAutoPlay: {
        type: Number,
        default: 0,
      },
      playerMute: {
        type: Boolean,
        default: false,
      },
      displayPagination: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        currentVideoID: '',
        mdiYoutube,
        videos: [
          'iOqmUeZVA0Q',
          'aVY4od4mfnA',
          'f6CjReJumHA',
          'm3KhuLkpTAA',
          'YEyQ1vrFAS8',
          'Q9CyY_0uLJs',
        ],
      };
    },
  };
</script>

<style scoped lang="scss">
  $videoPlayerHeight: 360px !default;
  $videoPlayerWidth: 640px !default;
  .videoGallery {
    padding: 12px;
  }
  .videoGalleryPlayerContainer {
    margin: auto;
    max-width: 100%;
    height: 0;
    width: $videoPlayerWidth;
    border-radius: 4px;
    overflow: hidden;
    transition: height 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    &.activated {
      height: $videoPlayerHeight;
      @media (max-width: 600px) {
        height: 300px;
      }
      @media (max-width: 500px) {
        height: 250px;
      }
      @media (max-width: 400px) {
        height: 200px;
      }
      @media (max-width: 300px) {
        height: 140px;
      }
    }
  }
  .videoGalleryVideoCard {
    overflow: hidden;
    .mdiYoutube {
      width: 20px;
    }
    &:not(.selected):hover .mdiYoutube {
      color: $youtube-red;
      opacity: 1;
    }
  }
</style>
