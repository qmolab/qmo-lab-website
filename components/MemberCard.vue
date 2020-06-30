<template>
  <!-- eslint-disable vue/no-v-html -->
  <v-fade-transition>
    <v-progress-circular
      v-if="loading"
      color="primary"
      size="72"
      class="centerItem abs"
      indeterminate
    />
    <v-row v-else dense>
      <v-col cols="1" class="minW-256">
        <QImg
          width="250"
          cat="members"
          :name="name"
          :placeholder="placeholder"
        />
      </v-col>
      <v-col>
        <h2 class="text-h5">{{ first }} {{ last }}</h2>
        <div class="font-weight-light subtitle-2">
          <span v-if="level & 8">Former</span>
          <span>{{ dept }}</span>
          <div v-for="(title, i) in titles" :key="title" class="d-inline">
            <span v-if="level & (1 << i)">
              {{ title }}
            </span>
          </div>
        </div>
        <div>{{ byline }}</div>
        <div class="my-12">
          <h3 class="font-weight-light">Research Focus:</h3>
          <div class="font-weight-light">{{ focus }}</div>
        </div>
      </v-col>
      <v-col class="mt-2" cols="12">
        <div v-if="honors.publications && honors.publications.length !== 0">
          <h3 class="font-weight-light text-capitalize">
            {{ honors.publications.title }}
          </h3>
          <v-list dense>
            <v-list-item
              v-for="item in honors.publications.payload"
              :key="item.title"
              :href="item.href"
              target="_blank"
              rel="noopener"
            >
              <v-list-item-avatar
                size="12"
                color="primary"
                class="align-self-center"
              />
              <v-list-item-content>
                <v-list-item-title class="body-1">
                  <span v-if="item.title" class="font-weight-light">
                    "<span v-html="item.title" />",
                    <span v-html="item.reference" />
                  </span>
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon class="mt-2">
                <v-icon color="secondary">$mdiOpenInNew</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </div>
        <div v-if="honors.news && honors.news.length !== 0" class="my-8">
          <h3 class="font-weight-light text-capitalize">
            {{ honors.news.title }}
          </h3>
          <v-list dense>
            <v-list-item v-for="item in honors.news.payload" :key="item.title">
              <v-list-item-avatar
                size="12"
                color="primary"
                class="align-self-center"
              />
              <v-list-item-content>
                <v-list-item-title class="body-1">
                  <span v-text="item.date" />:
                  <dynamic-text
                    v-if="item.tag_line || item.title"
                    :html="item.tag_line || item.title"
                    class="font-weight-light"
                  />
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
      <v-col>
        <v-btn v-if="(level & 10) === 10" nuxt text :to="dissertationRoute">
          <span>{{ name }}'s Dissertation</span>
          <v-icon color="primary" right>$thesisPage</v-icon>
        </v-btn>
        <v-btn v-if="cv" text :href="cv" target="_blank" rel="noopener">
          <v-icon color="blue-grey" left>$pdf</v-icon>
          <span>{{ name }}'s CV</span>
          <v-icon color="secondary" right>$mdiOpenInNew</v-icon>
        </v-btn>
        <v-btn
          v-if="website"
          text
          :href="website"
          target="_blank"
          rel="noopener"
        >
          <v-icon color="primary" left>$mdiWeb</v-icon>
          <span>{{ name }}'s Website</span>
          <v-icon color="secondary" right>$mdiOpenInNew</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-fade-transition>
</template>

<script>
  import QImg from '@/components/lib/QImg.vue';

  export default {
    components: { QImg },
    props: { id: { type: String, required: true } },
    data() {
      return {
        titles: [
          'Post Doctoral Researcher',
          'Grad Student',
          'Undergraduate Student',
        ],
        name: '',
        placeholder: undefined,
        first: '',
        last: '',
        focus: '',
        dept: '',
        level: 0,
        grad_date: '',
        post_doc_dates: '',
        honors: {},
        website: '',
        cv: '',
        loading: true,
      };
    },
    computed: {
      dissertationRoute() {
        return '/theses/' + (this.first + '_' + this.last + '/').toLowerCase();
      },
      byline() {
        let s = '';
        if ((this.level & 9) === 9) {
          s +=
            'Post Doc from ' +
            this.post_doc_dates.map((e) => e.slice(0, 4)).join(' through ');
          s += (this.level & 9) !== this.level ? ', ' : ' ';
        }
        if (this.level & 8) {
          s +=
            (this.level & 2 ? 'Ph.D. ' : 'B.S. ') + this.grad_date.slice(0, 4);
        }
        return s;
      },
    },
    mounted() {
      this.update();
    },
    methods: {
      async update() {
        const item = await this.$axios.$get('/members/routes/route/', {
          params: { name: this.id },
        });
        const honors = {};
        if (item.news && item.news.length > 0)
          honors.news = {
            title: item.name + ' in the news',
            payload: item.news,
          };
        if (item.publications && item.publications.length > 0)
          honors.publications = {
            title: item.name + "'s Publications",
            payload: item.publications,
          };
        const postDocDates = item.post_doc_dates
          ? JSON.parse(item.post_doc_dates)
          : undefined;
        this.name = item.name;
        this.placeholder = item.placeholder;
        this.first = item.first;
        this.last = item.last;
        this.focus = item.focus;
        this.dept = item.dept;
        this.level = parseInt(item.level);
        this.grad_date = item.grad_date;
        this.post_doc_dates = postDocDates;
        this.honors = honors;
        this.website = item.website;
        this.cv = item.cv;
        this.loading = false;
      },
    },
  };
</script>
