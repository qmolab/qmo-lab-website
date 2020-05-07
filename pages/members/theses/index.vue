<template>
  <v-container class="thesesPage">
    <BreadCrumb />
    <h1>
      QMO Lab Theses
    </h1>
    <waterfall
      id="thesisWaterfall"
      v-slot="{ item }"
      container-id="thesisWaterfall"
      :resizable="true"
      :items="memberTheses"
      :delay="150"
      :xl="3"
    >
      <ThesisCard :thesis="item" />
    </waterfall>
  </v-container>
</template>

<script>
  import BreadCrumb from '@/components/lib/BreadCrumb.vue';
  import Waterfall from '@/components/lib/VuetifyWaterfall.vue';
  import ThesisCard from '@/components/ThesisCard.vue';
  export default {
    components: { Waterfall, ThesisCard, BreadCrumb },
    data() {
      return {
        memberTheses: [
          {
            title: `Controlling Electron Flows at the Nanoscale: Spectroscopic and Optoelectronic Investigations of Laser Media, Interlayer Carrier Multiplication, and Spin Currents`,
            author: 'Maxwell Grossnickle',
            description: 'Short Description',
            longDescription: 'Long Description',
          },
          {
            title: `Optoelectronics Investigations of Electron Dynamics in 2D-TMD Semiconductor Heterostructure Photocells: From Electron-Hole Pair Multiplication to Phonon Assisted Anti-Stokes Absorption`,
            author: 'Fatemeh Barati',
            description: 'Short Description',
            longDescription: 'Long Description',
          },
          {
            title: `Strongly Interacting Electrons and Holes in Ultrathin MoTe2 Heterostructures`,
            author: 'Dennis Pleskot',
            description: 'Short Description',
            longDescription: 'Long Description',
          },
        ],
      };
    },
  };
</script>

<style scoped lang="scss">
  .thesesPage ::v-deep .v-card__title {
    word-break: break-word;
    text-transform: capitalize;
    flex-direction: column;
    align-items: stretch;
  }
</style>
