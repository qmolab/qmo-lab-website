<template>
  <div class="membersPage">
    <v-row>
      <v-col>
        <v-card
          class="mx-auto stretchCard"
          :max-width="768"
          :min-height="200"
          elevation="2"
        >
          <v-card-title class="pb-2">
            <span>
              <span>Nathaniel Gabor </span>
              <span class="font-weight-light text--small">
                ({{ professors.nathan.title }})
              </span>
            </span>
          </v-card-title>
          <v-row no-gutters class="px-4 pb-4">
            <v-col cols="12" md="4">
              <StoreImage
                sub-category="professors"
                item-id="nathan"
                alt="Nathan"
                :aspect-ratio="5 / 4"
                max-width="300"
              />
            </v-col>
            <v-col>
              <v-card-text class="pa-0 pl-4">
                <span>Research:</span>
                <span class="font-weight-light">
                  <DynamicText :html="professors.nathan.focus" />
                </span>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-12">
      <v-col cols="12" class="align-self-center">
        <h2 class="headline">Student Researchers:</h2>
      </v-col>
      <v-col cols="12" md="1" style="min-width: 50px;" align-self="center">
        Filters:
      </v-col>
      <v-col cols="12" md="2" style="min-width: 320px;">
        <v-switch
          v-model="memberFilterSwitchCF"
          color="accent"
          :loading="busy"
          :disabled="busy"
          :label="memberFilterSwitchCF ? 'Current' : 'Former'"
          append="Student Members"
        />
      </v-col>
      <v-col align-self="center">
        <v-chip-group
          v-model="memberChips"
          mandatory
          active-class="v-chip--disabled v-chip--outlined secondary"
        >
          <v-chip
            v-for="(chip, i) in chips"
            :key="i"
            :disabled="!(memberFilterSwitchCF ? chip.current : chip.former)"
          >
            <span>{{ chip.name }}</span>
            <v-avatar right class="grey darken-4">
              {{ memberFilterSwitchCF ? chip.current : chip.former }}
            </v-avatar>
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
    <div
      id="memberContainer"
      ref="memberContainer"
      :class="{ memberContainer: true, 'memberContainer--fillAll': busy }"
    >
      <transition-group name="list" tag="div" class="row">
        <v-col
          v-for="member in shownMembers"
          :key="member.name"
          cols="12"
          sm="6"
          md="6"
          lg="4"
        >
          <v-card
            class="mx-auto stretchCard pb-10"
            :max-width="768"
            :min-height="200"
            :elevation="member.isDeleted ? '12' : '2'"
          >
            <v-row no-gutters class="pa-4">
              <v-col class="ml-2" style="min-width: 80px;" cols="1">
                <v-avatar size="80">
                  <StoreImage
                    sub-category="members"
                    :item-id="member.name"
                    :alt="member.name"
                    width="80"
                    height="80"
                  />
                </v-avatar>
              </v-col>
              <v-col class="px-4">
                <div class="title pt-2">
                  {{ member.first + ' ' + member.last }}
                </div>
                <div class="body-2">
                  <span>{{ member.dept }} </span>
                  <span v-if="member.level & 8">
                    <span v-if="member.level & 2">Ph.D.</span>
                    <span v-else-if="member.level & 4">B.S.</span>
                    <span v-if="member.grad_date">
                      {{ member.grad_date.slice(2, 4) }}
                    </span>
                  </span>
                  <span v-else>
                    <span v-if="member.level & 2">Graduate Student</span>
                    <span v-else-if="member.level & 4">
                      Undergraduate Student
                    </span>
                    <span v-else-if="member.level & 1">
                      Post-Doctoral Researcher
                    </span>
                  </span>
                </div>
              </v-col>
            </v-row>
            <v-card-text class="pa-0 pl-4">
              <div style="color: #fff;">Research:</div>
              <span class="font-weight-light">
                <DynamicText :html="member.focus" />
              </span>
            </v-card-text>
            <div class="actions d-flex align-end pr-2">
              <v-spacer />
              <v-dialog
                v-model="member.dialog"
                max-width="1280"
                style="overflow: hidden;"
                content-class="hideOverflow"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text small v-bind="attrs" v-on="on">
                    <span>About {{ member.name }}</span>
                    <v-icon right color="primary">mdi-page-next</v-icon>
                  </v-btn>
                </template>
                <v-card style="max-width: 1251px;" class="px-4 pt-2">
                  <MemberCard :id="member.name" />
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      v-if="(member.level & 10) === 10"
                      nuxt
                      text
                      :to="dissertationRoute(member)"
                    >
                      <span>{{ member.name }}'s Dissertation</span>
                      <v-icon color="primary" right>
                        mdi-book-open-variant
                      </v-icon>
                    </v-btn>
                    <v-btn nuxt text :to="`/contact/#tag=${member.name}`">
                      <span>Contact {{ member.name }}</span>
                      <v-icon color="primary" right>
                        mdi-message-arrow-right
                      </v-icon>
                    </v-btn>
                    <v-btn text @click="member.dialog = false">
                      <span>Close Window</span>
                      <v-icon color="error" right>mdi-close</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-card>
        </v-col>
      </transition-group>
      <v-progress-circular
        v-if="busy"
        size="80"
        width="8"
        class="progress"
        indeterminate
      />
    </div>
    <v-row>
      <v-col cols="12">
        <v-btn text nuxt to="/members/theses/">
          <span>Student Dissertations</span>
          <v-icon color="primary" right>mdi-book-open-variant</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import StoreImage from '@/components/StoreImage.vue';
  import DynamicText from '@/components/DynamicText.vue';
  import MemberCard from '@/components/MemberCard.vue';

  function recursiveFilter(
    shown,
    hidden,
    filterFunc,
    callback,
    delayEach = 150,
    relWaitIn = 150
  ) {
    const delList = [];
    const newHidden = [];
    const newShown = [];
    shown.forEach((e, i) => {
      if (filterFunc(e)) {
        if (delList.length !== 0) {
          delList.push(i);
          e.isDeleted = true;
          newShown.push(e);
        }
      } else {
        delList.push(i);
        e.isDeleted = true;
        newHidden.push(e);
      }
    });
    const delListLength = delList.length;
    for (let i = 0; i < delListLength; ++i) {
      setTimeout(
        () => shown.splice(delList[delListLength - 1 - i], 1),
        i * delayEach
      );
    }
    hidden.forEach((e) =>
      filterFunc(e) ? newShown.push(e) : newHidden.push(e)
    );
    const newLength = newShown.length;
    setTimeout(() => {
      for (let i = 0; i < newLength; ++i)
        setTimeout(() => {
          newShown[i].isDeleted = false;
          shown.push(newShown[i]);
        }, i * delayEach);
      setTimeout(() => callback(), (newLength + 2) * delayEach);
    }, (delListLength + 1) * relWaitIn);
    return newHidden;
  }

  export default {
    components: { StoreImage, DynamicText, MemberCard },
    async asyncData({ $axios, $payloadURL, route, store }) {
      // if generated and works as client navigation, fetch previously saved static JSON payload
      // if (process.static && process.client && $payloadURL)
      //   return await $axios.$get($payloadURL(route));
      // const olderAnnouncements = await $axios.$get('/news/offset/');
      let memberList;
      if (store.state.members.firstLoad) {
        memberList = await $axios.$get('/members/cards/current/');
      } else {
        memberList = store.state.members.memberList;
      }
      const chips = [
        {
          name: 'All',
          current: 7,
          former: 6,
        },
        {
          name: 'Post-Docs',
          current: 0,
          former: 1,
        },
        {
          name: 'Grad Students',
          current: 6,
          former: 3,
        },
        {
          name: 'Undergrads',
          current: 1,
          former: 3,
        },
      ];
      return {
        chips,
        professors: store.state.members.professors,
        shownMembers: [],
        hiddenMembers: memberList.map((e) => ({ ...e, dialog: false })),
        downloadedFormer: false,
        busy: false,
      };
    },
    computed: {
      memberFlags() {
        return 2 ** (this.memberChips - 1) + 8 * this.memberFilterSwitchCF;
      },
      memberFilterSwitchCF: {
        get() {
          return this.$store.state.members.currentFormerSwitch;
        },
        set() {
          this.$store.commit('members/toggleCurrentFormerSwitch');
        },
      },
      memberChips: {
        get() {
          return this.$store.state.members.memberChips;
        },
        set(val) {
          this.$store.commit('members/setMemberPageFlags', val);
        },
      },
    },
    watch: {
      memberFlags() {
        if (this.$store.state.members.firstLoad) this.getFormerMembers();
        else this.filterList();
      },
    },
    created() {
      this.filterList();
    },
    methods: {
      async getFormerMembers() {
        this.downloadedFormer = true;
        this.hiddenMembers = [];
        const l = await this.$axios.$get('/members/cards/former/');
        l.forEach((e) => this.hiddenMembers.push(e));
        this.$store.commit(
          'members/saveMemberList',
          this.shownMembers.concat(this.hiddenMembers)
        );
        this.filterList();
      },
      dissertationRoute(member) {
        return (
          '/members/theses/' +
          (member.first + '_' + member.last + '/').toLowerCase()
        );
      },
      filterList() {
        this.busy = true;
        this.hiddenMembers = recursiveFilter(
          this.shownMembers,
          this.hiddenMembers,
          (e) =>
            8 & (e.level ^ this.memberFlags) &&
            (!this.memberChips || e.level & this.memberFlags),
          () => (this.busy = false)
        );
      },
    },
  };
</script>

<style lang="scss" scoped>
  .hideOverflow {
    overflow: hidden;
  }
  .memberContainer {
    transition: min-height 0.28s linear;
    height: auto;
    min-height: 0;
    position: relative;
    .progress {
      position: absolute;
      top: 250px;
      left: 50%;
      height: 80px;
      width: 80px;
      margin-left: -40px;
    }
  }
  .memberContainer--fillAll {
    min-height: 100vh;
    transition: min-height 0.14s linear;
  }
</style>
