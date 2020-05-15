<template>
  <v-container>
    <BreadCrumb />
    <div v-if="topic" class="researchPage">
      <h1>{{ topic.title }}</h1>
      <h2 class="light">{{ topic.subtitle }}</h2>
      <div v-if="topic.paragraphs">
        <span v-for="(item, i) in content" :key="i" class="pr-4">
          <p v-if="item.paragraph"><DynamicHtml :html="item.paragraph" /></p>
          <BaseImage
            v-else
            :src="item.img"
            :webp="item.webp"
            :alt="item.alt"
            :width="200"
            :title="item.title"
            class="float-l my-4 mr-4"
          />
        </span>
      </div>
      <div v-else><DynamicHtml :html="topic.description" /></div>
      <div
        v-if="topic.youtube"
        class="videoPlayerContainer hide-overflow mx-auto mt-4"
      >
        <YoutubeEmbed :video-id="topic.youtube" />
      </div>
    </div>
    <div v-else>
      <h1>Sorry, we're experience technical difficulties now.</h1>
      <h2 class="light">Please try again at a later time</h2>
    </div>
  </v-container>
</template>

<script>
  import YoutubeEmbed from '@/components/lib/YoutubeEmbed.vue';
  import BreadCrumb from '@/components/lib/BreadCrumb.vue';
  import BaseImage from '@/components/BaseImage.vue';
  import DynamicHtml from '@/components/DynamicHtml.vue';

  export default {
    components: { BreadCrumb, BaseImage, DynamicHtml, YoutubeEmbed },
    async asyncData({ params, error, payload, store }) {
      return await new Promise((resolve) => {
        let topic = {};
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
        resolve({ id: params.id, topic, content: newList });
      });
    },
  };
</script>
