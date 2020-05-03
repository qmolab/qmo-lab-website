import {
  mdiHome,
  mdiMicroscope,
  mdiAccountGroup,
  mdiAtomVariant,
  mdiCameraIris,
  mdiLink,
} from '@mdi/js';

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
        to: '/members',
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
        to: '/links',
      },
    ],
    hidden: [
      {
        icon: 'mdi-microscope',
        title: 'News Archive',
        to: '/news',
      },
    ],
    research: [
      {
        title: 'carrier multiplication',
        to: '/research/carrier_multiplication',
      },
      {
        title: 'electron-hole condensation',
        to: '/research/electron-hole_condensation',
      },
      {
        title: 'ultrafast optoelectronics',
        to: '/research/ultrafast_optoelectronics',
      },
      {
        title: 'atomic layer materials',
        to: '/research/atomic_layer_materials',
      },
      {
        title: 'natural regulation',
        to: '/research/natural_regulation',
      },
    ],
  },
  heroSlides: [
    {
      src: require('~/assets/images/hero_carousel/jackyGloveBox2.jpg?resize&sizes[]=300,sizes[]=760,sizes[]=1240,sizes[]=1920'),
      webp: require('~/assets/images/hero_carousel/jackyGloveBox2.jpg?webp'),
      alt: 'Routine Lab Work Poster',
      title: 'learn more about research projects in the QMO Labs',
    },
    {
      src: require('~/assets/images/hero_carousel/e-h_liquid_banner_2.png?resize&sizes[]=300,sizes[]=760,sizes[]=1240,sizes[]=1920'),
      webp: require('~/assets/images/hero_carousel/e-h_liquid_banner_2.png?webp'),
      alt: 'Electron Hole Liquid',
      title:
        'exotic droplets: atomic layers can host novel electron-hole liquid ',
    },
    {
      src: require('~/assets/images/hero_carousel/graphene_cool_low_dof_hd_cropped.png?resize&sizes[]=300,sizes[]=760,sizes[]=1240,sizes[]=1920'),
      webp: require('~/assets/images/hero_carousel/graphene_cool_low_dof_hd_cropped.png?webp'),
      alt: 'Clean Graphene Sheets',
      title:
        'clean sheets: giant photocurrents manifest in pristine graphene layers ',
    },
    {
      src: require('~/assets/images/hero_carousel/green.jpg?resize&sizes[]=300,sizes[]=760,sizes[]=1240,sizes[]=1920'),
      webp: require('~/assets/images/hero_carousel/green.jpg?webp'),
      alt: 'Photosynthesis Poster',
      title:
        'green machines: quantum photocells naturally regulate internal energy flows',
    },
  ],
  index: {
    aboutText: `
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
    `,
  },
  gallery: {
    youtubePlayer: {
      host: 'https://www.youtube-nocookie.com', // Can be set to https://www.youtube-nocookie.com
    },
    videoGalleryVideoIds: [
      'iOqmUeZVA0Q',
      'aVY4od4mfnA',
      'f6CjReJumHA',
      'm3KhuLkpTAA',
      'YEyQ1vrFAS8',
      'Q9CyY_0uLJs',
    ],
    imageGalleryImages: [
      {
        title: 'Lab Gallery',
        index: null,
        images: [
          {
            href: require('~/assets/images/gallery/blue.png'),
            thumbnail: require('~/assets/images/gallery/blue.png?resize'),
            webp: require('~/assets/images/gallery/blue.png?webp'),
            title:
              'Nonlinear response in our OPO laser means it can turn a red laser into a brilliant blue',
          },
          {
            href: require('~/assets/images/gallery/laserlevel.png'),
            thumbnail: require('~/assets/images/gallery/laserlevel.png?resize'),
            webp: require('~/assets/images/gallery/laserlevel.png?webp'),
            title: 'For safety, leave the laser level for cameras only',
          },
          {
            href: require('~/assets/images/gallery/lasers.png'),
            thumbnail: require('~/assets/images/gallery/lasers.png?resize'),
            webp: require('~/assets/images/gallery/lasers.png?webp'),
            title:
              "The QMO Lab's original laser bank: A titanium-sapphire laser pumps an OPO laser cavity",
          },
          {
            href: require('~/assets/images/gallery/maxside.png'),
            thumbnail: require('~/assets/images/gallery/maxside.png?resize'),
            webp: require('~/assets/images/gallery/maxside.png?webp'),
            title:
              "The QMO Lab 'microscopes' use a series of optics to scan a laser beam across samples, measuring point-by-point",
          },
          {
            href: require('~/assets/images/gallery/photodetector.jpg'),
            thumbnail: require('~/assets/images/gallery/photodetector.jpg?resize'),
            webp: require('~/assets/images/gallery/photodetector.jpg?webp'),
            title:
              'Featured in Nature Nanotechnology, this photodetector is one thousand times thinner than a human hair',
          },
          {
            href: require('~/assets/images/gallery/cryostat2.jpg'),
            thumbnail: require('~/assets/images/gallery/cryostat2.jpg?resize'),
            webp: require('~/assets/images/gallery/cryostat2.jpg?webp'),
            title:
              'A wired-up sample sits in our optical cryostat, waiting to be measured',
          },
          {
            href: require('~/assets/images/gallery/poster.png'),
            thumbnail: require('~/assets/images/gallery/poster.png?resize'),
            webp: require('~/assets/images/gallery/poster.png?webp'),
            title:
              'Max and Fatemeh present their work at the 2nd Annual SHINES Symposium',
          },
          {
            href: require('~/assets/images/gallery/F_and_D_dice.png'),
            thumbnail: require('~/assets/images/gallery/F_and_D_dice.png?resize'),
            webp: require('~/assets/images/gallery/F_and_D_dice.png?webp'),
            title: 'The first two PhDs from the QMO Lab, Fatemeh and Dennis!',
          },
          {
            href: require('~/assets/images/gallery/atwork.png'),
            thumbnail: require('~/assets/images/gallery/atwork.png?resize'),
            webp: require('~/assets/images/gallery/atwork.png?webp'),
            title:
              "Working in a laser lab can invite comparisons to H.G. Well's Morlocks",
          },
          {
            href: require('~/assets/images/gallery/mad_scientists.png'),
            thumbnail: require('~/assets/images/gallery/mad_scientists.png?resize'),
            webp: require('~/assets/images/gallery/mad_scientists.png?webp'),
            title:
              'The most successful experiments are performed in a lightning storm at the stroke of midnight',
          },
          {
            href: require('~/assets/images/gallery/spectrum.png'),
            thumbnail: require('~/assets/images/gallery/spectrum.png?resize'),
            webp: require('~/assets/images/gallery/spectrum.png?webp'),
            title:
              'White light passed through a monochromator casts a beautiful rainbow on the QMO Lab logo',
          },
        ],
      },
      {
        title: 'Group Photos',
        index: null,
        images: [
          {
            href: require('~/assets/images/gallery/oakglen/oakglen_group.jpg'),
            thumbnail: require('~/assets/images/gallery/oakglen/oakglen_group.jpg?resize'),
            webp: require('~/assets/images/gallery/oakglen/oakglen_group.jpg?webp'),
            title: 'QMO Lab at Oak Glen 2018',
          },
          {
            href: require('~/assets/images/gallery/aps_2018_monkey_th.jpg'),
            thumbnail: require('~/assets/images/gallery/aps_2018_monkey_th.jpg?resize'),
            webp: require('~/assets/images/gallery/aps_2018_monkey_th.jpg?webp'),
            title: 'QMO Lab at APS March Meeting 2018',
          },
        ],
      },
      {
        title: 'OAK GLEN GROUP HIKE 2018',
        index: null,
        images: [
          {
            href: require('~/assets/images/gallery/oakglen/oakglen_climb.jpg'),
            thumbnail: require('~/assets/images/gallery/oakglen/oakglen_climb.jpg?resize'),
            webp: require('~/assets/images/gallery/oakglen/oakglen_climb.jpg?webp'),
            title: 'Hiking towards Preservation Point',
          },
          {
            href: require('~/assets/images/gallery/oakglen/oakglen_jed.jpg'),
            thumbnail: require('~/assets/images/gallery/oakglen/oakglen_jed.jpg?resize'),
            webp: require('~/assets/images/gallery/oakglen/oakglen_jed.jpg?webp'),
            title: 'Taking in the view',
          },
          {
            href: require('~/assets/images/gallery/oakglen/oakglen_descent.jpg'),
            thumbnail: require('~/assets/images/gallery/oakglen/oakglen_descent.jpg?resize'),
            webp: require('~/assets/images/gallery/oakglen/oakglen_descent.jpg?webp'),
            title: 'Descending to the valleys',
          },
        ],
      },
      {
        title: 'TORREY PINES GROUP HIKE 2016',
        index: null,
        images: [
          {
            href: require('~/assets/images/gallery/stairs_2016.jpg'),
            thumbnail: require('~/assets/images/gallery/stairs_2016.jpg?resize'),
            webp: require('~/assets/images/gallery/stairs_2016.jpg?webp'),
            title: 'Scenic Torrey Pines',
          },
          {
            href: require('~/assets/images/gallery/group_2016.jpg'),
            thumbnail: require('~/assets/images/gallery/group_2016.jpg?resize'),
            webp: require('~/assets/images/gallery/group_2016.jpg?webp'),
            title: 'The group in 2016',
          },
          {
            href: require('~/assets/images/gallery/mufasa_2016.png'),
            thumbnail: require('~/assets/images/gallery/mufasa_2016.png?resize'),
            webp: require('~/assets/images/gallery/mufasa_2016.png?webp'),
            title: 'Professor Gabor is always with the group in spirit',
          },
        ],
      },
    ],
    videoGalleryTitle: 'QMO YouTube Channel',
    imageGalleryTitle: 'QMO Lab Gallery',
  },
  links: {
    panels: {
      'Science Journals': [
        { name: 'Science', url: 'https://sciencemag.org' },
        { name: 'Nature', url: 'https://nature.com' },
        { name: 'Nature Photonics', url: 'https://nature.com/nphoton' },
        { name: 'Nature Materials', url: 'https://nature.com/nmat' },
        { name: 'Nature Physics', url: 'https://nature.com/nphys' },
        { name: 'Nature Nanotechnology', url: 'https://nature.com/nnano' },
        { name: 'Nature Communications', url: 'https://nature.com/ncomms' },
        {
          name: 'Nano Letters',
          url: 'https://pubs.acs.org/journal/nalefd',
        },
        { name: 'Physical Review Letters', url: 'https://prl.aps.org/' },
        {
          name: 'arXiv Condensed Matter',
          url: 'https://arxiv.org/archive/cond-mat',
        },
        {
          name: 'Applied Physics Letters',
          url: 'https://scitation.aip.org/content/aip/journal/apl',
        },
      ],
      'UCR Links': [
        { name: 'UCR Homepage', url: 'https://ucr.edu/' },
        { name: 'UCR Physics', url: 'https://www.physics.ucr.edu/' },
        {
          name: 'Colloquia and Seminar Schedule',
          url: 'https://www.physics.ucr.edu/seminars',
        },
        {
          name: 'Experimental Condensed Matter @ UCR',
          url: 'https://www.physics.ucr.edu/research/ecmp',
        },
        {
          name: 'UCR Science News on Twitter',
          url: 'https://twitter.com/UCR_ScienceNews',
        },
      ],
      'Other Groups': [
        { name: 'Vivek Aji', url: 'faculty.ucr.edu/~vivekj/' },
        { name: 'Alexander Balandin', url: 'ndl.ee.ucr.edu' },
        { name: 'Marc Bockrath', url: 'faculty.ucr.edu/~marcbock' },
        { name: 'Scott Bunch', url: 'bu.edu/eng/profile/scott-bunch/' },
        { name: 'Yongtao Cui', url: 'nanowave.ucr.edu/' },
        {
          name: 'Javier Garay',
          url: 'sites.google.com/a/eng.ucsd.edu/amps-lab/home',
        },
        { name: 'Tony Heinz', url: 'web.stanford.edu/group/heinz/' },
        { name: 'James Hone', url: 'hone.mech.columbia.edu' },
        { name: 'David Hsieh', url: 'hsiehlab.caltech.edu/' },
        { name: 'Shahal Ilani', url: 'weizmann.ac.il/condmat/ilani' },
        { name: 'Pablo Jarillo-Herrero', url: 'jarilloherrero.mit.edu/' },
        { name: 'Philip Kim', url: 'kim.physics.harvard.edu/' },
        {
          name: 'Jeannie Lau',
          url: 'sites.google.com/a/ucr.edu/physics-lau/',
        },
        { name: 'Xiaoqin (Elaine) Li', url: 'web2.ph.utexas.edu/~lilab/' },
        { name: 'Joshua Lui', url: 'lui.ucr.edu/' },
        {
          name: 'Paul McEuen',
          url: 'lassp.cornell.edu/lassp_data/mceuen/',
        },
        {
          name: 'Jiwoong Park',
          url: 'chemistry.uchicago.edu/faculty/jiwoong-park',
        },
        { name: 'Jing Shi', url: 'shigroup.ucr.edu/' },
        { name: 'Justin Song', url: 'sites.google.com/site/justincsong' },
        { name: 'Ming Lee Tang', url: 'faculty.ucr.edu/~mltang' },
        { name: 'Harry Tom', url: 'physics.ucr.edu/People/' },
        { name: 'Feng Wang', url: 'wanglab.berkeley.edu/' },
        { name: 'Xiaodong Xu', url: 'depts.washington.edu/xulab/' },
        { name: 'Zhaohui Zhong', url: 'eecs.umich.edu/zhonglab/' },
      ],
      'Lab Funding': [
        { name: 'US Department Of Energy', url: 'https://www.energy.gov/' },
        {
          name: 'Spins and Heat in Nanoscale Electronic Systems Center',
          url: 'https://efrcshines.ucr.edu/',
        },
        {
          name: 'Air Force Office of Scientific Research Biosystems',
          url:
            'https://community.apan.org/wg/afosr/w/researchareas/7659.human-performance-and-biosystems/',
        },
        {
          name: 'Research Corporation for Scientific Advancement ',
          url: 'https://rescorp.org/',
        },
        {
          name: 'National Science Foundation',
          url: 'https://www.nsf.gov/',
        },
        {
          name: 'Canadian Institute for Advanced Research',
          url: 'https://www.cifar.ca/',
        },
      ],
      'Lab Safety': [
        { name: 'Safety Data Sheets (SDS)', url: '' },
        { name: 'Emergency Action Plan', url: '' },
        { name: 'Chemical Hygiene Plan', url: '' },
        { name: 'Injury and Illness Prevention Plan', url: '' },
        { name: 'Fire Prevention Plan (FPP)', url: '' },
        { name: 'Emergency Procedures', url: '' },
      ],
    },
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
  publications: {
    mainItems: [
      {
        title:
          'Multiple parameter dynamic photoresponse microscopy for data-intensive optoelectronic measurements of van der Waals heterostructures',
        author: 'T.B. Arp, N.M. Gabor',
        pubInfo: 'Rev. Sci. Instr. 90, 023702 (2019)',
        text:
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
        author: 'T.B. Arp, D. Pleskot, N.M. Gabor et al.',
        pubInfo: 'Nat. Photon. 13, 245–250 (2019)',
        text: `At high densities electrons and holes can condense into an electron hole liquid droplet, an exotic phase of matter that, in 2D MoTe<sub>2</sub>, can be created at room temperature.`,
        href: 'https://www.nature.com/articles/s41566-019-0349-y',
        img: require('~/assets/images/publications/e-h_small.jpg?resize'),
        webp: require('~/assets/images/publications/e-h_small.jpg?webp'),
        alt: 'Electron-hole liquid',
        year: '2019',
      },
      {
        title: 'Giant intrinsic photoresponse in pristine graphene',
        author: 'Q. Ma, N.M. Gabor et al.',
        pubInfo: 'Nat. Nano. 14, 145-150 (2019)',
        text:
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
        author: 'J.C.W. Song and N.M. Gabor',
        pubInfo: 'Nat. Nano. 13, 986-993 (2018)',
        text:
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
        author: 'F. Barati, M.J. Grossnickle, N.M. Gabor, et al.',
        pubInfo: 'Nat. Nano. 12, 1134-1139 (2017)',
        text:
          'Atomic layer heterostructures are shown to greatly increase the efficiency of amplifying small signals and light-to-electricity conversions.',
        href:
          'https://www.nature.com/nnano/journal/vaop/ncurrent/full/nnano.2017.203.html',
        img: require('~/assets/images/publications/impact.png?resize'),
        webp: require('~/assets/images/publications/impact.png?webp'),
        alt: 'Electron-hole pair multiplication',
        year: '2017',
      },
      {
        title: 'Natural Regulation of Energy Flow in a Green Quantum Photocell',
        author: 'T.B. Arp, N.M. Gabor, et al.',
        pubInfo: 'Nano Lett. 16(12), 7461-7466 (2016)',
        text:
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
        author: 'A.T. Wieg, M.J. Grossnickle, N.M. Gabor, et al.',
        pubInfo: 'Appl. Phys. Lett. 109, 121901 (2016)',
        text:
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
        author: 'Q. Ma, N.M. Gabor, et al.',
        pubInfo: 'Nature Phys. 12, 455-459 (2016)',
        text:
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
        author: 'N.M. Gabor',
        pubInfo: 'Nature Photon. 9, 419-420 (2015)',
        text:
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
        author: 'N.M. Gabor',
        pubInfo: 'Acc. Chem. Res. 46 (6), 1348-1357 (2013)',
        text:
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
        author: 'N.M. Gabor, et al.',
        pubInfo: 'Phys. Rev. Lett. 108, 087404 (2012)',
        text:
          'Direct time-of-flight measurements yield the time required for electrons and holes to escape a photodiode composed of an individual carbon nanotube.',
        href: 'http://prl.aps.org/abstract/PRL/v108/i8/e087404',
        img: require('~/assets/images/publications/2escape.jpg?resize'),
        webp: require('~/assets/images/publications/2escape.jpg?webp'),
        alt: 'Ultrafast Photocurrent Measurements',
        year: '2012',
      },
      {
        title: 'Hot Carrier-Assisted Intrinsic Photoresponse in Graphene',
        author: 'N.M. Gabor, et al.',
        pubInfo: 'Science 334, 648 (2011)',
        text:
          'Photo-excited charge carriers in graphene are found to enhance thermal energy transport leading to an efficient photo-thermoelectric effect.',
        href: 'http://www.sciencemag.org/content/334/6056/648.short',
        img: require('~/assets/images/publications/3hotcarriers.jpg?resize'),
        webp: require('~/assets/images/publications/3hotcarriers.jpg?webp'),
        alt: 'Hot Carrier-Assisted Intrinsic Photoresponse in Graphene',
        year: '2011',
      },
      {
        title: 'Annealing a Magnetic Cactus Into Phyllotaxis',
        author: 'C. Nisoli, N.M. Gabor, et al.',
        pubInfo: 'Phys. Rev. E 81, 046107 (2010)',
        text:
          'A cylindrical lattice of repulsive particles can reproduce phyllotaxis; experimental and numerical evidence shows that the phyllotactic lattice is actually an energetic ground state.',
        href: 'http://journals.aps.org/pre/abstract/10.1103/PhysRevE.81.046107',
        img: require('~/assets/images/publications/6phyllo.jpg?resize'),
        webp: require('~/assets/images/publications/6phyllo.jpg?webp'),
        alt: 'Annealing a Magnetic Cactus Into Phyllotaxis',
        year: '2010',
      },
      {
        title:
          'Extremely Efficient Multiple Electron-Hole Pair Generation in Carbon Nanotube Photodiodes',
        author: 'N.M. Gabor, et al.',
        pubInfo: 'Science 325, 1367 (2009)',
        text:
          'High-energy electrons and holes in carbon nanotube photodiodes are found to efficiently generate multiple electron-hole pairs.',
        href: 'http://www.sciencemag.org/content/325/5946/1367',
        img: require('~/assets/images/publications/4multiplication.jpg?resize'),
        webp: require('~/assets/images/publications/4multiplication.jpg?webp'),
        alt:
          'Extremely Efficient Multiple Electron-Hole Pair Generation in Carbon Nanotube Photodiodes',
        year: '2009',
      },
      {
        title: 'Static and Dynamical Phyllotaxis in a Magnetic Cactus',
        author: 'C. Nisoli, N.M. Gabor, et al.',
        pubInfo: 'Phys. Rev. Lett. 102, 186103 (2009)',
        text:
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
        subtitle: 'A. Singh, D. Pleskot, N.M. Gabor, et al.',
        text: 'Phys. Rev. Lett. 117, 257402 (2016)',
        href: '',
      },
      {
        title:
          'Trion Formation Dynamics in Monolayer Transition Metal Dichalcogenides',
        subtitle: 'A. Singh, D. Pleskot, N.M. Gabor, et al.',
        text: 'Phys. Rev. B 93, 041401 (2016)',
        href: '',
      },
      {
        title: 'Graphene-Based Thermopile for Thermal Imaging Applications',
        subtitle: 'A. Hsu, N.M. Gabor, et al.',
        text: 'Nano Lett., 2015 15(11) 7211-7216',
        href: '',
      },
      {
        title: 'Competing Channels for Hot-Electron Cooling in Graphene',
        subtitle: 'Q. Ma, N.M. Gabor, et al.',
        text: 'Phys. Rev. Lett. 112, 247401 (2014)',
        href: '',
      },
      {
        title:
          'Photoresponse of an Electrically Tunable Ambipolar Graphene Infrared Thermocouple',
        subtitle: 'P. Herring, A. Hsu, N.M. Gabor, et al.',
        text: 'Nano Lett., 2014 14(2), 901-907',
        href: '',
      },
      {
        title:
          'Graphene Photothermoelectric Photodetector and Hot Carrier Generator',
        subtitle: 'P. Jarillo-Herrero, N.M. Gabor, et al.',
        text: 'U.S. patent application 61576427, pending (2012)',
        href: '',
      },
      {
        title:
          'Extremely Efficient and Ultrafast: Electrons, Holes, and their Interactions in   the Carbon Nanotube PN Junction',
        subtitle: 'N.M. Gabor',
        text: 'Cornell University Dissertation (2010)',
        href: '',
      },
      {
        title: 'Photo-thermoelectric Effect at a Graphene Interface Junction',
        subtitle: 'X. Xu, N.M. Gabor, J. Alden, A. van der Zande, P.L. McEuen',
        text: 'Nano Lett., 2010 10(2), 562-566',
        href: '',
      },
      {
        title:
          'Terahertz Time-Domain Measurement of Ballistic Electron Resonance in a Single-Walled Carbon Nanotube',
        subtitle: 'Z. Zhong, N.M. Gabor, J. Sharping, A. Gaeta, P.L. McEuen',
        text: 'Nat. Nanotechnology 3, 201 (2008)',
        href: '',
      },
      {
        title: 'Transport in Carbon Nanotube p-i-n Diodes',
        subtitle: 'K. Bosnick, N.M. Gabor, P.L. McEuen',
        text: 'Applied Physics Letters 89, 163121 (2006)',
        href: '',
      },
    ],
  },
  news: [
    {
      date: 'July 15, 2019',
      title: 'Dr. Fatemeh Barati is headed to NYU!',
      subtitle:
        'She will be joining the group of Prof. Shabani as a postdoc in the Center for Quantum Phenomena at New York University.',
      img: require('~/assets/images/people/Fatemeh4.png?resize'),
      webp: require('~/assets/images/people/Fatemeh4.png?webp'),
    },
    {
      date: 'July 3, 2019',
      title: 'Vipers!',
      subtitle:
        'Prof. Gabor and the QMO Labs receive Office of Naval Research (ONR) funding through the HBCU/MI Award to study viper vision. This is the third major biophysics award in the QMO Labs.',
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
    },
    {
      date: 'May 1, 2019',
      title:
        'Professor Gabor is selected as a National Academy of Sciences Kavli Frontiers Fellow',
      subtitle:
        'Dr. Gabor has been selected as a Kavli Frontiers Fellow by the National Academy of Sciences. His presentation at the 2019 Kavli Frontiers of Science conference is posted online at https://vimeo.com/321577757.',
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
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
    },
    {
      date: 'February 14, 2019',
      title: 'Multiple parameter dynamic photoresponse microscopy',
      subtitle: `Trevor Arp's paper on multiple parameter dynamic photoresponse microscopy (MPDPM) is accepted as an editor's choice in Review of Scientific Instruments!`,
      img: require('~/assets/images/people/Trevor1.png?resize'),
      webp: require('~/assets/images/people/Trevor1.png?webp'),
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
    },
    {
      date: 'November 5, 2018',
      title: 'Professor Gabor writes on next steps in 2D materials research',
      subtitle: `Professor Gabor's Perspective article "Electron quantum metamaterials in van der Waals heterostructures" has been published in Nature Nanotechnology! Read the article here or check out UCR press releases about the article at UCR Today or on Twitter.`,
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
    },
    {
      date: 'August 9, 2018',
      title: 'Fatemeh Barati successfully defends thesis!',
      subtitle:
        'Fatemeh Barati has defended her doctoral thesis. She has been a part of the QMO Lab since 2013.',
      img: require('~/assets/images/people/Fatemeh4.png?resize'),
      webp: require('~/assets/images/people/Fatemeh4.png?webp'),
    },
    {
      date: 'April 23, 2018',
      title: `Max Grossnickle's presentation “‘Spin’-tronics: the Next Generation of Computing” claims first runner-up in UCR's Grad Slam competition!`,
      subtitle:
        'Grad Slam is an annual contest to communicate research. It aims to make research accessible by providing emerging scientists and scholars with the skills to engage the public in their work. The UCR Grand Finals were also covered in the Press Enterprise.',
      img: require('~/assets/images/people/Max3.png?resize'),
      webp: require('~/assets/images/people/Max3.png?webp'),
    },
    {
      date: 'April 17, 2018',
      title: 'Professor Nathan Gabor has been awarded tenure!',
      subtitle: 'Professor Nathan Gabor has been awarded tenure!',
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
    },
    {
      date: 'March 14, 2018',
      title: 'Sifting Quantum Needles from a Nanoscale Haystack',
      subtitle: `Max Grossnickle's research highlight on the creation of a 'spin-caloritronic nano-oscillator' by two SHINES Center research groups has been published the Frontiers in Energy Research newsletter. The newsletter is developed by EFRC early career scientists who are dedicated, curious, and committed to communicating science.`,
      img: require('~/assets/images/people/Max3.png?resize'),
      webp: require('~/assets/images/people/Max3.png?webp'),
    },
    {
      date: 'March 7, 2018',
      title:
        'Fatemeh Barati wins the Ken Hass Outstanding Student Paper Award at APS March Meeting 2018!',
      subtitle:
        'The award, given for the paper "Hot carrier-enhanced interlayer electron–hole pair multiplication in 2D semiconductor heterostructure photocells," seeks to recognize the best student paper addressing the subject of industrial applications of physics.',
      img: require('~/assets/images/people/Fatemeh4.png?resize'),
      webp: require('~/assets/images/people/Fatemeh4.png?webp'),
    },
    {
      date: 'October 12, 2017',
      title:
        'Professor Nathan Gabor is named a 2017 CIFAR Azrieli Global Scholar!',
      subtitle:
        'Each year only fifteen early career investigators are given the prestigious appointment, which is designed to provide support in developing research networks and essential leadership skills. For more information on Professor Gabor and the CIFAR Azrieli Global Scholar program, please see this profile at UCR Today.',
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
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
    },
    {
      date: 'July 27, 2017',
      title: 'Skyrmions come in from the cold',
      subtitle: `Max Grossnickle's article on room-temperature creation and control of skyrmions by two SHINES Center research groups has been published in the Frontiers in Energy Research Newsletter. The newsletter is developed by EFRC early career scientists who are dedicated, curious, and committed to communicating science.`,
      img: require('~/assets/images/people/Max3.png?resize'),
      webp: require('~/assets/images/people/Max3.png?webp'),
    },
    {
      date: 'July 18, 2017',
      title:
        'Professor Nathan Gabor has received a Faculty Early Career Development (CAREER) Award from the National Science Foundation!',
      subtitle: `The CAREER Program offers the National Science Foundation's most distinguished awards in support of early-career faculty who have the potential to serve as academic role models in research and education and to lead advances in the mission of their department or organization. The awards seek to aid early-career faculty in building a firm foundation for a lifetime of leadership in integrating education and research.`,
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
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
    },
    {
      date: 'Apr 9, 2017',
      title: 'Fatemeh Barati wins the Dr. Janet M. Boyce Memorial Award!',
      subtitle: `The award is presented to ‘outstanding women in the sciences based upon strong academic research and impressive letters of recommendation' and was recognized by Dr. Isgouhi Kaloshian, chair of the CNAS committee on honors & scholarships, and Dr. Michael McKibben, CNAS divisional dean of student academic affairs.`,
      img: require('~/assets/images/people/Fatemeh4.png?resize'),
      webp: require('~/assets/images/people/Fatemeh4.png?webp'),
    },
    {
      date: 'Feb 21, 2017',
      title: 'Professor Gabor becomes a 2017 Cottrell Scholar!',
      subtitle:
        'The Research Corporation for Science Advancement Cottrell Scholar program develops outstanding teacher-scholars who are recognized by their scientific communities for the quality and innovation of their research programs and their academic leadership skills. Outstanding candidates are admitted to the ranks of Cottrell Scholars through a stringent peer-review process based on their innovative research proposals and education programs. - rescorp.org',
      img: require('~/assets/images/people/Nathaniel.jpg?resize'),
      webp: require('~/assets/images/people/Nathaniel.jpg?webp'),
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
  presentations: [],
  dissertations: {
    Max: {},
    Dennis: {},
    Fatemeh: {},
  },
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
