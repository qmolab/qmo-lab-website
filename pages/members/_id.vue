<template>
  <v-sheet class="memberPage mt-8 py-4 px-6 mb-12">
    <v-row>
      <v-col cols="12" md="4" style="max-width: 300px;">
        <StoreImage sub-category="members" :item-id="name" />
      </v-col>
      <v-col>
        <h2 class="headline">{{ first }} {{ last }}</h2>
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
          <h3 class="title font-weight-light">Research Focus:</h3>
          <div class="font-weight-light">{{ focus }}</div>
        </div>
      </v-col>
      <v-col cols="12">
        <div v-if="honors.publications && honors.publications.length !== 0">
          <h3 class="title font-weight-light">
            {{ honors.publications.title }}
          </h3>
          <v-list style="line-height: 18px;">
            <v-list-item
              v-for="item in honors.publications.payload"
              :key="item.title"
              :href="item.href"
            >
              <v-row no-gutters>
                <v-list-item-avatar
                  size="24"
                  color="primary"
                  class="align-self-center"
                  style="max-width: 24px;"
                />
                <v-col class="ml-2 pt-1">
                  <span v-if="item.title" class="font-weight-light">
                    "<DynamicText :html="item.title" />"
                    {{ item.reference }}
                  </span>
                  <v-list-item-icon class="mt-2">
                    <v-icon>{{ mdiOpenInNew }}</v-icon>
                  </v-list-item-icon>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </div>
        <div v-if="honors.news && honors.news.length !== 0" class="my-8">
          <h3 class="title font-weight-light">{{ honors.news.title }}</h3>
          <ul>
            <li
              v-for="item in honors.news.payload"
              :key="item.title"
              class="fancyListItem"
            >
              <PrettyDate :value="item.date" />:
              <DynamicText
                v-if="item.title"
                :html="item.title"
                class="font-weight-light"
              />
            </li>
          </ul>
        </div>
      </v-col>
      <v-col>
        <v-btn v-if="cv" text :href="cv">
          <v-icon>{{ mdiFileAccount }}</v-icon>
          <span>{{ name }}'s CV</span>
          <v-icon>{{ mdiOpenInNew }}</v-icon>
        </v-btn>
        <v-btn v-if="website" text :href="website">
          <v-icon right>{{ mdiWeb }}</v-icon>
          <span>{{ name }}'s Website</span>
          <v-icon right>{{ mdiOpenInNew }}</v-icon>
        </v-btn>
        <v-btn nuxt text :to="`/resources/contact/#tag=${name}`">
          <span>Contact {{ name }}</span>
          <v-icon right>{{ mdiMessageArrowRight }}</v-icon>
        </v-btn>
        <v-btn v-if="(level & 10) === 10" nuxt text :to="dissertationRoute">
          <span>Dissertation</span>
          <v-icon right>{{ mdiBookOpenVariant }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
  import {
    mdiOpenInNew,
    mdiMessageArrowRight,
    mdiFileAccount,
    mdiWeb,
    mdiBookOpenVariant,
  } from '@mdi/js';
  import StoreImage from '@/components/StoreImage.vue';
  import DynamicText from '@/components/DynamicText.vue';
  import PrettyDate from '@/components/lib/PrettyDate.vue';

  export default {
    components: { StoreImage, DynamicText, PrettyDate },
    async asyncData({ $axios, params /* payload, $payloadURL, route */ }) {
      // if (payload) return payload;
      // else if (process.static && process.client && $payloadURL)
      //   return await $axios.$get($payloadURL(route));
      // else {
      const item = await $axios.$get('/members/routes/route/', {
        params: { name: params.id },
      });
      const honors = {};
      if (item.news && item.news.length > 0)
        honors.news = { title: item.name + ' in the news', payload: item.news };
      if (item.publications && item.publications.length > 0)
        honors.publications = {
          title: item.name + "'s Publications",
          payload: item.publications,
        };
      const postDocDates = item.post_doc_dates
        ? JSON.parse(item.post_doc_dates)
        : undefined;
      return {
        name: item.name,
        first: item.first,
        last: item.last,
        focus: item.focus,
        dept: item.dept,
        level: parseInt(item.level),
        grad_date: item.grad_date,
        post_doc_dates: postDocDates,
        honors,
        mdiBookOpenVariant,
        mdiMessageArrowRight,
        mdiFileAccount,
        mdiWeb,
        website: item.website,
        cv: item.cv,
        titles: [
          'Post Doctoral Researcher',
          'Grad Student',
          'Undergraduate Student',
        ],
      };
      // }
    },
    data() {
      return { mdiOpenInNew };
    },
    computed: {
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
      dissertationRoute() {
        return (
          '/members/theses/' +
          (this.first + '_' + this.last + '/').toLowerCase()
        );
      },
    },
  };
</script>

<style lang="scss" scoped>
  fancyListItem::before {
    content: '\2022';
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
</style>
