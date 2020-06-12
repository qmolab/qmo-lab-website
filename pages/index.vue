/* eslint-disable */
<template>
  <div class="homePage">
    <v-row>
      <v-col class="pa-4 font-weight-light" style="opacity: 0.9;">
        <p>
          Quantum mechanics is a theoretical description of reality that has
          been used to understand numerous phenomena at atomic and subatomic
          scales. It is among the most successful scientific theories,
          exhibiting not one single contradiction in nearly a century since its
          inception. In the coming decades, the discovery of quantum phenomena
          in various scientific realms promises to revolutionize science,
          technology, and society. In biology, the quantum effects of
          photosynthesis are still being unraveled, while the miniaturization of
          integrated circuits forces us to confront quantum mechanics head-on.
          As scientists, we have a unique opportunity to explore quantum
          mechanics in the laboratory and unravel the bizarre and unintuitive
          behavior that emerges in atomic-scale systems.
        </p>
        <p>
          The QMO lab aims to discover new quantum phenomena in atomically thin
          two-dimensional (2D) electronic materials including graphene,
          hexagonal boron nitride, and layered transition metal dichalcogenides
          (TMDs). These materials, many of which can be separated into few or
          single atomic layers, exhibit quasi-low dimensionality that may lead
          to strongly correlated electron behavior. Among correlated electronic
          materials, true 2D materials provide the distinct advantage that they
          are one atom thick, thus allowing the utilization of techniques
          generally applied to small atomic ensembles, such as laser-cooling and
          optical cavity coupling. By incorporating these materials into
          nanoscale electronic devices, we envision a distinct field of research
          that explores atomically thin condensed matter systems using precision
          techniques and concepts employed in atomic, molecular, and optical
          physics.
        </p>
      </v-col>
    </v-row>
    <AnnouncementsCard :announcements="announcements" />
  </div>
</template>

<script>
  import AnnouncementsCard from '@/components/AnnouncementsCard.vue';

  export default {
    components: {
      AnnouncementsCard,
    },
    async asyncData({ $axios, $payloadURL, route }) {
      // if generated and works as client navigation, fetch previously saved static JSON payload
      // if (process.static && process.client && $payloadURL)
      //   return await $axios.$get($payloadURL(route));
      // const olderAnnouncements = await $axios.$get('/news/offset/');
      const announcements = await $axios.$get('/news/preview/');
      return { announcements };
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
