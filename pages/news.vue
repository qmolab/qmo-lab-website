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
  import HeroLayout from '@/components/layouts/HeroLayout.vue';
  import AnnouncementsCard from '@/components/AnnouncementsCard.vue';

  export default {
    components: {
      HeroLayout,
      AnnouncementsCard,
    },
    asyncData({ store }) {
      return {
        announcements: store.state.news.announcements,
      };
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
