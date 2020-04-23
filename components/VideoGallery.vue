<template>
  <div class="videoGallery">
    <VideoGalleryPlayer
      :video-id="currentVideoID"
      :player-auto-play="playerAutoPlay"
      :player-mute="playerMute"
      :player-width="playerWidth"
      :player-height="currentVideoID ? playerHeight : 0"
      class="videoPlayer"
    />
    <VideoGalleryPagination
      v-if="displayPagination"
      :videos="videos"
      @selected="currentVideoID = $event"
    />
  </div>
</template>

<script>
  import VideoGalleryPlayer from '@/components/VideoGalleryPlayer';
  import VideoGalleryPagination from '@/components/VideoGalleryPagination';

  export default {
    name: 'VideoGallery',
    components: {
      VideoGalleryPlayer,
      VideoGalleryPagination,
    },
    props: {
      videos: {
        type: Array,
        required: true,
      },
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
        playerWidth: 640,
        playerHeight: 360,
      };
    },
  };
</script>

<style scoped lang="scss">
  .videoGallery {
    max-width: 1280px;
    margin: auto;
  }
  .videoPlayer {
    transition: height 280ms cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
  }
</style>
