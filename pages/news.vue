<template>
  <HeroLayout class="newsPage">
    <AnnouncementsCard
      :announcements="announcements"
      title="QMO LAB NEWS"
      text="For More QMO Lab Highlights, Please See Our Publications or Research Pages."
      button2-text="Research"
      button2-target="/research"
    />
  </HeroLayout>
</template>

<script>
  import AnnouncementsCard from '@/components/AnnouncementsCard.vue';
  import HeroLayout from '@/components/layouts/HeroLayout.vue';

  export default {
    components: {
      AnnouncementsCard,
      HeroLayout,
    },
    asyncData({ store }) {
      return {
        announcements: store.state.news.announcements,
      };
    },
    head() {
      return {
        title: 'News',
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
