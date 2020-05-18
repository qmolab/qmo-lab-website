<template>
  <v-container class="thesisPage">
    <BreadCrumb />
    <h1 class="heading">QMO Lab Dissertations: {{ author }}</h1>
    <v-row class="mt-8">
      <v-col cols="4" style="max-width: 200px;">
        <StoreImage category="members" sub-category="members" :item-id="img" />
      </v-col>
      <v-col class="heading">
        <h2>{{ title }}</h2>
        <span class="subtitle-1">By {{ author }}</span>
      </v-col>
    </v-row>
    <p class="mt-8">{{ summary }}</p>
  </v-container>
</template>

<script>
  import BreadCrumb from '@/components/lib/BreadCrumb.vue';
  import StoreImage from '@/components/StoreImage.vue';
  export default {
    components: { BreadCrumb, StoreImage },
    async asyncData({ $axios, payload, params /* $payloadURL, route */ }) {
      if (payload)
        return {
          title: payload.title,
          author: params.id.replace(/_/g, ' '),
          summary: payload.summary,
          img: payload.img,
        };
      // else if (process.static && process.client && $payloadURL)
      //   return await $axios.$get($payloadURL(route));
      else {
        const item = await $axios.$get('/theses/routes/route/', {
          params: { author: params.id },
        });
        return {
          ...item,
          author: params.id.replace(/_/g, ' '),
        };
      }
    },
  };
</script>
