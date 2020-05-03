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
      playerWidth: {
        type: Number,
        default: 640,
      },
      playerHeight: {
        type: Number,
        default: 360,
      },
    },
    data() {
      return {
        currentVideoID: '',
      };
    },
  };
</script>

<style scoped lang="scss">
  .videoGallery {
    max-width: 1280px;
    margin: auto;
    padding: 12px;
  }
  .videoPlayer {
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    position: relative;
  }
</style>
