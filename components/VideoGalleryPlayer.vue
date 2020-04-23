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
  // import Vue from 'vue';
  /* eslint-disable vue/no-unused-components */
  /* import VueYouTubeEmbed from 'vue-youtube-embed';
  Vue.use(VueYouTubeEmbed, { global: true, componentId: 'youtube-media' }); */
  import YoutubeEmbed from '@/components/YoutubeEmbed.vue';

  export default {
    name: 'VideoGalleryPlayer',
    components: {
      /* VueYouTubeEmbed, */
      YoutubeEmbed,
    },
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
    methods: {
      ready(event) {
        this.player = event.target;
      },
      playing(event) {
        // The player is playing a video.
      },
      change() {
        // when you change the value, the player will also change.
        // If you would like to change `playerVars`, please change it before you change `videoId`.
        // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
        // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
        this.videoId = 'another video id';
      },
      stop() {
        this.player.stopVideo();
      },
      pause() {
        this.player.pauseVideo();
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
