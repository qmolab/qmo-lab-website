<template>
  <v-flex xs12 sm12 md12 style="margin: auto;">
    <AboutCard />
    <AnnouncementsCard
      :announcements="announcements"
      title="QMO LAB NEWS"
      text="For More QMO Lab Highlights, Please See Our Publications Or Visit The News Archive."
    />
  </v-flex>
</template>

<script>
  import AboutCard from '@/components/AboutCard.vue';
  import AnnouncementsCard from '@/components/AnnouncementsCard.vue';

  export default {
    components: {
      AboutCard,
      AnnouncementsCard,
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
    layout: 'withHero',
  };
</script>
