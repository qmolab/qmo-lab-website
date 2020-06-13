<template>
  <div class="youtube fill-w fill-h rel hide-overflow" @click="isLoaded = true">
    <v-fade-transition>
      <v-img
        v-if="!isLoaded"
        :src="thumbSource"
        :srcset="sourceSet"
        :aspect-ratio="16 / 9"
      >
        <v-icon class="mdiYoutube" :size="72">
          mdi-youtube
        </v-icon>
      </v-img>
      <iframe
        v-else
        frameborder="0"
        allow="encrypted-media"
        allowfullscreen=""
        :src="videoSource"
        class="frame abs fill-w fill-h"
      />
    </v-fade-transition>
  </div>
</template>

<script>
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
        videoSource: undefined,
        thumbSource: '',
        sourceSet: undefined,
      };
    },
    watch: {
      videoId() {
        this.setup();
      },
    },
    mounted() {
      this.setup();
    },
    methods: {
      setup() {
        return new Promise((resolve) => {
          if (this.videoId.length !== 0) {
            const y = 'https://img.youtube.com/vi';
            const yw = y + '_webp/';
            this.thumbSource = y + '/' + this.videoId + '/default.jpg';
            this.sourceSet = `${yw + this.videoId}/mqdefault.webp 320w, ${
              yw + this.videoId
            }/hqdefault.webp 480w`;
            this.videoSource = `https://www.youtube-nocookie.com/embed/${this.videoId}?rel=0&showinfo=0`;
            resolve(true);
          }
          resolve(false);
        });
      },
    },
  };
</script>

<style scoped lang="scss">
  .youtube {
    border-radius: 4px;
    cursor: pointer;

    .frame {
      top: 0;
      left: 0;
    }
    .mdiYoutube {
      justify-self: center;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -36px;
      margin-top: -36px;
      z-index: 1;
    }
    &:hover .mdiYoutube {
      color: $youtube-red;
      opacity: 1;
    }
  }
</style>
