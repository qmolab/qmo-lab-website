<template>
  <HeroPage class="homePage">
    <AboutCard />
    <AnnouncementsCard
      :announcements="announcements"
      title="QMO LAB NEWS"
      text="For More QMO Lab Highlights, Please See Our Publications Or Visit The News Archive."
    />
  </HeroPage>
</template>

<script>
  import AboutCard from '@/components/AboutCard.vue';
  import AnnouncementsCard from '@/components/AnnouncementsCard.vue';
  import HeroPage from '@/components/HeroPage.vue';

  export default {
    components: {
      AboutCard,
      AnnouncementsCard,
      HeroPage,
    },
    data() {
      return {
        announcements: [
          {
            title: 'Announcement One',
            subtitle: 'Subtitle',
            img: '',
          },
          {
            title: 'Announcement Two',
            subtitle: 'Subtitle',
            img: '',
          },
          {
            title: 'Announcement Three',
            subtitle: 'Subtitle',
            img: '',
          },
        ],
      };
    },
    head() {
      return {
        title: 'Home',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description',
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'home QMO',
          },
        ],
      };
    },
  };
</script>
