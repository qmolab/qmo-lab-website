<template>
  <v-container>
    <div v-if="topic" class="researchPage">
      <h1>{{ topic.title }}</h1>
      <h2>{{ topic.subtitle }}</h2>
      <div v-if="topic.paragraphs">
        <p v-for="item in topic.paragraphs" :key="item" v-html="item" />
        <BaseImage
          v-for="item in topic.figures"
          :key="item.alt"
          :src="item.img"
          :webp="item.webp"
          :alt="item.alt"
          :title="item.title"
        />
      </div>
      <div v-else v-html="item.description" />
    </div>
    <YoutubeEmbed
      v-if="topic.youtube"
      :video-id="topic.youtube"
      style="height: 360px;"
    />
    <div v-else>
      <h1>Sorry, we're experience technical difficulties now.</h1>
      <h2>Please try again at a later time</h2>
    </div>
  </v-container>
</template>

<script>
  import BaseImage from '@/components/BaseImage.vue';
  import YoutubeEmbed from '@/components/lib/YoutubeEmbed.vue';

  export default {
    components: { YoutubeEmbed, BaseImage },
    asyncData({ params, error, payload, store }) {
      let topic = {};
      if (payload) return { id: params.id, topic: payload };
      else {
        store.state.research.forEach((top) => {
          if (top.title.replace(/ /g, '_').toLowerCase() === params.id) {
            topic = top;
          }
        });
        return { id: params.id, topic };
      }
    },
  };
</script>
