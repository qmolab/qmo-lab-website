<template>
  <HeroLayout class="newsPage">
    <h1>QMO Lab News Archive</h1>
    <AnnouncementsCard :announcements="announcements" />
  </HeroLayout>
</template>

<script>
  import HeroLayout from '@/components/layouts/HeroLayout.vue';
  import AnnouncementsCard from '@/components/AnnouncementsCard.vue';

  export default {
    components: {
      HeroLayout,
      AnnouncementsCard,
    },
    async asyncData({ $axios, $payloadURL, route }) {
      const announcements = await $axios.$get('/news/preview/');
      return { announcements };
    },
    head() {
      return {
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'QMO Lab News and Announcements',
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'QMO',
          },
        ],
      };
    },
  };
</script>
