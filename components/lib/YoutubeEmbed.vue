<template>
  <div :style="containerStyle">
    <div class="youtube" @click="start">
      <div v-if="!isLoaded">
        <v-img :src="thumbSource" :height="height" :width="width">
          <v-icon :size="width / 8" class="mdiYoutube">
            {{ mdiYoutube }}
          </v-icon>
        </v-img>
      </div>
      <iframe
        v-else
        frameborder="0"
        allow="encrypted-media"
        allowfullscreen=""
        :src="videoSource"
        class="frame"
      />
    </div>
  </div>
</template>

<script>
  import { mdiYoutube } from '@mdi/js';
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
        mdiYoutube,
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
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    .frame {
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
    }
    .mdiYoutube {
      z-index: 1;
    }
    &:hover .mdiYoutube {
      color: $youtube-red;
      opacity: 1;
    }
  }
</style>
