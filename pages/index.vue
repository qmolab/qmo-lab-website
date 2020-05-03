/* eslint-disable */
<template>
  <HeroLayout class="homePage">
    <v-row>
      <v-col><h1>QMO Lab</h1></v-col>
    </v-row>
    <v-row>
      <v-col v-html="aboutText" />
    </v-row>
    <AnnouncementsCard
      :announcements="announcements"
      title="QMO LAB NEWS"
      text="For More QMO Lab Highlights, Please See Our Publications Or Visit The News Archive."
      :max-items="3"
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
    data() {
      return {
        aboutText: this.$store.state.index.aboutText,
      };
    },
    computed: {
      announcements() {
        return this.$store.state.news;
      },
    },
    head() {
      return {
        title: 'Home',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'QMO Lab @ UCR',
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
