<template>
  <v-row cols="12">
    <v-col
      v-for="video in videos"
      :key="video"
      :align="alignment"
      :justify="justify"
    >
      <ImageButton
        :src="'https://img.youtube.com/vi/' + video + '/default.jpg'"
        alt="video alt"
        title="video title"
        max-height="90"
        class="videoGalleryVideoCard"
        @clicked="selectVideo(video)"
        ><v-icon class="youtubeIcon">mdi-youtube</v-icon></ImageButton
      >
    </v-col>
  </v-row>
</template>

<script>
  import ImageButton from '@/components/ImageButton.vue';
  export default {
    name: 'VideoGalleryPagination',
    components: { ImageButton },
    props: {
      videos: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        playerWidth: 640,
        playerHeight: 360,
        alignment: 'left',
        justify: false,
      };
    },
    computed: {},
    methods: {
      selectVideo(videoId) {
        this.$emit('selected', videoId);
      },
    },
  };
</script>

<style scoped lang="scss">
  .videoGalleryVideoCard {
    max-width: 160px;
    overflow: hidden;
    .youtubeIcon {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 20px;
      width: 24px;
      margin-top: -10px;
      margin-left: -12px;
    }
    &.on-hover {
      .youtubeIcon {
        color: #f00;
      }
    }
    .videoGalleryVideoImage {
      border-radius: 4px;
      overflow: hidden;
    }
  }
</style>
