<template>
  <v-sheet class="ma-0 pa-4 rel rounded fill-min-h" tile>
    <v-container>
      <h2 class="text-h5 text-capitalize">{{ title }}</h2>
      <h3 class="font-weight-light">{{ subtitle }}</h3>
      <DynamicHtml
        class="mt-8"
        :page-content="content"
        image-category="research"
        figures
      />
      <div
        v-if="youtube"
        class="videoPlayerContainer no-overflow rounded mx-auto mt-4"
      >
        <YoutubeEmbed :video-id="youtube" />
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
  import YoutubeEmbed from '@/components/lib/YoutubeEmbed.vue';
  import DynamicHtml from '@/components/DynamicHtml.vue';
  export default {
    components: { YoutubeEmbed, DynamicHtml },
    props: {
      id: { type: String, required: true },
      title: { type: String, required: true },
      subtitle: { type: String, required: true },
      content: { type: String, required: true },
      youtube: { type: String, default: undefined },
    },
  };
</script>
