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
    <v-row v-if="displayPagination" cols="12">
      <v-col v-for="video in videos" :key="video">
        <BaseImage
          :src="'https://img.youtube.com/vi/' + video + '/default.jpg'"
          alt="video alt"
          title="video title"
          class="videoGalleryVideoCard"
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
  $videoPlayerHeight: 640px !default;
  $videoPlayerWidth: 360px !default;
  .videoGallery {
    max-width: 1280px;
    margin: auto;
    padding: 12px;
  }
  .videoGalleryPlayerContainer {
    text-align: center;
    height: 0;
    width: $videoPlayerWidth;
    &.activated {
      height: $videoPlayerHeight;
    }
    .videoGalleryPlayer {
      display: inline-block;
      border-radius: 4px;
      overflow: hidden;
      height: $videoPlayerHeight;
      width: $videoPlayerWidth;
    }
  }
  .videoGalleryVideoCard {
    max-height: 90px;
    max-width: 160px;
    overflow: hidden;
    .mdiYoutube {
      width: 20px;
    }
    &:not(.selected):hover .mdiYoutube {
      color: $youtube-red;
      opacity: 1;
    }
    .videoGalleryVideoImage {
      border-radius: 4px;
    }
  }
  .videoPlayer {
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    position: relative;
  }
</style>
