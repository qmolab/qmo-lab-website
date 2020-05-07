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
              <v-chip :disabled="nMembersCat[currentSwitch * 3] === 0">
                Post-Docs
              </v-chip>
              <v-chip :disabled="nMembersCat[currentSwitch * 3 + 1] === 0">
                Grad Students
              </v-chip>
              <v-chip :disabled="nMembersCat[currentSwitch * 3 + 2] === 0">
                Undergrads
              </v-chip>
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
    <v-row>
      <v-col cols="12">
        <v-btn text nuxt to="/members/theses/">Student Dissertations</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import MemberCard from '@/components/MemberCard.vue';
  export default {
    components: {
      MemberCard,
    },
    asyncData({ store }) {
      const nMembersCat = [0, 0, 0, 0, 0, 0];
      store.state.members.members.forEach((e) => {
        for (let i = 0; i < 3; ++i)
          if ((2 ** i) & e.level) nMembersCat[e.current ? i + 3 : i]++;
      });
      return {
        ...store.state.members,
        nMembersCat,
      };
    },
    data() {
      return {
        currentSwitch: true,
        groupSelection: 0,
      };
    },
    computed: {
      switchLabel() {
        return (this.currentSwitch ? 'Current' : 'Former') + ' Student Members';
      },
      groupFlags() {
        return 2 ** (this.groupSelection - 1);
      },
    },
    methods: {
      visible(member) {
        const visible =
          member.current === this.currentSwitch &&
          (this.groupSelection === 0 || member.level & this.groupFlags);
        return visible;
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
