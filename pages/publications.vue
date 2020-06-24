<template>
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
                  >
                    <dynamic-text :html="item.title" />
                  </h3>
                  <v-list-item-subtitle class="subtitle-1 unsetWhiteSpace">
                    <dynamic-text :html="item.reference" />
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="120"
                  color="grey"
                  class="align-self-start mt-4"
                >
                  <BaseImage
                    v-if="item.img && images[item.img]"
                    class="mt-2 px-3"
                    :src="images[item.img].img"
                    :alt="item.alt || item.title"
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
                >
                  <dynamic-text :html="item.title" />
                </h3>
                <v-list-item-subtitle>
                  <dynamic-text :html="item.reference" />
                </v-list-item-subtitle>
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
  import BaseImage from '@/components/BaseImage.vue';
  import SocialShareMenu from '@/components/SocialShareMenu.vue';
  import headAndTitle from '@/assets/js/headAndTitle';
  export default {
    components: { BaseImage, SocialShareMenu },
    async asyncData({ $axios }) {
      const pubList = await $axios.$get('/publications/cards/');
      return { pubListMain: pubList.main, pubListAux: pubList.aux };
    },
    data() {
      return {
        images: {
          phase_space_th: {
            img: require('~/assets/images/publications/phase_space_th.png?resize'),
            alt: 'MPDPM',
          },
          'e-h_small': {
            img: require('~/assets/images/publications/e-h_small.jpg?resize'),
            alt: 'Electron-hole liquid',
          },
          graphene_cool_low_dof_th: {
            img: require('~/assets/images/publications/graphene_cool_low_dof_th.png?resize'),
            alt: 'Graphene Sheets',
          },
          graphene_twist_web: {
            img: require('~/assets/images/publications/graphene_twist_web.png?resize'),
            alt: 'Twisted Graphene',
          },
          impact: {
            img: require('~/assets/images/publications/impact.png?resize'),
            alt: 'Electron-hole pair multiplication',
          },
          green_th: {
            img: require('~/assets/images/publications/green_th.jpg?resize'),
            alt: 'Green Quantum Photocell',
          },
          ndaln: {
            img: require('~/assets/images/publications/ndaln.png?resize'),
            alt: 'Nd:AlN polycrystalline ceramics',
          },
          trions: {
            img: require('~/assets/images/publications/trions.jpg?resize'),
            alt: 'Trions',
          },
          R3: {
            img: require('~/assets/images/publications/R3.jpg?resize'),
            alt: 'Lift Off for Graphene',
          },
          '1nodes': {
            img: require('~/assets/images/publications/1nodes.jpg?resize'),
            alt: 'Impact Excitation and Electron-Hole Multiplication',
          },
          '2escape': {
            img: require('~/assets/images/publications/2escape.jpg?resize'),
            alt: 'Ultrafast Photocurrent Measurements',
          },
          '3hotcarriers': {
            img: require('~/assets/images/publications/3hotcarriers.jpg?resize'),
            alt: 'Hot Carrier-Assisted Intrinsic Photoresponse in Graphene',
          },
          '6phyllo': {
            img: require('~/assets/images/publications/6phyllo.jpg?resize'),
            alt: 'Annealing a Magnetic Cactus Into Phyllotaxis',
          },
          '4multiplication': {
            img: require('~/assets/images/publications/4multiplication.jpg?resize'),
            alt: `Extremely Efficient Multiple Electron-Hole Pair Generation in Carbon Nanotube Photodiodes`,
          },
          '5phyllotaxis': {
            img: require('~/assets/images/publications/5phyllotaxis.jpg?resize'),
            alt: 'Static and Dynamical Phyllotaxis in a Magnetic Cactus',
          },
          intervalley_exciton: {
            img: require('~/assets/images/publications/intervalley_exciton.png?resize'),
            alt: 'Optical Recombination of Intervalley Excitons',
          },
        },
      };
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
