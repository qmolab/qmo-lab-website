<template>
  <div class="newsPage">
    <AnnouncementsCard :announcements="announcements" />
  </div>
</template>

<script>
  import AnnouncementsCard from '@/components/AnnouncementsCard.vue';

  export default {
    components: { AnnouncementsCard },
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
