<template>
  <div :style="containerStyle">
    <div class="youtube" @click="start">
      <div v-if="!isLoaded">
        <v-img :src="thumbSource" :height="height" :width="width" />
        <div class="play-button"></div>
      </div>
      <iframe
        v-else
        frameborder="0"
        allow="encrypted-media"
        allowfullscreen=""
        :src="videoSource"
      />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      videoId: {
        type: String,
        required: true,
      },
      height: {
        type: Number,
        default: 360,
      },
      width: {
        type: Number,
        default: 640,
      },
    },
    data() {
      return {
        isLoaded: false,
      };
    },
    computed: {
      containerStyle() {
        return (
          'height:' +
          this.height.toString() +
          'px;max-width:' +
          this.width.toString() +
          'px;margin:auto;'
        );
      },
      videoSource() {
        if (this.videoId.length === 0) return '';
        else
          return (
            'https://www.youtube-nocookie.com/embed/' +
            this.videoId +
            '?rel=0&showinfo=0'
          );
      },
      thumbSource() {
        if (this.videoId.length === 0) return '';
        else
          return (
            'https://img.youtube.com/vi/' + this.videoId + '/hqdefault.jpg'
          );
      },
    },
    methods: {
      start() {
        this.isLoaded = true;
      },
    },
  };
</script>

<style scoped lang="scss">
  .youtube {
    position: relative;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
  }
  .youtube img {
    width: 100%;
    top: -16.84%;
    left: 0;
    opacity: 0.7;
  }
  .youtube .play-button {
    width: 90px;
    height: 60px;
    background-color: #333;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
    z-index: 1;
    opacity: 0.8;
    border-radius: 6px;
  }
  .youtube .play-button:before {
    content: '';
    border-style: solid;
    border-width: 15px 0 15px 26px;
    border-color: transparent transparent transparent #fff;
  }
  .youtube img,
  .youtube .play-button {
    cursor: pointer;
  }
  .youtube img,
  .youtube iframe,
  .youtube .play-button,
  .youtube .play-button:before {
    position: absolute;
  }
  .youtube .play-button,
  .youtube .play-button:before {
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  .youtube iframe {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
</style>
