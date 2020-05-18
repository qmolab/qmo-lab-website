<template>
  <v-container class="publicationsPage">
    <h1 class="hidden-sm-and-down">Selected Publications</h1>
    <v-row>
      <v-col v-for="(item, i) in mainItems" :key="i" cols="12" sm="6" lg="4">
        <v-sheet class="stretchCard pb-12">
          <v-list-item>
            <v-list-item-avatar
              size="40"
              color="primary"
              style="border: 2px solid; background-color: unset !important;"
            >
              '{{ item.year.substring(2) }}
            </v-list-item-avatar>
            <v-list-item-content>
              <div class="subtitle-1">{{ item.authors }}</div>
            </v-list-item-content>
          </v-list-item>

          <BaseImage
            class="mt-2 px-3 aspect-667"
            :src="item.img"
            :webp="item.webp"
            :alt="item.alt"
            :title="item.title"
            :aspect-ratio="3 / 2"
          >
            <div class="textOnImage px-4 subtitle-2">
              {{ item.reference }}
            </div>
          </BaseImage>
          <div class="pt-1 px-4 title">
            <DynamicHtml :html="item.title" />
          </div>
          <div class="pa-4 summary">
            <DynamicHtml :html="item.description" />
          </div>
          <div class="actions px-2">
            <v-spacer />
            <v-btn text disabled>
              Share
            </v-btn>

            <v-btn text :href="item.href" target="_blank" rel="noopener">
              Read more
              <v-icon right color="secondary">{{ mdiOpenInNew }}</v-icon>
            </v-btn>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
    <br />
    <v-sheet class="pa-3">
      <h2 class="title">Additional Publications and Patents</h2>
      <v-row>
        <v-col v-for="(item, i) in additionalItems" :key="i" cols="12" sm="6">
          <v-card raised class="stretchCard">
            <div class="pt-1 px-4 title">
              <DynamicHtml :html="item.title" />
            </div>
            <div class="pt-1 px-4 subtitle-1">
              <DynamicHtml :html="item.authors" />
            </div>
            <div class="pa-4 summary">
              <DynamicHtml :html="item.reference" />
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
  import { mdiOpenInNew } from '@mdi/js';
  import BaseImage from '@/components/BaseImage.vue';
  import DynamicHtml from '@/components/DynamicHtml.vue';
  export default {
    components: {
      BaseImage,
      DynamicHtml,
    },
    data() {
      return {
        mdiOpenInNew,
        mainItems: [
          {
            title:
              'Multiple parameter dynamic photoresponse microscopy for data-intensive optoelectronic measurements of van der Waals heterostructures',
            authors: 'T.B. Arp, N.M. Gabor',
            reference: 'Rev. Sci. Instr. 90, 023702 (2019)',
            description:
              'Our groundbreaking technique combines ultrafast lasers, scanning optics, hardware automation and advanced data analysis to understand the behavior of 2D heterostructures.',
            href: 'https://doi.org/10.1063/1.5085007',
            img: require('~/assets/images/publications/phase_space_th.png?resize'),
            webp: require('~/assets/images/publications/phase_space_th.png?webp'),
            alt: 'MPDPM',
            year: '2019',
          },
          {
            title:
              'Electron–hole liquid in a van der Waals heterostructure photocell at room temperature',
            authors: 'T.B. Arp, D. Pleskot, N.M. Gabor et al.',
            reference: 'Nat. Photon. 13, 245–250 (2019)',
            description: `At high densities electrons and holes can condense into an electron hole liquid droplet, an exotic phase of matter that, in 2D MoTe<sub>2</sub>, can be created at room temperature.`,
            href: 'https://www.nature.com/articles/s41566-019-0349-y',
            img: require('~/assets/images/publications/e-h_small.jpg?resize'),
            webp: require('~/assets/images/publications/e-h_small.jpg?webp'),
            alt: 'Electron-hole liquid',
            year: '2019',
          },
          {
            title: 'Giant intrinsic photoresponse in pristine graphene',
            authors: 'Q. Ma, N.M. Gabor et al.',
            reference: 'Nat. Nano. 14, 145-150 (2019)',
            description:
              'Ultra-clean, low-defect graphene devices are shown to exhibit an intrinsic photocurrent which occurs exclusively at the charge-neutrality point.',
            href: 'https://www.nature.com/articles/s41565-018-0323-8',
            img: require('~/assets/images/publications/graphene_cool_low_dof_th.png?resize'),
            webp: require('~/assets/images/publications/graphene_cool_low_dof_th.png?webp'),
            alt: 'Graphene Sheets',
            year: '2019',
          },
          {
            title:
              'Electron quantum metamaterials in van der Waals heterostructures',
            authors: 'J.C.W. Song and N.M. Gabor',
            reference: 'Nat. Nano. 13, 986-993 (2018)',
            description:
              'This Perspective describes recent advances in using twisted atomic layers to engineer nanoscale electronic devices and offers insight into future prospects for innovation.',
            href: 'https://www.nature.com/articles/s41565-018-0294-9',
            img: require('~/assets/images/publications/graphene_twist_web.png?resize'),
            webp: require('~/assets/images/publications/graphene_twist_web.png?webp'),
            alt: 'Graphene Sheet',
            year: '2018',
          },
          {
            title:
              'Hot carrier-enhanced interlayer electron–hole pair multiplication in 2D semiconductor heterostructure photocells',
            authors: 'F. Barati, M.J. Grossnickle, N.M. Gabor, et al.',
            reference: 'Nat. Nano. 12, 1134-1139 (2017)',
            description:
              'Atomic layer heterostructures are shown to greatly increase the efficiency of amplifying small signals and light-to-electricity conversions.',
            href:
              'https://www.nature.com/nnano/journal/vaop/ncurrent/full/nnano.2017.203.html',
            img: require('~/assets/images/publications/impact.png?resize'),
            webp: require('~/assets/images/publications/impact.png?webp'),
            alt: 'Electron-hole pair multiplication',
            year: '2017',
          },
          {
            title:
              'Natural Regulation of Energy Flow in a Green Quantum Photocell',
            authors: 'T.B. Arp, N.M. Gabor, et al.',
            reference: 'Nano Lett. 16(12), 7461-7466 (2016)',
            description:
              'A revolutionary design principle for solar energy harvesting quantum photocells may also reveal the predominance of green plants on Earth.',
            href: 'http://pubs.acs.org/doi/full/10.1021/acs.nanolett.6b03136',
            img: require('~/assets/images/publications/green_th.jpg?resize'),
            webp: require('~/assets/images/publications/green_th.jpg?webp'),
            alt: 'Green Quantum Photocell',
            year: '2016',
          },
          {
            title:
              'Nd:AlN polycrystalline ceramics: A candidate media for tunable, high energy, near IR lasers',
            authors: 'A.T. Wieg, M.J. Grossnickle, N.M. Gabor, et al.',
            reference: 'Appl. Phys. Lett. 109, 121901 (2016)',
            description:
              'Excitation-emission spectroscopy is carried out on Nd:AlN ceramics to determine their suitability as next-generation laser materials.',
            href:
              'http://scitation.aip.org/content/aip/journal/apl/109/12/10.1063/1.4962829',
            img: require('~/assets/images/publications/ndaln.png?resize'),
            webp: require('~/assets/images/publications/ndaln.png?webp'),
            alt: 'Nd:AlN polycrystalline ceramics',
            year: '2016',
          },
          {
            title:
              'Tuning ultrafast electron thermalization pathways in a van der Waals heterostructure',
            authors: 'Q. Ma, N.M. Gabor, et al.',
            reference: 'Nature Phys. 12, 455-459 (2016)',
            description:
              'Bias voltage and optical excitation are used to tune thermalization pathways in an atomically thin graphene-boron nitride-graphene heterostructure.',
            href:
              'http://www.nature.com/nphys/journal/vaop/ncurrent/full/nphys3620.html',
            img: require('~/assets/images/publications/trions.jpg?resize'),
            webp: require('~/assets/images/publications/trions.jpg?webp'),
            alt: 'Trions',
            year: '2016',
          },
          {
            title: 'Lift Off for Graphene',
            authors: 'N.M. Gabor',
            reference: 'Nature Photon. 9, 419-420 (2015)',
            description:
              'A Nature News and Views article discussing recent experimental work on the direct propulsion and levitation of graphene.',
            href:
              'http://www.nature.com/nphoton/journal/v9/n7/full/nphoton.2015.109.html',
            img: require('~/assets/images/publications/R3.jpg?resize'),
            webp: require('~/assets/images/publications/R3.jpg?webp'),
            alt: 'Lift Off for Graphene',
            year: '2015',
          },
          {
            title:
              'Impact Excitation and Electron-Hole Multiplication in Graphene and Carbon Nanotubes',
            authors: 'N.M. Gabor',
            reference: 'Acc. Chem. Res. 46 (6), 1348-1357 (2013)',
            description:
              'A review article describing recent experimental and theoretical work that focuses on graphene and carbon nanotubes for solar energy harvesting applications.',
            href: 'http://pubs.acs.org/doi/abs/10.1021/ar300189j',
            img: require('~/assets/images/publications/1nodes.jpg?resize'),
            webp: require('~/assets/images/publications/1nodes.jpg?webp'),
            alt: 'Impact Excitation and Electron-Hole Multiplication',
            year: '2013',
          },
          {
            title:
              'Ultrafast Photocurrent Measurement of the Escape Time of Electrons and Holes from Carbon Nanotube p-i-n Photodiodes',
            authors: 'N.M. Gabor, et al.',
            reference: 'Phys. Rev. Lett. 108, 087404 (2012)',
            description:
              'Direct time-of-flight measurements yield the time required for electrons and holes to escape a photodiode composed of an individual carbon nanotube.',
            href: 'http://prl.aps.org/abstract/PRL/v108/i8/e087404',
            img: require('~/assets/images/publications/2escape.jpg?resize'),
            webp: require('~/assets/images/publications/2escape.jpg?webp'),
            alt: 'Ultrafast Photocurrent Measurements',
            year: '2012',
          },
          {
            title: 'Hot Carrier-Assisted Intrinsic Photoresponse in Graphene',
            authors: 'N.M. Gabor, et al.',
            reference: 'Science 334, 648 (2011)',
            description:
              'Photo-excited charge carriers in graphene are found to enhance thermal energy transport leading to an efficient photo-thermoelectric effect.',
            href: 'http://www.sciencemag.org/content/334/6056/648.short',
            img: require('~/assets/images/publications/3hotcarriers.jpg?resize'),
            webp: require('~/assets/images/publications/3hotcarriers.jpg?webp'),
            alt: 'Hot Carrier-Assisted Intrinsic Photoresponse in Graphene',
            year: '2011',
          },
          {
            title: 'Annealing a Magnetic Cactus Into Phyllotaxis',
            authors: 'C. Nisoli, N.M. Gabor, et al.',
            reference: 'Phys. Rev. E 81, 046107 (2010)',
            description:
              'A cylindrical lattice of repulsive particles can reproduce phyllotaxis; experimental and numerical evidence shows that the phyllotactic lattice is actually an energetic ground state.',
            href:
              'http://journals.aps.org/pre/abstract/10.1103/PhysRevE.81.046107',
            img: require('~/assets/images/publications/6phyllo.jpg?resize'),
            webp: require('~/assets/images/publications/6phyllo.jpg?webp'),
            alt: 'Annealing a Magnetic Cactus Into Phyllotaxis',
            year: '2010',
          },
          {
            title:
              'Extremely Efficient Multiple Electron-Hole Pair Generation in Carbon Nanotube Photodiodes',
            authors: 'N.M. Gabor, et al.',
            reference: 'Science 325, 1367 (2009)',
            description: `High-energy electrons and holes in carbon nanotube photodiodes are found to efficiently generate multiple electron-hole pairs.`,
            href: 'http://www.sciencemag.org/content/325/5946/1367',
            img: require('~/assets/images/publications/4multiplication.jpg?resize'),
            webp: require('~/assets/images/publications/4multiplication.jpg?webp'),
            alt: `Extremely Efficient Multiple Electron-Hole Pair Generation in Carbon Nanotube Photodiodes`,
            year: '2009',
          },
          {
            title: 'Static and Dynamical Phyllotaxis in a Magnetic Cactus',
            authors: 'C. Nisoli, N.M. Gabor, et al.',
            reference: 'Phys. Rev. Lett. 102, 186103 (2009)',
            description:
              'Phyllotactic spirals, commonly observed in the spines of a cactus, are found to be the energetic minimum of a dynamic system of repelling dipoles on a cylinder.',
            href: 'http://prl.aps.org/abstract/PRL/v102/i18/e186103',
            img: require('~/assets/images/publications/5phyllotaxis.jpg?resize'),
            webp: require('~/assets/images/publications/5phyllotaxis.jpg?webp'),
            alt: 'Static and Dynamical Phyllotaxis in a Magnetic Cactus',
            year: '2009',
          },
        ],
        additionalItems: [
          {
            title:
              'Long-lived valley polarization of intravalley trions in monolayer WSe<sub>2</sub>&nbsp;',
            authors: 'A. Singh, D. Pleskot, N.M. Gabor, et al.',
            reference: 'Phys. Rev. Lett. 117, 257402 (2016)',
            href: '',
          },
          {
            title:
              'Trion Formation Dynamics in Monolayer Transition Metal Dichalcogenides',
            authors: 'A. Singh, D. Pleskot, N.M. Gabor, et al.',
            reference: 'Phys. Rev. B 93, 041401 (2016)',
            href: '',
          },
          {
            title: 'Graphene-Based Thermopile for Thermal Imaging Applications',
            authors: 'A. Hsu, N.M. Gabor, et al.',
            reference: 'Nano Lett., 2015 15(11) 7211-7216',
            href: '',
          },
          {
            title: 'Competing Channels for Hot-Electron Cooling in Graphene',
            authors: 'Q. Ma, N.M. Gabor, et al.',
            reference: 'Phys. Rev. Lett. 112, 247401 (2014)',
            href: '',
          },
          {
            title:
              'Photoresponse of an Electrically Tunable Ambipolar Graphene Infrared Thermocouple',
            authors: 'P. Herring, A. Hsu, N.M. Gabor, et al.',
            reference: 'Nano Lett., 2014 14(2), 901-907',
            href: '',
          },
          {
            title:
              'Graphene Photothermoelectric Photodetector and Hot Carrier Generator',
            authors: 'P. Jarillo-Herrero, N.M. Gabor, et al.',
            reference: 'U.S. patent application 61576427, pending (2012)',
            href: '',
          },
          {
            title:
              'Extremely Efficient and Ultrafast: Electrons, Holes, and their Interactions in   the Carbon Nanotube PN Junction',
            authors: 'N.M. Gabor',
            reference: 'Cornell University Dissertation (2010)',
            href: '',
          },
          {
            title:
              'Photo-thermoelectric Effect at a Graphene Interface Junction',
            authors:
              'X. Xu, N.M. Gabor, J. Alden, A. van der Zande, P.L. McEuen',
            reference: 'Nano Lett., 2010 10(2), 562-566',
            href: '',
          },
          {
            title:
              'Terahertz Time-Domain Measurement of Ballistic Electron Resonance in a Single-Walled Carbon Nanotube',
            authors: 'Z. Zhong, N.M. Gabor, J. Sharping, A. Gaeta, P.L. McEuen',
            reference: 'Nat. Nanotechnology 3, 201 (2008)',
            href: '',
          },
          {
            title: 'Transport in Carbon Nanotube p-i-n Diodes',
            authors: 'K. Bosnick, N.M. Gabor, P.L. McEuen',
            reference: 'Applied Physics Letters 89, 163121 (2006)',
            href: '',
          },
        ],
      };
    },
  };
</script>
