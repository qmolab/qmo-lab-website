<template>
  <div class="membersPage mt-8">
    <v-card
      class="mx-auto stretchCard"
      max-width="900"
      min-height="200"
      outlined
    >
      <v-row no-gutters class="px-4">
        <v-col cols="12" sm="4" class="mt-2">
          <StoreImage
            sub-category="professors"
            item-id="nathan"
            alt="Nathan"
            :aspect-ratio="5 / 4"
            max-width="300"
            img-class="mx-auto"
          />
        </v-col>
        <v-col>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="unsetWhiteSpace text-h6">
                Nathaniel Gabor
              </v-list-item-title>
              <v-list-item-subtitle class="unsetWhiteSpace">
                JET Distinguished Associate Professor of Physics
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text class="pa-0 pl-4 mt-4 body-1">
            <div class="font-weight-light">
              <span class="text--primary">Research:</span>
              <span class="text--secondary">
                Light and Quantum Matter
              </span>
            </div>
            <div
              class="mt-4 text--secondary font-weight-thin"
              style="line-height: 1.375rem;"
            >
              Professor Gabor mentors several postdoctoral, graduate, and
              undergraduate researchers on shared and individual experimental
              projects. These projects explore the fundamental interactions of
              light and matter at ultra-small length scales, and range from
              data-intensive optical probes of photosynthetic bacteria to
              demonstrations of exotic electronic behavior in designer quantum
              materials.
            </div>
          </v-card-text>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-spacer />
        <v-btn nuxt text to="/contact/#tag=Nathan">
          <span>Contact Nathan</span>
          <v-icon color="primary" right>
            $mdiMessageArrowRight
          </v-icon>
        </v-btn>
        <v-btn
          text
          to="/assets/curriculum_vitae/nathan_2020_short.pdf"
          target="_blank"
          rel="nofollow"
        >
          <span>Nathan's CV</span>
          <v-icon color="secondary" right>
            $mdiOpenInNew
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <h2 class="text-h5 mt-12">Student Researchers:</h2>
    <v-row no-gutters class="mx-auto">
      <v-col cols="12" class="align-self-center"> </v-col>
      <v-col cols="12" md="1" align-self="center">
        Filters:
      </v-col>
      <v-spacer class="small" />
      <v-col cols="12" md="2">
        <v-switch
          v-model="memberFilterSwitchCF"
          color="accent"
          :loading="busy"
          :disabled="busy"
          :label="memberFilterSwitchCF ? 'Current' : 'Former'"
        />
      </v-col>
      <v-spacer class="small" />
      <v-col align-self="center" class="chipContainer">
        <v-chip-group
          v-model="memberChips"
          mandatory
          active-class="v-chip--disabled v-chip--outlined secondary"
          column
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
    <div class="rel">
      <transition-group name="cardItem" tag="div" class="row memberContainer">
        <v-col
          v-for="member in memberList"
          v-show="!member.hidden"
          :key="member.name"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card class="mx-auto stretchCard pb-10" :min-height="200" outlined>
            <v-list-item>
              <v-list-item-avatar size="80">
                <StoreImage
                  sub-category="members"
                  :item-id="member.name"
                  :alt="member.name"
                  width="85"
                  height="85"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="unsetWhiteSpace text-h6">
                  {{ member.first + ' ' + member.last }}
                </v-list-item-title>
                <v-list-item-subtitle class="unsetWhiteSpace subtitle-1">
                  <span>{{ member.dept }} </span>
                  <span v-if="member.level & 8">
                    <span v-if="member.level & 2">Ph.D.</span>
                    <span v-else-if="member.level & 4">B.S.</span>
                    <span v-if="member.grad_date">
                      {{ member.grad_date.slice(0, 4) }}
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
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-text class="pa-0 px-4 mt-4 body-1">
              <div class="white--text">Research:</div>
              <span class="font-weight-light">
                <dynamic-text :html="member.focus" />
              </span>
            </v-card-text>
            <div class="actions d-flex align-end pr-2">
              <v-spacer />
              <v-dialog
                v-model="member.dialog"
                max-width="1280"
                overlay-opacity="0.9"
                scrollable
                class="no-shadow"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text v-bind="attrs" v-on="on">
                    <span>About {{ member.name }}</span>
                    <v-icon right color="primary">$mdiPageNext</v-icon>
                  </v-btn>
                </template>
                <v-card
                  outlined
                  max-width="100%"
                  height="100%"
                  class="px-4 pt-2"
                >
                  <MemberCard :id="member.name" />
                  <v-card-actions>
                    <v-spacer />
                    <v-btn nuxt text :to="`/contact/#tag=${member.name}`">
                      <span>Contact {{ member.name }}</span>
                      <v-icon color="primary" right>
                        $mdiMessageArrowRight
                      </v-icon>
                    </v-btn>
                    <v-btn text @click="member.dialog = false">
                      <span>Close Window</span>
                      <v-icon color="error" right>$close</v-icon>
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
        class="centerItem abs"
        indeterminate
      />
    </div>
    <v-row>
      <v-col cols="12">
        <v-btn text nuxt to="/theses/">
          <span>Student Dissertations</span>
          <v-icon color="primary" right>$thesesPage</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12">
        <v-btn text nuxt to="/research/">
          <span>Research</span>
          <v-icon color="primary" right>$researchPage</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import StoreImage from '@/components/StoreImage.vue';
  import MemberCard from '@/components/MemberCard.vue';

  function recursiveFilter(memberList, filterFunc, callback, delayEach = 150) {
    const newHidden = [];
    const newShown = [];
    memberList.forEach((e) => {
      const test = filterFunc(e);
      if (e.hidden) {
        if (test) newShown.push(e);
      } else if (!test) newHidden.push(e);
      else if (newHidden.length !== 0) {
        newHidden.push(e);
        newShown.push(e);
      }
    });
    const delListLength = newHidden.length;
    for (let i = 0; i < delListLength; ++i) {
      setTimeout(
        () => (newHidden[delListLength - 1 - i].hidden = true),
        i * delayEach
      );
    }
    setTimeout(() => {
      newShown.forEach((e, i) =>
        setTimeout(() => (e.hidden = false), i * delayEach)
      );
    }, (delListLength + 1) * delayEach);
    setTimeout(
      () => callback(),
      (delListLength + newShown.length + 1) * delayEach
    );
  }

  export default {
    components: { StoreImage, MemberCard },
    async asyncData({ $axios, store }) {
      const { memberList, memberFilters } = await $axios.$get(
        '/members/cards/'
      );
      return {
        chips: memberFilters,
        memberList,
      };
    },
    data() {
      return {
        busy: false,
      };
    },
    computed: {
      memberFlags() {
        return 2 ** (this.memberChips - 1) + 8 * this.memberFilterSwitchCF;
      },
      memberFilterSwitchCF: {
        get() {
          return this.$store.state.localStorage.members.currentFormerSwitch;
        },
        set() {
          this.$store.commit('localStorage/toggleCurrentFormerSwitch', true);
        },
      },
      memberChips: {
        get() {
          return this.$store.state.localStorage.members.memberChips;
        },
        set(val) {
          this.$store.commit('localStorage/setMemberPageFlags', val);
        },
      },
    },
    watch: {
      memberFlags() {
        this.filterList();
      },
    },
    mounted() {
      this.$store.commit('pageTitle', `Members`);
      this.memberList.forEach((e) => {
        if (
          8 & (e.level ^ this.memberFlags) &&
          (!this.memberChips || e.level & this.memberFlags)
        )
          e.hidden = false;
      });
      this.busy = false;
    },
    methods: {
      filterList() {
        this.busy = true;
        recursiveFilter(
          this.memberList,
          (e) =>
            8 & (e.level ^ this.memberFlags) &&
            (!this.memberChips || e.level & this.memberFlags),
          () => (this.busy = false)
        );
      },
    },
    head() {
      return {
        title: 'Members',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `QMO Lab Members. QMO Lab @ UCR`,
          },
        ],
        link: [
          {
            rel: 'canonical',
            href: process.env.baseUrl + 'members/',
          },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  .chipContainer {
    flex-basis: 347px;
  }
  .memberContainer {
    min-height: 225px;
  }
</style>
