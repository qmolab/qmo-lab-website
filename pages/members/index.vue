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
      };
    },
    computed: {
      nathanProfile() {
        return this.$store.state.members.nathanProfile;
      },
      members() {
        return this.$store.state.members.members;
      },
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
