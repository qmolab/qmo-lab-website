import {
  mdiHome,
  mdiMicroscope,
  mdiAccountGroup,
  mdiAtomVariant,
  mdiCameraIris,
  mdiLink,
} from '@mdi/js';
import customRoutes from '~/assets/customRoutes';

export const state = () => ({
  theme: 'dark',
  eager: false,
  imageTransition: 'fade-transition',
  navLinks: {
    main: [
      {
        icon: mdiHome,
        title: 'Home',
        to: '/',
      },
      {
        icon: mdiAccountGroup,
        title: 'Members',
        to: '/members/',
      },
      {
        icon: mdiMicroscope,
        title: 'Research',
        to: '/research/',
      },
      {
        icon: mdiAtomVariant,
        title: 'Publications',
        to: '/publications/',
      },
      {
        icon: mdiCameraIris,
        title: 'Gallery',
        to: '/gallery/',
      },
      {
        icon: mdiLink,
        title: 'Links',
        to: '/links/',
      },
    ],
    hidden: [
      {
        icon: 'mdi-microscope',
        title: 'News Archive',
        to: '/news/',
      },
    ],
    ...customRoutes,
  },
  members: {
    nathanProfile: {
      first: 'Nathaniel',
      last: 'Gabor',
      nickname: 'Nathan',
      focus: 'Light and Quantum Matter',
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
      dept: 'JET Distinguished Associate Professor of Physics',
      current: true,
      level: 0,
      gradYear: 2010,
    },
    members: [
      {
        first: 'Trevor',
        last: 'Arp',
        focus: 'Magneto-optoelectronic probes of graphene',
        img: require('~/assets/images/people/Trevor1.png?resize'),
        webp: require('~/assets/images/people/Trevor1.png?webp'),
        dept: 'UCR Physics',
        current: true,
        level: 2,
        gradYear: 2020,
      },
      {
        first: 'Jacky',
        last: 'Wan',
        focus:
          'Fabrication and magneto-optoelectronics of atomic layer devices',
        img: require('~/assets/images/people/Jacky1.png?resize'),
        webp: require('~/assets/images/people/Jacky1.png?webp'),
        dept: 'UCR Physics',
        current: true,
        level: 2,
        gradYear: 2020,
      },
      {
        first: 'Jedediah',
        last: 'Kistner-Morris',
        nickname: 'Jed',
        focus: 'Fluctuations in nanoscale optoelectronic devices',
        img: require('~/assets/images/people/jed1.jpg?resize'),
        webp: require('~/assets/images/people/jed1.jpg?webp'),
        dept: 'UCR Physics',
        current: true,
        level: 2,
        gradYear: 2020,
      },
      {
        first: 'Farima',
        last: 'Farahmand',
        focus: 'Fabrication of twisted atomic layer devices',
        img: require('~/assets/images/people/farima1.png?resize'),
        webp: require('~/assets/images/people/farima1.png?webp'),
        dept: 'UCR Physics',
        current: true,
        level: 2,
        gradYear: 2020,
      },
      {
        first: 'David',
        last: 'Mayes',
        focus: 'Magneto-optoelectronic studies of nanoscale heterostructures',
        img: require('~/assets/images/people/dave1.png?resize'),
        webp: require('~/assets/images/people/dave1.png?webp'),
        dept: 'UCR Physics',
        current: true,
        level: 2,
        gradYear: 2020,
      },
      {
        first: 'Esat',
        last: 'Kilinc',
        focus: 'Data Intensive measurements of photosynthetic bacteria',
        img: require('~/assets/images/people/esat_main.png?resize'),
        webp: require('~/assets/images/people/esat_main.png?webp'),
        dept: 'UCR Physics',
        current: true,
        level: 2,
        gradYear: 2020,
      },
      {
        first: 'Abby',
        last: 'Leung',
        focus: 'Viper vision and neuro-morphic infrared photocell networks',
        img: require('~/assets/images/people/abby.jpg?resize'),
        webp: require('~/assets/images/people/abby.jpg?webp'),
        dept: 'UCR Physics',
        current: true,
        level: 4,
        gradYear: 2020,
      },
      {
        first: 'Fatemeh',
        last: 'Barati',
        focus: 'Nanoscale fabrication of quantum optoelectronic devices',
        img: require('~/assets/images/people/Fatemeh4.png?resize'),
        webp: require('~/assets/images/people/Fatemeh4.png?webp'),
        dept: 'UCR Physics',
        current: false,
        level: 3,
        gradYear: 2018,
        postDocYears: '2018-2019',
      },
      {
        first: 'Max',
        last: 'Grossnickle',
        focus: 'Nanoscale fabrication of quantum optoelectronic devices',
        img: require('~/assets/images/people/Max3.png?resize'),
        webp: require('~/assets/images/people/Max3.png?webp'),
        dept: 'UCR Physics',
        current: false,
        level: 2,
        gradYear: 2019,
      },
      {
        first: 'Dennis',
        last: 'Pleskot',
        focus:
          'Synthesis, characterization, and optoelectronics in atomic layer semiconductors',
        img: require('~/assets/images/people/Dennis.png?resize'),
        webp: require('~/assets/images/people/Dennis.png?webp'),
        dept: 'UCR Materials Science And Engineering',
        current: false,
        level: 2,
        gradYear: 2019,
      },
      {
        first: 'Joshua',
        last: 'Woods',
        focus: 'Exfoliation and synthesis of atomic layer semiconductors',
        img: require('~/assets/images/people/Josh1.png?resize'),
        webp: require('~/assets/images/people/Josh1.png?webp'),
        dept: 'UCR Materials Science And Engineering',
        current: false,
        level: 4,
        gradYear: 2018,
      },
      {
        first: 'Greyson',
        last: 'Voigt',
        focus: 'Atomic layer exfoliation automation',
        img: require('~/assets/images/people/Greyson1.jpg?resize'),
        webp: require('~/assets/images/people/Greyson1.jpg?webp'),
        dept: 'UCR Physics',
        current: false,
        level: 4,
        gradYear: 2018,
      },
      {
        first: 'Alexander',
        last: 'Speirs',
        focus: 'Photocurrent microscopy of atomic layer materials',
        img: require('~/assets/images/people/alex1.png?resize'),
        webp: require('~/assets/images/people/alex1.png?webp'),
        dept: 'UCR Physics',
        current: false,
        level: 4,
        gradYear: 2015,
      },
    ],
  },
  news: [
    {
      date: 'July 15, 2019',
      title: 'Dr. Fatemeh Barati is headed to NYU!',
      subtitle:
        'She will be joining the group of Prof. Shabani as a postdoc in the Center for Quantum Phenomena at New York University.',
      tag: 'fatemeh',
      img: require('~/assets/images/people/Fatemeh4.png?resize'),
      webp: require('~/assets/images/people/Fatemeh4.png?webp'),
    },
    {
      date: 'July 3, 2019',
      title: 'Vipers!',
      subtitle:
        'Prof. Gabor and the QMO Labs receive Office of Naval Research (ONR) funding through the HBCU/MI Award to study viper vision. This is the third major biophysics award in the QMO Labs.',
      tag: 'nathan',
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
    },
    {
      date: 'July 2, 2019',
      title:
        'Prof. Gabor is awarded the Presidential Early Career Award in Science and Engineering (PECASE)',
      subtitle:
        'The PECASE is the highest honor bestowed by the U.S. government to outstanding scientists and engineers. See more here: Presidential Early Career Award',
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
      tag: 'nathan',
    },
    {
      date: 'May 1, 2019',
      title:
        'Professor Gabor is selected as a National Academy of Sciences Kavli Frontiers Fellow',
      subtitle:
        'Dr. Gabor has been selected as a Kavli Frontiers Fellow by the National Academy of Sciences. His presentation at the 2019 Kavli Frontiers of Science conference is posted online at https://vimeo.com/321577757.',
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
      tag: 'nathan',
    },
    {
      date: 'March 22, 2019',
      title: `The electron-hole liquid paper was featured in a Nature 'News and Views' article!`,
      subtitle: `Trevor Arp, Dennis Pleskot, and Professor Gabor's paper on the electron-hole liquid was profiled in a Nature Photonics 'News and Views' article!`,
      img: require('~/assets/images/publications/e-h_small.jpg?resize'),
      webp: require('~/assets/images/publications/e-h_small.jpg?webp'),
    },
    {
      date: 'February 26, 2019',
      title: 'Max Grossnickle successfully defends thesis!',
      subtitle:
        'Max Grossnickle successfully defended his doctoral thesis! Max will take his expertise in advanced optical and optoelectronic measurements to Applied Materials in April of 2019.',
      img: require('~/assets/images/people/Max3.png?resize'),
      webp: require('~/assets/images/people/Max3.png?webp'),
      tag: 'max',
    },
    {
      date: 'February 14, 2019',
      title: 'Multiple parameter dynamic photoresponse microscopy',
      subtitle: `Trevor Arp's paper on multiple parameter dynamic photoresponse microscopy (MPDPM) is accepted as an editor's choice in Review of Scientific Instruments!`,
      img: require('~/assets/images/people/Trevor1.png?resize'),
      webp: require('~/assets/images/people/Trevor1.png?webp'),
      tag: 'trevor',
    },
    {
      date: 'February 4, 2019',
      title: `The electron-hole liquid in MoTe<sub>2</sub>`,
      subtitle:
        'Trevor Arp, Dennis Pleskot, and Professor Gabor are co-authors on a paper published in Nature Photonics! The electron hole liquid is an exotic phase of matter formed from the condensation of electrons and hole at high density. Previously accessible only in low temperature semiconductors, this work has shown that this phase can be produced at room temperature in a 2D MoTe<sub>2</sub> photocell excited by an ultrafast laser. This discovery may offer a path to room temperature optoelectronic technology that harnesses the unusual properties of collective electronic phenomena, and may open up exciting avenues for research into correlated electronic phases.',
      img: require('~/assets/images/publications/e-h_small.jpg?resize'),
      webp: require('~/assets/images/publications/e-h_small.jpg?webp'),
    },
    {
      date: 'December 5, 2018',
      title: 'Dennis Pleskot successfully defends thesis!',
      subtitle:
        'Dennis Pleskot has defended his doctoral thesis. He has been a part of the QMO Lab since 2013 and will take his fabrication expertise to Cree, Inc. in February of 2019.',
      img: require('~/assets/images/people/Dennis.png?resize'),
      webp: require('~/assets/images/people/Dennis.png?webp'),
      tag: 'dennis',
    },
    {
      date: 'November 5, 2018',
      title: 'Professor Gabor writes on next steps in 2D materials research',
      subtitle: `Professor Gabor's Perspective article "Electron quantum metamaterials in van der Waals heterostructures" has been published in Nature Nanotechnology! Read the article here or check out UCR press releases about the article at UCR Today or on Twitter.`,
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
      tag: 'nathan',
    },
    {
      date: 'August 9, 2018',
      title: 'Fatemeh Barati successfully defends thesis!',
      subtitle:
        'Fatemeh Barati has defended her doctoral thesis. She has been a part of the QMO Lab since 2013.',
      img: require('~/assets/images/people/Fatemeh4.png?resize'),
      webp: require('~/assets/images/people/Fatemeh4.png?webp'),
      tag: 'fatemeh',
    },
    {
      date: 'April 23, 2018',
      title: `Max Grossnickle's presentation “‘Spin’-tronics: the Next Generation of Computing” claims first runner-up in UCR's Grad Slam competition!`,
      subtitle:
        'Grad Slam is an annual contest to communicate research. It aims to make research accessible by providing emerging scientists and scholars with the skills to engage the public in their work. The UCR Grand Finals were also covered in the Press Enterprise.',
      img: require('~/assets/images/people/Max3.png?resize'),
      webp: require('~/assets/images/people/Max3.png?webp'),
      tag: 'max',
    },
    {
      date: 'April 17, 2018',
      title: 'Professor Nathan Gabor has been awarded tenure!',
      subtitle: 'Professor Nathan Gabor has been awarded tenure!',
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
      tag: 'nathan',
    },
    {
      date: 'March 14, 2018',
      title: 'Sifting Quantum Needles from a Nanoscale Haystack',
      subtitle: `Max Grossnickle's research highlight on the creation of a 'spin-caloritronic nano-oscillator' by two SHINES Center research groups has been published the Frontiers in Energy Research newsletter. The newsletter is developed by EFRC early career scientists who are dedicated, curious, and committed to communicating science.`,
      img: require('~/assets/images/people/Max3.png?resize'),
      webp: require('~/assets/images/people/Max3.png?webp'),
      tag: 'max',
    },
    {
      date: 'March 7, 2018',
      title:
        'Fatemeh Barati wins the Ken Hass Outstanding Student Paper Award at APS March Meeting 2018!',
      subtitle:
        'The award, given for the paper "Hot carrier-enhanced interlayer electron–hole pair multiplication in 2D semiconductor heterostructure photocells," seeks to recognize the best student paper addressing the subject of industrial applications of physics.',
      img: require('~/assets/images/people/Fatemeh4.png?resize'),
      webp: require('~/assets/images/people/Fatemeh4.png?webp'),
      tag: 'fatemeh',
    },
    {
      date: 'October 12, 2017',
      title:
        'Professor Nathan Gabor is named a 2017 CIFAR Azrieli Global Scholar!',
      subtitle:
        'Each year only fifteen early career investigators are given the prestigious appointment, which is designed to provide support in developing research networks and essential leadership skills. For more information on Professor Gabor and the CIFAR Azrieli Global Scholar program, please see this profile at UCR Today.',
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
      tag: 'nathan',
    },
    {
      date: 'October 9, 2017',
      title:
        'Paper on carrier multiplication published in Nature Nanotechnology',
      subtitle:
        'Fatemeh Barati, Max Grossnickle and Professor Nathan Gabor have coauthored a paper on carrier multiplication that has been published in Nature Nanotechnology! The paper describes a way of using atomically thin materials to significantly amplify small electrical signals and increase solar cell efficiency and is profiled in UCR Today.',
      img: require('~/assets/images/publications/impact.png?resize'),
      webp: require('~/assets/images/publications/impact.png?webp'),
    },
    {
      date: 'August 9, 2017',
      title: 'Professor Nathan Gabor becomes a RCSA Sialog Fellow!',
      subtitle:
        'Professor Gabor has been invited to Scialog: Advanced Energy Storage. The RCSA Scialog conference brings together early career faculty and scientific leaders to collaborate in high risk discovery-based research that falls outside the boundaries of traditional federal funding streams.',
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
      tag: 'nathan',
    },
    {
      date: 'July 27, 2017',
      title: 'Skyrmions come in from the cold',
      subtitle: `Max Grossnickle's article on room-temperature creation and control of skyrmions by two SHINES Center research groups has been published in the Frontiers in Energy Research Newsletter. The newsletter is developed by EFRC early career scientists who are dedicated, curious, and committed to communicating science.`,
      img: require('~/assets/images/people/Max3.png?resize'),
      webp: require('~/assets/images/people/Max3.png?webp'),
      tag: 'max',
    },
    {
      date: 'July 18, 2017',
      title:
        'Professor Nathan Gabor has received a Faculty Early Career Development (CAREER) Award from the National Science Foundation!',
      subtitle: `The CAREER Program offers the National Science Foundation's most distinguished awards in support of early-career faculty who have the potential to serve as academic role models in research and education and to lead advances in the mission of their department or organization. The awards seek to aid early-career faculty in building a firm foundation for a lifetime of leadership in integrating education and research.`,
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
      tag: 'nathan',
    },
    {
      date: 'Jun 1, 2017',
      title:
        'Three QMO Lab graduate students recognized for excellence in teaching and research!',
      subtitle:
        'Jacky Wan and Jedediah Kistner-Morris were named as the two Outstanding Teaching Assistants in Physics for 2017. Fatemeh Barati, meanwhile, has been awarded a prestigious Dissertation Year Program fellowship by UCR.',
      img: require('~/assets/icon.png?resize'),
      webp: require('~/assets/icon.png?webp'),
    },
    {
      date: 'May 5, 2017',
      title:
        'Max Grossnickle named to the editorial board of Frontiers in Energy Research',
      subtitle:
        'The newsletter seeks to illustrate the collaborative research undertaken by the DOE-funded Energy Frontier Research Centers. The QMO Lab is a part of SHINES, an EFRC led by UCR and comprised of seven other universities.',
      img: require('~/assets/images/people/Max3.png?resize'),
      webp: require('~/assets/images/people/Max3.png?webp'),
      tag: 'max',
    },
    {
      date: 'Apr 9, 2017',
      title: 'Fatemeh Barati wins the Dr. Janet M. Boyce Memorial Award!',
      subtitle: `The award is presented to ‘outstanding women in the sciences based upon strong academic research and impressive letters of recommendation' and was recognized by Dr. Isgouhi Kaloshian, chair of the CNAS committee on honors & scholarships, and Dr. Michael McKibben, CNAS divisional dean of student academic affairs.`,
      img: require('~/assets/images/people/Fatemeh4.png?resize'),
      webp: require('~/assets/images/people/Fatemeh4.png?webp'),
      tag: 'fatemeh',
    },
    {
      date: 'Feb 21, 2017',
      title: 'Professor Gabor becomes a 2017 Cottrell Scholar!',
      subtitle:
        'The Research Corporation for Science Advancement Cottrell Scholar program develops outstanding teacher-scholars who are recognized by their scientific communities for the quality and innovation of their research programs and their academic leadership skills. Outstanding candidates are admitted to the ranks of Cottrell Scholars through a stringent peer-review process based on their innovative research proposals and education programs. - rescorp.org',
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
      tag: 'nathan',
    },
  ],
  research: [
    {
      title: 'Quantum photocells for next generation solar energy harvesting',
      subtitle: ``,
      dscription: `In semiconductor photovoltaics, photoconversion efficiency is governed by a simple competition: the incident photon energy is either transferred to the crystal lattice (heat) or transferred to electrons. Quantum electronic systems promise to tip the balance in this competition by simultaneously limiting energy transfer to the lattice and enhancing energy transfer to electrons. The QMO lab explores new materials that provide the means to surpass the standard limit for photoconversion efficiency.`,
      img: require('~/assets/images/research/R1.jpg?resize'),
      webp: require('~/assets/images/research/R1.jpg?webp'),
    },
    {
      title:
        'Magneto-electronic photocurrent and photoluminescence of graphene',
      subtitle: ``,
      dscription: `It has now been well established that graphene, the prototypical 2D electronic material, exhibits novel electronic and optical behavior, yet the intrinsic photoresponse is still under considerable investigation. Recent work has shown that graphene's photoresponse is mediated by hot electronic carriers, which require long time scales to cool, thus resulting in an unusual transport regime. The QMO lab continues to explore various aspects of this transport regime.`,
      img: require('~/assets/images/research/R3.jpg?resize'),
      webp: require('~/assets/images/research/R3.jpg?webp'),
    },
    {
      title: 'Ultrafast spatio-temporal probes of atomic layer semiconductors',
      subtitle: ``,
      dscription: `Using ultrafast photocurrent and luminescence spectroscopy, the QMO lab explores the fundamental spin, valley, and charge degrees of freedom accessible in the atomic layer semiconductors. By incorporating spatially scanned laser excitation, spatio-temporal optoelectronic measurements will be utilized to prepare and probe optically induced transient exciton populations.`,
      img: require('~/assets/images/research/R2.jpg?resize'),
      webp: require('~/assets/images/research/R2.jpg?webp'),
    },
    {
      title: 'Development and design of novel nanospectroscopy techniques',
      subtitle: ``,
      dscription: `The QMO lab is very active in the area of precision optoelectronic measurements of nanoscale devices and the development of spatially and spectrally resolved optoelectronic techniques. We are currently developing ultrafast optical techniques to probe fundamental electronic behavior of quantum-confined materials such as graphene, hexagonal boron nitride, and the transition metal dichalcogenides.`,
      img: require('~/assets/images/research/R4.jpg?resize'),
      webp: require('~/assets/images/research/R4.jpg?webp'),
    },
    {
      title: 'Carrier Multiplication',
      subtitle: `By Fatemeh Barati`,
      dscription: `Carrier multiplication is a phenomenon in which a single, high-energy excited electron can promote multiple additional electrons into the conduction band of a semiconductor. In conventional photocells, an absorbed photon can only excite one electron. However, by utilizing the flexibility afforded by atomic layer materials, we can engineer electronic energy scales that allow carrier multiplication to take place.`,
      img: 0,
      paragraphs: [
        `Carrier multiplication is a phenomenon in which a single, high-energy excited electron can promote multiple additional electrons into the conduction band of a semiconductor. In conventional photocells, an absorbed photon can only excite one electron. However, by utilizing the flexibility afforded by atomic layer materials, we can engineer electronic energy scales that allow carrier multiplication to take place.`,
        `Highly efficient carrier multiplication has been demonstrated in several important nanoscale systems, including nanocrystal quantum dots, carbon nanotubes and graphene. However, such e–h pair multiplication has not been observed in 2D devices. In our research we studied electron–hole (e–h) pair multiplication in 2D heterostructures composed of monolayer MoSe<sub>2</sub> and bilayer WSe<sub>2</sub> integrated into field-effect heterojunction devices.`,
        `In plain language we can describe an energy diagram of the carrier multiplication in WSe<sub>2</sub>-MoSe<sub>2</sub> device like so: when a photon strikes the WSe<sub>2</sub> layer, it knocks loose an electron, freeing it to conduct through the WSe<sub>2</sub>. At the junction between the two materials, the electron drops down into MoSe<sub>2</sub>. The energy given off in the drop catapults a second electron from the WSe<sub>2</sub> into the MoSe<sub>2</sub>, where both electrons are free to move and generate electricity.`,
        `Speaking more technically, in the e–h pair excitation process requiring the lowest excess energy, an electron in WSe<sub>2</sub> gains the combined energy of the interlayer potential energy ΔE<sub>c</sub> and the kinetic energy of the source–drain electric field to create a low-energy electron in MoSe<sub>2</sub> plus an interlayer e–h pair (shown in Figure 1), satisfying this energy relation:`,
        `<strong>e<sub>W</sub> +K<sub>e</sub>(V<sub>SD</sub>) = e<sub>Mo</sub> +(e<sub>Mo</sub> +h<sub>W</sub>) </strong>`,
        `An optically excited e<sub>W</sub> electron in the conduction band of WSe<sub>2</sub> undergoes efficient multiplication into an e<sub>Mo</sub> electron and additional e–h pairs. By exploiting this highly efficient interlayer e–h pair multiplication process, we demonstrate near-infrared optoelectronic devices that exhibit 350% enhancement of the optoelectronic responsivity at microwatt power levels.`,
      ],
      figures: [
        {
          after: 1,
          img: require('~/assets/images/research/writeups/CM_diagram.png?resize'),
          webp: require('~/assets/images/research/writeups/CM_diagram.png?webp'),
          alt: 'MoTe2 Schematic',
          title:
            'Figure 1: Schematic of a MoTe<sub>2</sub> device and experimental measurement.',
          caption:
            'Figure 1: Schematic of a MoTe<sub>2</sub> device and experimental measurement.',
          height: '350px',
        },
      ],
      youtube: 'hBT1nNbXAS4',
    },
    {
      title: 'Electron-Hole Condensation',
      subtitle: `By Dennis Pleskot`,
      dscription: `Electrons are crucial to the modern world. They power our computers, cell phones, and almost everything else we encounter in our daily lives. The physics of electrons have been extensively studied since their discovery, but never before has there been a better opportunity to observe the quantum properties of electrons than in atomic layer materials (ALMs). ALMs are materials that are bound together by strong covalent bonds within a plane and weak van der Waals forces out of the plane, allowing them to be separated into sheets that are only a few atoms thick. Due to their very nature, these materials confine the motion of electrons, allowing for the observation of novel electronic phenomena. One such phenomenon is the condensation of electrons and holes from a non-interacting gas phase to a highly interacting liquid phase. Our group has extensively studied the properties of this condensate in atomically thin MoTe<sub>2</sub>.`,
      img: 1,
      paragraphs: [
        `Electrons are crucial to the modern world. They power our computers, cell phones, and almost everything else we encounter in our daily lives. The physics of electrons have been extensively studied since their discovery, but never before has there been a better opportunity to observe the quantum properties of electrons than in atomic layer materials (ALMs). ALMs are materials that are bound together by strong covalent bonds within a plane and weak van der Waals forces out of the plane, allowing them to be separated into sheets that are only a few atoms thick. Due to their very nature, these materials confine the motion of electrons, allowing for the observation of novel electronic phenomena. One such phenomenon is the condensation of electrons and holes from a non-interacting gas phase to a highly interacting liquid phase. Our group has extensively studied the properties of this condensate in atomically thin MoTe<sub>2</sub>.`,
        `As shown in Figure 1, we assemble a 3-layered structure of ALMs consisting of MoTe<sub>2</sub> sandwiched between two layers of graphene. Electrical contacts are attached to the top and bottom graphene sheets, and we measure the current across all three layers in response to excitation from a pulsed laser. The laser, focused down to a microscopic area, scans across the surface of the device, while we measure the current. This allows us to map out the response of the sample to light. When a photon of light from the laser interacts with a semiconductor such as MoTe<sub>2</sub>, it gets absorbed by the material and generates an electron-hole pair. The electron can then either recombine with the hole or be drawn out of the material as observable photocurrent through the contacts. In some cases, however, the electrons and holes can exhibit new and interesting behavior before these processes occur.`,
        `As we increase the power of the laser and decrease the time between pulses hitting the device, more electron-hole pairs are created in a shorter amount of time. Because of this, the density of electron-hole pairs increases until the distance between each pair becomes comparable to the size of a single pair. Once this happens, the electron-hole pairs begin to interact with each other and form small droplets, as shown in Figure 2 (on the right), which then grow into larger droplets, similar to the condensation of water from air that can be observed on the morning dew of plants. Eventually, as these droplets grow and merge together, a new electron-hole liquid phase emerges.`,
        `By altering the conditions of the experiment, we can discover some basic properties of this condensed electronic phase. For instance, applying a voltage across the device pulls apart the electron-hole pairs and effectively cause the liquid to evaporate back into an electron-hole gas. By carefully controlling this voltage, we can determine the energy of the liquid state. Currently, we are exploring the effects of other parameters on this electronic liquid phase, such as temperature and magnetic field, which could yield greater insight into the physics of electrons and holes in ALMs.`,
      ],
      figures: [
        {
          after: 1,
          img: require('~/assets/images/research/writeups/alm_measurement.png?resize'),
          webp: require('~/assets/images/research/writeups/alm_measurement.png?webp'),
          alt: 'MoTe2 Schematic',
          title:
            'Figure 1: Schematic of a MoTe<sub>2</sub> device and experimental measurement.',
          caption:
            'Figure 1: Schematic of a MoTe<sub>2</sub> device and experimental measurement.',
          height: '350px',
        },
        {
          after: 3,
          img: require('~/assets/images/research/writeups/electron-hole_condensate.png?resize'),
          webp: require('~/assets/images/research/writeups/electron-hole_condensate.png?webp'),
          alt: 'E-Hole Condensate',
          title:
            'Figure 2: Evolution of electron-hole interactions with increasing density.',
          caption:
            'Figure 2: Evolution of electron-hole interactions with increasing density.',
          float: 'right',
        },
      ],
      youtube: 'dRh4FNc0tM4',
    },
  ],
});

export const mutations = {
  toggleTheme(state) {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
  },
  lightTheme(state) {
    state.theme = 'light';
  },
  darkTheme(state) {
    state.theme = 'dark';
  },
};
