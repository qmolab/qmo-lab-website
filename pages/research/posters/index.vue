<template>
  <v-container class="researchPage">
    <h1>This is the research poster page</h1>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        posters: [
          {
            name: 'SHINES',
            title:
              'Interlayer impact excitation by hot electrons in an atomic layer semiconductor heterostructure',
            authors:
              'Fatemeh Barati, Max Grossnickle, Shanshan Su, Roger Lake, Vivek Aji, and Nathaniel M. Gabor',
            discussion: `
              Transition metal dichalcogenides (TMDs) exhibit optoelectronic
              properties that vary strongly with sample thickness. By using them
              in Van der Waals heterostructures, we can custom-build novel devices
              perfectly tailored to the study of interlayer electron-hole pair
              (exciton) generation. Efficient generation of interlayer excitons
              could be used to make novel photodetectors, electroluminescent
              emitters, or excitonic integrated circuits.
              In this work, we observed efficient multiplication of interlayer
              excitons by hot electron relaxation across the interface of a Van
              der Waals heterostructure. Electronic transport measurements showed
              large negative differential conductance, source-drain and gate
              voltage dependent interlayer current, and strong temperature
              dependence, all of which support hot electron relaxation as the
              interlayer exciton generation mechanism.
            `,
            pdf: '/posters/SHINES.pdf',
            ppt: '/posters/SHINES.pptx',
          },
          {
            name: 'CAMP',
            title:
              'Synthesis and Fabrication of Nanoscale 2-D Semiconductor Heterostructures from Graphene, h-BN, and Few-Layered Transition Metal Dichalcogenides',
            authors: 'Joshua M. Woods, Dennis Pleskot, Nathaniel Gabor',
            discussion: `
              Atomically thin semiconductors such as few-layered
              molybdenum ditelluride (MoTe<sub>2</sub>) inspire new fields of research in
              condensed matter physics as well as materials science. Both
              fields share common interest in procuring atomically thin
              semiconductors with a tunable, finite band gap. Single layer
              MoTe<sub>2</sub> exhibits a band gap in the near infrared range, allowing
              for further research into electron-hole pairs in a 2D setting. Like
              other transition metal dichalcogenides (TMD), MoTe<sub>2</sub> exhibits a
              transition from an indirect band gap to a direct band gap as the
              material reaches the monolayer limit. In this work, we have
              successfully manufactured two and three layered MoTe<sub>2</sub>
              heterostructures by micro-mechanical exfoliation and semi-dry
              contact alignment transfer. With selected flakes, semi-dry
              transfer contact is done by the stacking of selected flake
              specimens using a custom transfer microscope to create
              heterojunctions. Hexagonal boron nitride is used in
              heterostructure synthesis to serve as a tunneling promoter to
              graphene. After heterostructure assembly, resultant structures
              are analyzed by measuring optical and optoelectronic response.
            `,
            pdf: '/posters/CAMP.pdf',
            ppt: '/posters/CAMP.ppt',
          },
        ],
      };
    },
  };
</script>
