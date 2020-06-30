<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="publicationsPage">
    <h2 class="mt-4 text-h5 ml-1">Featured Publications</h2>
    <v-row>
      <v-col
        v-for="(item, i) in pubListMain"
        :key="i"
        cols="12"
        lg="6"
        class="mx-auto"
      >
        <v-card v-if="item.description" class="stretchCard">
          <a :href="item.href" target="_blank" rel="noopener">
            <div class="mb-10">
              <v-list-item>
                <v-list-item-content class="align-self-start">
                  <div class="overline text--secondary">
                    {{ item.authors }}
                  </div>
                  <h3
                    class="v-list-item__title text-h6 font-weight-thin mb-1 unsetWhiteSpace"
                    v-html="item.title"
                  />
                  <v-list-item-subtitle
                    class="subtitle-1 unsetWhiteSpace"
                    v-html="item.reference"
                  />
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="120"
                  color="grey"
                  class="align-self-start mt-4"
                >
                  <QImg
                    v-if="item.img"
                    :name="item.img"
                    :placeholder="item.placeholder"
                    cat="publications"
                    class="mt-2 px-3"
                    :alt="item.alt || item.title"
                    :title="item.title"
                    :aspect-ratio="1"
                    :contain="false"
                    width="125"
                    height="125"
                  />
                </v-list-item-avatar>
              </v-list-item>
              <v-card-text class="body-1 text--secondary">
                <dynamic-text :html="item.description" />
              </v-card-text>
            </div>
          </a>
          <v-card-actions class="px-2 actions">
            <v-spacer />
            <v-menu bottom offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn text dark v-bind="attrs" v-on="on">
                  <span>Share</span>
                  <v-icon right color="primary">
                    $mdiShareVariant
                  </v-icon>
                </v-btn>
              </template>
              <SocialShareMenu
                :url="item.href"
                :title="item.title"
                :description="item.description"
              />
            </v-menu>

            <v-btn text :href="item.href" target="_blank" rel="noopener">
              <span>Read more</span>
              <v-icon right color="secondary">$mdiOpenInNew</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <h2 class="text-h5 mb-4 ml-1 mt-8">Additional Publications and Patents</h2>
    <v-sheet class="mb-8 px-2">
      <v-row>
        <v-col v-for="(item, i) in pubListAux" :key="i" cols="12" sm="6">
          <v-card outlined class="stretchCard mb-10">
            <v-list-item>
              <v-list-item-content class="py-1">
                <div class="overline text--secondary">
                  {{ item.authors }}
                </div>
                <h3
                  class="v-list-item__title font-weight-regular mb-1 text--primary unsetWhiteSpace"
                  v-html="item.title"
                />
                <v-list-item-subtitle v-html="item.reference" />
              </v-list-item-content>
            </v-list-item>
            <div v-if="item.href" class="actions">
              <v-btn
                text
                :href="item.href"
                target="_blank"
                rel="noopener"
                class="ellipsis"
              >
                <span class="v-btn__text">{{ item.href }}</span>
                <v-icon right color="secondary">$mdiOpenInNew</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
  import QImg from '@/components/lib/QImg.vue';
  import SocialShareMenu from '@/components/SocialShareMenu.vue';
  import headAndTitle from '@/assets/js/headAndTitle';
  export default {
    components: { QImg, SocialShareMenu },
    async asyncData({ $axios }) {
      const pubList = await $axios.$get('/publications/cards/');
      return { pubListMain: pubList.main, pubListAux: pubList.aux };
    },
    ...headAndTitle(
      'Publications',
      'publications/',
      `QMO Lab @ UCR Publications Page.`
    ),
  };
</script>

<style lang="scss" scoped>
  .v-list-item__title {
    letter-spacing: 1px;
  }
</style>
