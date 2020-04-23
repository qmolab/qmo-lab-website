<template>
  <v-container class="membersPage">
    <h1>QMO Lab Members</h1>
    <v-row>
      <v-col>
        <MemberCard large-pic :member="nathanProfile" />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" sm="4" align-self="center">
        <h2>Student Researchers:</h2>
      </v-col>
      <v-col>
        <v-row no-gutters>
          <v-col>
            <v-switch v-model="currentSwitch" :label="switchLabel" />
          </v-col>
          <v-col cols="12">
            <v-chip-group
              v-model="groupSelection"
              mandatory
              active-class="primary--text"
              column
            >
              <v-chip>All</v-chip>
              <v-chip>Post-Docs</v-chip>
              <v-chip>Grad Students</v-chip>
              <v-chip>Undergrads</v-chip>
            </v-chip-group>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <transition-group name="list" tag="div" class="row">
      <v-col
        v-for="(item, i) in members"
        v-show="visible(item)"
        :key="`col-${i}`"
        cols="12"
        sm="6"
        md="6"
        lg="4"
      >
        <MemberCard :member="item" />
      </v-col>
    </transition-group>
  </v-container>
</template>
<script>
  import MemberCard from '@/components/MemberCard.vue';
  export default {
    components: {
      MemberCard,
    },
    data() {
      return {
        currentSwitch: true,
        groupSelection: 0,
        nathanProfile: {
          first: 'Nathaniel',
          last: 'Gabor',
          nickname: 'Nathan',
          focus: 'Light and Quantum Matter',
          img: require('~/assets/images/people/Nathaniel.jpg?resize&quality=55&format=jpg&size=300'),
          lazy: require('~/assets/images/people/Nathaniel.jpg?lqip'),
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
            img: require('~/assets/images/people/Trevor1.png?resize&quality=55&format=jpg&size=300'),
            lazy: require('~/assets/images/people/Trevor1.png?lqip'),
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
            img: require('~/assets/images/people/Jacky1.png?resize&quality=55&format=jpg&size=300'),
            lazy: require('~/assets/images/people/Jacky1.png?lqip'),
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
            img: require('~/assets/images/people/jed1.jpg?resize&quality=55&format=jpg&size=300'),
            lazy: require('~/assets/images/people/jed1.jpg?lqip'),
            dept: 'UCR Physics',
            current: true,
            level: 2,
            gradYear: 2020,
          },
          {
            first: 'Farima',
            last: 'Farahmand',
            focus: 'Fabrication of twisted atomic layer devices',
            img: require('~/assets/images/people/farima1.png?resize&quality=55&format=jpg&size=300'),
            lazy: require('~/assets/images/people/farima1.png?lqip'),
            dept: 'UCR Physics',
            current: true,
            level: 2,
            gradYear: 2020,
          },
          {
            first: 'David',
            last: 'Mayes',
            focus:
              'Magneto-optoelectronic studies of nanoscale heterostructures',
            img: require('~/assets/images/people/dave1.png?resize&quality=55&format=jpg&size=300'),
            lazy: require('~/assets/images/people/dave1.png?lqip'),
            dept: 'UCR Physics',
            current: true,
            level: 2,
            gradYear: 2020,
          },
          {
            first: 'Esat',
            last: 'Kilinc',
            focus: 'Data Intensive measurements of photosynthetic bacteria',
            img: require('~/assets/images/people/esat_main.png?resize&quality=55&format=jpg&size=300'),
            lazy: require('~/assets/images/people/esat_main.png?lqip'),
            dept: 'UCR Physics',
            current: true,
            level: 2,
            gradYear: 2020,
          },
          {
            first: 'Abby',
            last: 'Leung',
            focus: 'Viper vision and neuro-morphic infrared photocell networks',
            img: require('~/assets/images/people/abby.jpg?resize&quality=55&format=jpg&size=300'),
            lazy: require('~/assets/images/people/abby.jpg?lqip'),
            dept: 'UCR Physics',
            current: true,
            level: 4,
            gradYear: 2020,
          },
          {
            first: 'Fatemeh',
            last: 'Barati',
            focus: 'Nanoscale fabrication of quantum optoelectronic devices',
            img: require('~/assets/images/people/Fatemeh4.png?resize&quality=55&format=jpg&size=300'),
            lazy: require('~/assets/images/people/Fatemeh4.png?lqip'),
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
            img: require('~/assets/images/people/Max3.png?resize&quality=55&format=jpg&size=300'),
            lazy: require('~/assets/images/people/Max3.png?lqip'),
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
            img: require('~/assets/images/people/Dennis.png?resize&quality=55&format=jpg&size=300'),
            lazy: require('~/assets/images/people/Dennis.png?lqip'),
            dept: 'UCR Materials Science And Engineering',
            current: false,
            level: 2,
            gradYear: 2019,
          },
          {
            first: 'Joshua',
            last: 'Woods',
            focus: 'Exfoliation and synthesis of atomic layer semiconductors',
            img: require('~/assets/images/people/Josh1.png?resize&quality=55&format=jpg&size=300'),
            lazy: require('~/assets/images/people/Josh1.png?lqip'),
            dept: 'UCR Materials Science And Engineering',
            current: false,
            level: 4,
            gradYear: 2018,
          },
          {
            first: 'Greyson',
            last: 'Voigt',
            focus: 'Atomic layer exfoliation automation',
            img: require('~/assets/images/people/Greyson1.jpg?resize&quality=55&format=jpg&size=300'),
            lazy: require('~/assets/images/people/Greyson1.jpg?lqip'),
            dept: 'UCR Physics',
            current: false,
            level: 4,
            gradYear: 2018,
          },
          {
            first: 'Alexander',
            last: 'Speirs',
            focus: 'Photocurrent microscopy of atomic layer materials',
            img: require('~/assets/images/people/alex1.png?resize&quality=55&format=jpg&size=300'),
            lazy: require('~/assets/images/people/alex1.png?lqip'),
            dept: 'UCR Physics',
            current: false,
            level: 4,
            gradYear: 2015,
          },
        ],
      };
    },
    computed: {
      switchLabel() {
        return (this.currentSwitch ? 'Current' : 'Former') + ' Student Members';
      },
      groupFlags() {
        return 2 ** (this.groupSelection - 1);
      },
      numberVisible() {
        let i = 0;
        this.members.Map.forEach((element, key) => {
          if (element.visible) ++i;
        }, this);
        return i;
      },
    },
    methods: {
      visible(member) {
        member.visible =
          member.current === this.currentSwitch &&
          (this.groupSelection === 0 || member.level & this.groupFlags);
        return member.visible;
      },
    },
  };
</script>

<style scoped lang="scss">
  .list-enter-active,
  .list-leave-active {
    transition: all 280ms;
  }
  .list-enter-to,
  .list-leave {
    opacity: 1;
    transform: translateY(0);
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
