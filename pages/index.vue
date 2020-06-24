/* eslint-disable */
<template>
  <div class="homePage">
    <v-row>
      <v-col class="pa-4 body-1 text--secondary">
        <p>
          At atomic and sub-atomic scales, quantum mechanics describes reality.
          The theory of quantum mechanics is among the most successful
          scientific theories, exhibiting not one single contradiction in nearly
          a century since its inception. Yet, when atoms are combined to form
          highly complex structures - such as synthetic quantum materials or
          biological macro-molecules - the connection between microscopic
          phenomena and emergent macroscopic behaviors is lost. Indeed,
          hierarchical complexity defies a unified physical description. Gabor
          Research Laboratories aim to discover new phenomena - both quantum and
          classical - that may arise within and at the interface between quantum
          condensed matter and complex biological systems. As scientists at the
          boundary of physics and biology, we have a unique opportunity to unite
          our understanding of quantum mechanics with the complex and diverse
          biophysical properties and behaviors of life.
        </p>
      </v-col>
    </v-row>
    <AnnouncementsCard :announcements="announcements" />
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
      return { announcements };
    },
    ...headAndTitle(
      '',
      '',
      `QMO Lab @ UCR Home Page. The Quantum Materials Optoelectronics Lab is an Experimental Condensed Matter Research Research Group at UCR. The QMO lab aims to discover new quantum phenomena in atomically thin two-dimensional (2D) electronic materials including graphene, hexagonal boron nitride, and layered transition metal dichalcogenides (TMDs).`,
      'Home'
    ),
  };
</script>
