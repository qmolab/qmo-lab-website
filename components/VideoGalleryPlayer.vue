<template>
  <div
    class="videoGalleryPlayerContainer"
    :style="'height: ' + playerHeight + 'px;'"
  >
    <YoutubeEmbed
      :video-id="videoId"
      :width="playerWidth"
      :height="playerHeight"
    />
  </div>
</template>

<script>
  import YoutubeEmbed from '@/components/lib/YoutubeEmbed.vue';

  export default {
    name: 'VideoGalleryPlayer',
    components: { YoutubeEmbed },
    props: {
      videoId: {
        type: String,
        required: true,
      },
      playerWidth: {
        type: Number,
        default: 640,
      },
      playerHeight: {
        type: Number,
        default: 360,
      },
      playerAutoPlay: {
        type: Number,
        default: 0,
      },
      playerMute: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      playerVars() {
        return {
          start: 0,
          autoplay: this.playerAutoPlay,
        };
      },
      playerHost() {
        return this.$store.state.gallery.youtubePlayer.host;
      },
    },
  };
</script>

<style lang="scss">
  .videoGalleryPlayerContainer {
    text-align: center;
    .videoGalleryPlayer {
      display: inline-block;
      border-radius: 4px;
      overflow: hidden;
      height: 100%;
    }
  }
</style>
