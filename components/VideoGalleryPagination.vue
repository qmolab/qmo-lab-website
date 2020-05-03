<template>
  <v-row cols="12">
    <v-col
      v-for="video in videos"
      :key="video"
      :align="alignment"
      :justify="justify"
    >
      <BaseImage
        :src="'https://img.youtube.com/vi/' + video + '/default.jpg'"
        alt="video alt"
        title="video title"
        max-height="90"
        :class="{
          videoGalleryVideoCard: true,
          selected: video === currentVideo,
        }"
        :disabled="video === currentVideo"
        :link="video !== currentVideo"
        @click="selectVideo(video)"
      >
        <v-icon class="mdiYoutube">{{ mdiYoutube }}</v-icon>
      </BaseImage>
    </v-col>
  </v-row>
</template>

<script>
  import { mdiYoutube } from '@mdi/js';
  import BaseImage from '@/components/BaseImage.vue';
  export default {
    name: 'VideoGalleryPagination',
    components: { BaseImage },
    props: {
      videos: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        alignment: 'left',
        justify: false,
        mdiYoutube,
        currentVideo: undefined,
      };
    },
    computed: {},
    methods: {
      selectVideo(videoId) {
        this.currentVideo = videoId;
        this.$emit('selected', videoId);
      },
    },
  };
</script>

<style scoped lang="scss">
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
    .videoGalleryVideoImage {
      border-radius: 4px;
    }
  }
</style>
