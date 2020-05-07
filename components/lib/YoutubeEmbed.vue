<template>
  <div class="youtube" @click="start">
    <v-fade-transition>
      <v-img
        v-if="!isLoaded"
        :src="thumbSource"
        :lazy-src="lazySource"
        :srcset="sourceSet"
        :aspect-ratio="16 / 9"
      >
        <v-icon class="mdiYoutube" :size="72">
          {{ mdiYoutube }}
        </v-icon>
      </v-img>
      <iframe
        v-else
        frameborder="0"
        allow="encrypted-media"
        allowfullscreen=""
        :src="videoSource"
        class="frame"
      />
    </v-fade-transition>
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
    },
    data() {
      return {
        isLoaded: false,
        mdiYoutube,
      };
    },
    computed: {
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
      lazySource() {
        if (this.videoId.length === 0) return '';
        else
          return (
            'https://img.youtube.com/vi_webp/' + this.videoId + '/default.webp'
          );
      },
      sourceSet() {
        if (this.videoId.length === 0) return '';
        else
          return (
            'https://img.youtube.com/vi_webp/' +
            this.videoId +
            '/mqdefault.webp 320w, https://img.youtube.com/vi_webp/' +
            this.videoId +
            '/hqdefault.webp 480w'
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
    width: 100%;
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
