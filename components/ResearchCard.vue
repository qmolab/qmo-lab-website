<template>
  <v-sheet
    class="ma-0 pa-4 rel rounded"
    light
    color="#FAEBD7"
    style="min-height: 100%;"
    tile
  >
    <v-fade-transition>
      <v-progress-circular
        v-if="loading"
        color="primary"
        size="72"
        indeterminate
        class="progressCenterAbs"
      />
      <v-container v-else>
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
    </v-fade-transition>
    <span class="fold" :style="foldStyle" @click="foldClick()" />
    <v-btn
      v-if="close"
      icon
      x-large
      color="error"
      class="closeButton"
      @click="close()"
    >
      <v-icon>$mdiClose</v-icon>
    </v-btn>
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
      foldStyle: undefined,
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
        setTimeout(() => (this.loading = false));
      },
      foldClick() {
        this.foldStyle = 'border-width: 50vw 50vw 0 0;';
        setTimeout(() => {
          this.foldStyle = undefined;
          this.close();
        }, 200);
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
    transition: border-width 0.28s ease;
    &:hover {
      border-width: (2 * $foldSize) (2 * $foldSize) 0 0;
    }
  }
  .closeButton {
    position: absolute;
    top: 0;
    right: 0;
    margin: 8px;
  }
</style>
