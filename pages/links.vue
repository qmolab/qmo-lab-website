<template>
  <HeroLayout class="linksPage mb-8">
    <h1 class="px-1 hidden-sm-and-down">Useful Links</h1>
    <div class="py-8">
      <v-btn
        text
        href="https://qmolab.ucr.edu/assets/images/socal-first-announcement.jpg"
        target="_blank"
        rel="noopener"
      >
        SoCAL First announcement
        <v-icon right color="secondary">{{ mdiOpenInNew }}</v-icon>
      </v-btn>
    </div>
    <v-expansion-panels multiple class="py-8">
      <v-expansion-panel v-for="(panel, i) in panels" :key="i">
        <v-expansion-panel-header :expand-icon="mdiMenuDown">
          {{ i }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list>
            <v-list-item v-for="(item, j) in panel" :key="j">
              <v-list-item-content>
                <v-btn text :href="item.url" target="_blank" rel="noopener">
                  {{ item.name }}
                  <v-icon right color="secondary">{{ mdiOpenInNew }}</v-icon>
                </v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </HeroLayout>
</template>

<script>
  import { mdiOpenInNew, mdiMenuDown } from '@mdi/js';
  import HeroLayout from '@/components/layouts/HeroLayout.vue';
  export default {
    name: 'LinksView',
    components: { HeroLayout },
    data() {
      return {
        mdiOpenInNew,
        mdiMenuDown,
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
      };
    },
  };
</script>
