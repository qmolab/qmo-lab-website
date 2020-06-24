/* eslint-disable */
<template>
  <div class="newsPage">
    <AnnouncementsCard
      :announcements="announcements"
      :secondary-announcements="oldAnnouncements"
    />
  </div>
</template>

<script>
  import AnnouncementsCard from '@/components/AnnouncementsCard.vue';
  import headAndTitle from '@/assets/js/headAndTitle';
  export default {
    components: {
      AnnouncementsCard,
    },
    async asyncData({ $axios }) {
      const announcements = await $axios.$get('/news/preview/');
      const oldAnnouncements = await $axios.$get('/news/offset/');
      return {
        announcements: announcements.concat(oldAnnouncements),
        oldAnnouncements,
      };
    },
    ...headAndTitle('News', 'news/', `QMO Lab @ UCR News Archive Page.`),
  };
</script>
