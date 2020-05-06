<template>
  <v-container>
    <div v-if="topic" class="researchPage">
      <h1>{{ topic.title }}</h1>
      <h2>{{ topic.subtitle }}</h2>
      <div v-if="topic.paragraphs">
        <div
          v-for="(item, i) in content"
          :key="i"
          class="pr-4"
          :style="item.paragraph ? '' : 'float: left;'"
        >
          <p v-if="item.paragraph" v-html="item.paragraph" />
          <BaseImage
            v-else
            :src="item.img"
            :webp="item.webp"
            :alt="item.alt"
            :width="200"
            :title="item.title"
          />
        </div>
      </div>
      <div v-else v-html="topic.description" />
      <div v-if="topic.youtube" class="videoPlayerContainer mt-4">
        <YoutubeEmbed :video-id="topic.youtube" />
      </div>
    </div>
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
        store.state.research.topics.forEach((top) => {
          if (top.title.replace(/ /g, '_').toLowerCase() === params.id) {
            topic = top;
          }
        });
        const newList = [];
        if (topic.figures && topic.paragraphs) {
          let addedParagraphs = 0;
          topic.figures.forEach((e) => {
            for (; addedParagraphs < e.after; addedParagraphs++) {
              newList.push({
                paragraph: topic.paragraphs[addedParagraphs],
              });
            }
            newList.push(e);
          });
          for (; addedParagraphs < topic.paragraphs.length; addedParagraphs++) {
            newList.push({
              paragraph: topic.paragraphs[addedParagraphs],
            });
          }
        }
        return { id: params.id, topic, content: newList };
      }
    },
  };
</script>

<style lang="scss" scoped>
  $videoPlayerHeight: 360px !default;
  $videoPlayerWidth: 640px !default;
  .videoPlayerContainer {
    margin: auto;
    overflow: hidden;
    width: $videoPlayerWidth;
    height: $videoPlayerHeight;
    border-radius: 4px;
  }
</style>
