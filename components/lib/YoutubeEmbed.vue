<template>
  <div
    class="link rounded fill-w fill-h rel no-overflow"
    @click="isLoaded = true"
  >
    <v-fade-transition>
      <v-img v-if="!isLoaded" :src="thumbSource" :aspect-ratio="16 / 9">
        <v-icon class="mdiYoutube" :size="72">
          $youtube
        </v-icon>
      </v-img>
      <iframe
        v-else
        frameborder="0"
        allow="encrypted-media"
        allowfullscreen=""
        :src="videoSource"
        class="abs t0 l0 fill-w fill-h"
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
        if (this.videoId.length !== 0) {
          const y = 'https://img.youtube.com/vi';
          this.thumbSource = y + '/' + this.videoId + '/default.jpg';
          this.videoSource = `https://www.youtube-nocookie.com/embed/${this.videoId}?rel=0&showinfo=0`;
        }
      },
    },
  };
</script>
