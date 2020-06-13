<template>
  <v-sheet
    class="ma-0 pa-4 rel rounded"
    light
    color="#FAEBD7"
    style="min-height: 100%;"
    tile
  >
    <v-container>
      <h2 class="headline">{{ title }}</h2>
      <h3 class="font-weight-light">{{ subtitle }}</h3>
      <DynamicHtml
        class="mt-8"
        :page-content="content"
        image-category="research"
        figures
      />
      <div v-if="youtube" class="videoPlayerContainer mx-auto mt-4">
        <YoutubeEmbed :video-id="youtube" />
      </div>
    </v-container>
    <span class="fold" />
    <v-btn
      v-if="close"
      icon
      x-large
      color="error"
      class="closeButton"
      @click="close()"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-progress-circular
      v-if="loading"
      color="primary"
      size="72"
      indeterminate
      class="progress"
    />
  </v-sheet>
</template>

<script>
  import YoutubeEmbed from '@/components/lib/YoutubeEmbed.vue';
  import DynamicHtml from '@/components/DynamicHtml.vue';
  export default {
    components: { YoutubeEmbed, DynamicHtml },
    props: {
      id: { type: String, required: true },
      close: { type: Function, default: undefined },
    },
    data: () => ({
      title: '',
      subtitle: '',
      content: '',
      youtube: '',
      loading: true,
    }),
    mounted() {
      this.update();
    },
    methods: {
      async update() {
        const item = await this.$axios.$get('/research/routes/route/', {
          params: { title: this.id },
        });
        this.title = this.id.replace(/_/g, ' ');
        this.subtitle = item.subtitle;
        this.content = item.content;
        this.youtube = item.youtube;
        this.loading = false;
      },
    },
  };
</script>

<style lang="scss" scoped>
  $foldSize: 48px;
  .fold {
    position: absolute;
    border-style: solid;
    bottom: 0;
    right: 0;
    border-width: $foldSize $foldSize 0 0;
    border-color: $primary $black $black $black;
  }
  .closeButton {
    position: absolute;
    top: 0;
    right: 0;
    margin: 8px;
  }
  .progress {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -36px;
    margin-top: -36px;
  }
</style>
