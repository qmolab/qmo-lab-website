<template>
  <v-container class="researchPage">
    <BreadCrumb />
    <h1 class="heading">{{ title }}</h1>
    <h2 class="light">{{ subtitle }}</h2>
    <div>
      <div v-for="(item, i) in content" :key="i" class="pr-4">
        <p v-if="typeof item === 'string'"><DynamicHtml :html="item" /></p>
        <StoreImage
          v-else
          :class="`my-1 float-${
            item.float && item.float === 'right' ? 'r ml-4' : 'l mr-4'
          }`"
          category="images"
          sub-category="research"
          :item-id="item.img"
          :width="item.width"
          :height="item.height"
          max-width="25%"
        />
      </div>
    </div>
    <div v-if="youtube" class="videoPlayerContainer mx-auto mt-4">
      <YoutubeEmbed :video-id="youtube" />
    </div>
  </v-container>
</template>

<script>
  import YoutubeEmbed from '@/components/lib/YoutubeEmbed.vue';
  import BreadCrumb from '@/components/lib/BreadCrumb.vue';
  import StoreImage from '@/components/StoreImage.vue';
  import DynamicHtml from '@/components/DynamicHtml.vue';

  export default {
    components: { BreadCrumb, StoreImage, DynamicHtml, YoutubeEmbed },
    async asyncData({ $axios, payload, params /* $payloadURL, route */ }) {
      if (payload)
        return {
          title: params.id.replace(/_/g, ' '),
          subtitle: payload.subtitle,
          content: JSON.parse(payload.content),
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
          content: JSON.parse(item.content),
          youtube: item.youtube,
        };
      }
    },
  };
</script>
