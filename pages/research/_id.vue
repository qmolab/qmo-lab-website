<template>
  <v-sheet class="researchWriteupPage mt-8 pa-4">
    <h2 class="headline">{{ title }}</h2>
    <h3 class="font-weight-light">{{ subtitle }}</h3>
    <DynamicHtml
      class="my-8"
      :page-content="content"
      image-category="research"
    />
    <div v-if="youtube" class="videoPlayerContainer mx-auto mt-4">
      <YoutubeEmbed :video-id="youtube" />
    </div>
  </v-sheet>
</template>

<script>
  import YoutubeEmbed from '@/components/lib/YoutubeEmbed.vue';
  import DynamicHtml from '@/components/DynamicHtml.vue';

  export default {
    components: { YoutubeEmbed, DynamicHtml },
    async asyncData({ $axios, payload, params /* $payloadURL, route */ }) {
      if (payload)
        return {
          title: params.id.replace(/_/g, ' '),
          subtitle: payload.subtitle,
          content: payload.content,
          youtube: payload.youtube,
        };
      // else if (process.static && process.client && $payloadURL)
      //   return await $axios.$get($payloadURL(route));
      else {
        const item = await $axios.$get('/research/routes/route/', {
          params: { title: params.id },
        });
        return {
          title: params.id.replace(/_/g, ' '),
          subtitle: item.subtitle,
          content: item.content,
          youtube: item.youtube,
        };
      }
    },
  };
</script>
