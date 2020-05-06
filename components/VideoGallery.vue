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
    max-width: 1280px;
    margin: auto;
    padding: 12px;
  }
  .videoGalleryPlayerContainer {
    margin: auto;
    height: 0;
    width: $videoPlayerWidth;
    border-radius: 4px;
    overflow: hidden;
    transition: height 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    &.activated {
      height: $videoPlayerHeight;
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
  }
</style>
