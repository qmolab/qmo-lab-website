<template>
  <v-container class="membersPage">
    <h1 class="hidden-sm-and-down">QMO Lab Members</h1>
    <v-row>
      <v-col>
        <MemberCard large-pic :member="nathanProfile" />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" sm="4" class="align-self-center">
        <h2>Student Researchers:</h2>
      </v-col>
      <v-col cols="12" sm="8">
        <v-form ref="filterForm">
          <v-row no-gutters>
            <v-col>
              <v-switch v-slot:label v-model="currentSwitch" value>
                <span>
                  <v-slide-y-transition leave-absolute>
                    <span :key="switchLabel">
                      {{ switchLabel }}
                    </span>
                  </v-slide-y-transition>
                  &nbsp;Student Members
                </span>
              </v-switch>
            </v-col>
            <v-col cols="12">
              <MemberFilters
                v-model="groupSelection"
                :n-members-cat="nMembersCat"
                :current-switch="currentSwitch"
              />
            </v-col>
          </v-row>
        </v-form>
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
  import MemberFilters from '@/components/MemberFilters.vue';
  import MemberCard from '@/components/MemberCard.vue';
  export default {
    components: {
      MemberFilters,
      MemberCard,
    },
    async asyncData({ store }) {
      return await new Promise((resolve) => {
        const nMembersCat = [0, 0, 0, 0, 0, 0];
        store.state.members.members.forEach((e) => {
          for (let i = 0; i < 3; ++i)
            if ((2 ** i) & e.level) nMembersCat[e.current ? i + 3 : i]++;
        });
        resolve({
          ...store.state.members,
          nMembersCat,
        });
      });
    },
    data() {
      return {
        currentSwitch: true,
        groupSelection: 0,
      };
    },
    computed: {
      switchLabel() {
        return this.currentSwitch ? 'Current' : 'Former';
      },
      groupFlags() {
        return 2 ** (this.groupSelection - 1);
      },
    },
    methods: {
      disabledButton(i) {
        return (
          this.groupSelection === i + 1 ||
          this.nMembersCat[this.currentSwitch * 3 + i] === 0
        );
      },
      visible(member) {
        return (
          member.current === this.currentSwitch &&
          (this.groupSelection === 0 || member.level & this.groupFlags)
        );
      },
    },
  };
</script>
