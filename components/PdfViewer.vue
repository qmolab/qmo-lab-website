<template>
  <v-row no-gutters class="mb-12">
    <v-col cols="12">
      <v-toolbar color="primary">
        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            text
            :disabled="loading || currentPage === 1"
            :loading="loading"
            @click="toPage(currentPage - 1)"
          >
            <v-icon>$prev</v-icon>
            <span>Prev</span>
          </v-btn>
          <span v-if="bookmarks.startPage" class="align-self-center">
            <span v-if="currentPage >= bookmarks.startPage">
              {{ currentPage - bookmarks.startPage + 1 }}/{{
                pageCount - bookmarks.startPage + 1
              }}
            </span>
            <span v-else>
              {{ convertToRoman(currentPage) }}/{{
                convertToRoman(bookmarks.startPage - 1)
              }}
            </span>
          </span>
          <span v-else class="align-self-center">
            {{ currentPage }}/{{ pageCount }}
          </span>
          <v-btn
            text
            :disabled="loading || currentPage === pageCount"
            :loading="loading"
            @click="toPage(currentPage + 1)"
          >
            <span>Next</span>
            <v-icon right>$next</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-col>
    <v-col class="hidden-sm-and-down" md="3" lg="4">
      <v-navigation-drawer
        v-if="navigation"
        permanent
        width="auto"
        class="pdfNav"
      >
        <v-list-item-group v-model="currentBookmark" mandatory>
          <div v-for="(group, j) in navigation" :key="j">
            <v-list-item
              v-for="(item, i) in group"
              :key="i"
              :disabled="currentPage === (item.page || item)"
              @click="toPage(item.page || item)"
            >
              <v-list-item-icon v-if="item.icon || Array.isArray(group)">
                <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
                <v-icon v-else>{{ numericIcons[i] }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title || i }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-navigation-drawer>
    </v-col>
    <v-col cols="12" md="9" lg="8" class="rel">
      <!--<div v-if="mounted">
        <pdf
          class="dim"
          :src="url"
          :page="currentPage"
          @num-pages="pageCount = $event"
          @page-loaded="load"
        />
      </div>-->
      <v-progress-circular
        v-if="loading"
        size="80"
        color="primary"
        indeterminate
        class="centerItem abs"
      />
    </v-col>
    <v-col cols="12">
      <v-toolbar color="#1f1f1f" flat>
        <v-toolbar-items>
          <v-btn text :href="url">
            <v-icon color="red">$pdf</v-icon>
            Download as PDF
            <v-icon right>$mdiDownload</v-icon>
          </v-btn>
        </v-toolbar-items>
        <v-spacer />
        <v-toolbar-items v-if="author">
          <v-btn nuxt text :to="`/members/#${author.toLowerCase()}`">
            <v-avatar size="50" class="align-self-center mr-1">
              <StoreImage
                width="57"
                height="57"
                sub-category="members"
                :item-id="author"
              />
            </v-avatar>
            <span class="align-self-center">About {{ author }}</span>
            <v-icon right color="primary">$mdiPageNext</v-icon>
          </v-btn>
          <v-btn
            nuxt
            text
            :to="`/contact/#tag=${author}&subject=thesis`"
            class="ml-2"
          >
            <span>Contact {{ author }}</span>
            <v-icon right color="primary">$mdiMessageArrowRight</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-col>
  </v-row>
</template>

<script>
  import {
    mdiNumeric1Box,
    mdiNumeric2Box,
    mdiNumeric3Box,
    mdiNumeric4Box,
    mdiNumeric5Box,
    mdiNumeric6Box,
    mdiNumeric7Box,
    mdiNumeric8Box,
    mdiNumeric9Box,
  } from '@mdi/js';
  // import pdf from 'vue-pdf';
  import StoreImage from '@/components/StoreImage.vue';
  function convertToRoman(num) {
    const roman = {
      x: 10,
      ix: 9,
      v: 5,
      iv: 4,
      i: 1,
    };
    let s = '';

    for (const i of Object.keys(roman)) {
      const q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      s += i.repeat(q);
    }

    return s;
  }
  export default {
    components: { StoreImage },
    props: {
      url: { type: [String, Object], default: '' },
      title: { type: String, default: '' },
      author: { type: String, default: '' },
      bookmarks: { type: Object, default: () => ({}) },
    },
    data: () => ({
      currentPage: 1,
      pageCount: 0,
      loading: true,
      mounted: false,
      currentBookmark: 0,
      numericIcons: [
        mdiNumeric1Box,
        mdiNumeric2Box,
        mdiNumeric3Box,
        mdiNumeric4Box,
        mdiNumeric5Box,
        mdiNumeric6Box,
        mdiNumeric7Box,
        mdiNumeric8Box,
        mdiNumeric9Box,
      ],
    }),
    computed: {
      navigation() {
        return [
          {
            'Title Page': {
              icon: '$mdiHome',
              page: 1,
            },
            ...this.bookmarks.frontMatter,
          },
          this.bookmarks.chapters,
          this.bookmarks.endMatter,
        ];
      },
    },
    created() {
      this.$router.onError(() => {
        // eslint-disable-next-line no-console
        console.log('asdf');
      });
    },
    mounted() {
      setTimeout(() => (this.mounted = true), 1000);
    },
    methods: {
      toPage(page) {
        this.loading = true;
        this.currentPage = page;
        if (this.bookmarks) {
          let bookmark = -1;
          for (let i = 0; i < this.navigation.length; ++i) {
            const nav = this.navigation[i];
            for (const j in nav) {
              const current = nav[j].page || nav[j];
              if (current <= page) ++bookmark;
              else {
                this.currentBookmark = bookmark;
                return;
              }
            }
          }
        }
      },
      load(page) {
        this.currentPage = page;
        this.loading = false;
      },
      convertToRoman(num) {
        return convertToRoman(num);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .pdfNav {
    overflow-y: auto;
  }
</style>
