<template>
  <div class="publicationsPage">
    <h2 class="mt-4 headline ml-1">Featured Publications</h2>
    <v-row>
      <v-col
        v-for="(item, i) in publicationsList"
        :key="i"
        cols="12"
        md="6"
        class="mx-auto"
      >
        <v-card v-if="item.description" class="stretchCard pb-10">
          <v-list-item>
            <v-list-item-content class="align-self-start">
              <div class="overline mb-2">{{ item.authors }}</div>
              <v-list-item-title class="mb-1" style="white-space: unset;">
                <DynamicText :html="item.title" />
              </v-list-item-title>
              <v-list-item-subtitle>{{ item.reference }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar tile size="120" color="grey">
              <BaseImage
                v-if="item.img && images[item.img]"
                class="mt-2 px-3"
                :src="images[item.img].img"
                :webp="images[item.img].webp"
                :alt="item.alt"
                :title="item.title"
                :aspect-ratio="1"
                width="120"
                height="120"
              />
            </v-list-item-avatar>
          </v-list-item>
          <!--
          <v-list-item style="height: 60px; line-height: 1.15rem;">
            <div
              class="primary pubYearCircle mr-2 d-flex"
              style="background-color: unset !important;"
            >
              '{{ item.date.slice(2, 4) }}
            </div>
            <v-list-item-content>
              <div class="subtitle-2">{{ item.authors }}</div>
            </v-list-item-content>
          </v-list-item>

          <BaseImage
            v-if="item.img && images[item.img]"
            class="mt-2 px-3 aspect-667"
            :src="images[item.img].img"
            :webp="images[item.img].webp"
            :alt="item.alt"
            :title="item.title"
            :aspect-ratio="3 / 2"
          >
            <div class="textOnImage px-4 subtitle-2">
              {{ item.reference }}
            </div>
          </BaseImage>
          <div class="pt-1 px-4 title">
            <span style="font-size: 0.8em;">
              <DynamicText :html="item.title" />
            </span>
          </div>
          -->
          <v-card-text>
            <DynamicText :html="item.description" />
          </v-card-text>
          <v-card-actions class="px-2 actions">
            <v-spacer />
            <v-btn text disabled>
              <span>Share</span>
              <v-icon right color="secondary">$mdiShareVariant</v-icon>
            </v-btn>

            <v-btn text :href="item.href" target="_blank" rel="noopener">
              <span>Read more</span>
              <v-icon right color="secondary">$mdiOpenInNew</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <h2 class="headline mb-4 l-1">Additional Publications and Patents</h2>
    <v-sheet class="mb-8">
      <v-lazy min-height="500">
        <v-row>
          <v-col
            v-for="(item, i) in publicationsList.filter((e) => !e.description)"
            :key="i"
            cols="12"
            sm="6"
          >
            <v-card raised class="stretchCard mb-12">
              <v-list-item>
                <v-list-item-content>
                  <div class="overline mb-2">{{ item.authors }}</div>
                  <v-list-item-title class="mb-1" style="white-space: unset;">
                    <DynamicText :html="item.title" />
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <DynamicText :html="item.reference" />
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <!--
              <v-card-title>
                <DynamicText :html="item.title" />
              </v-card-title>
              <v-card-subtitle>
                <DynamicText :html="item.authors" />
                <span> -- </span>
                <DynamicText :html="item.reference" />
              </v-card-subtitle>
              -->
              <div v-if="item.href" class="actions">
                <v-btn
                  text
                  small
                  :href="item.href"
                  target="_blank"
                  rel="noopener"
                >
                  <span>{{ item.href }}</span>
                  <v-icon right color="secondary">$mdiOpenInNew</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-lazy>
    </v-sheet>
  </div>
</template>

<script>
  import BaseImage from '@/components/BaseImage.vue';
  import DynamicText from '@/components/DynamicText.vue';
  import headAndTitle from '@/assets/js/headAndTitle';
  export default {
    components: {
      BaseImage,
      DynamicText,
    },
    async asyncData({ $axios, $payloadURL, route, store }) {
      if (process.static && process.client && $payloadURL)
        return await $axios.$get($payloadURL(route));
      const publicationsList = await $axios.$get('/publications/cards/');
      return { publicationsList };
    },
    data() {
      return {
        images: {
          phase_space_th: {
            img: require('~/assets/images/publications/phase_space_th.png?resize'),
            webp: require('~/assets/images/publications/phase_space_th.png?webp'),
            alt: 'MPDPM',
          },
          'e-h_small': {
            img: require('~/assets/images/publications/e-h_small.jpg?resize'),
            webp: require('~/assets/images/publications/e-h_small.jpg?webp'),
            alt: 'Electron-hole liquid',
          },
          graphene_cool_low_dof_th: {
            img: require('~/assets/images/publications/graphene_cool_low_dof_th.png?resize'),
            webp: require('~/assets/images/publications/graphene_cool_low_dof_th.png?webp'),
            alt: 'Graphene Sheets',
          },
          graphene_twist_web: {
            img: require('~/assets/images/publications/graphene_twist_web.png?resize'),
            webp: require('~/assets/images/publications/graphene_twist_web.png?webp'),
            alt: 'Twisted Graphene',
          },
          impact: {
            img: require('~/assets/images/publications/impact.png?resize'),
            webp: require('~/assets/images/publications/impact.png?webp'),
            alt: 'Electron-hole pair multiplication',
          },
          green_th: {
            img: require('~/assets/images/publications/green_th.jpg?resize'),
            webp: require('~/assets/images/publications/green_th.jpg?webp'),
            alt: 'Green Quantum Photocell',
          },
          ndaln: {
            img: require('~/assets/images/publications/ndaln.png?resize'),
            webp: require('~/assets/images/publications/ndaln.png?webp'),
            alt: 'Nd:AlN polycrystalline ceramics',
          },
          trions: {
            img: require('~/assets/images/publications/trions.jpg?resize'),
            webp: require('~/assets/images/publications/trions.jpg?webp'),
            alt: 'Trions',
          },
          R3: {
            img: require('~/assets/images/publications/R3.jpg?resize'),
            webp: require('~/assets/images/publications/R3.jpg?webp'),
            alt: 'Lift Off for Graphene',
          },
          '1nodes': {
            img: require('~/assets/images/publications/1nodes.jpg?resize'),
            webp: require('~/assets/images/publications/1nodes.jpg?webp'),
            alt: 'Impact Excitation and Electron-Hole Multiplication',
          },
          '2escape': {
            img: require('~/assets/images/publications/2escape.jpg?resize'),
            webp: require('~/assets/images/publications/2escape.jpg?webp'),
            alt: 'Ultrafast Photocurrent Measurements',
          },
          '3hotcarriers': {
            img: require('~/assets/images/publications/3hotcarriers.jpg?resize'),
            webp: require('~/assets/images/publications/3hotcarriers.jpg?webp'),
            alt: 'Hot Carrier-Assisted Intrinsic Photoresponse in Graphene',
          },
          '6phyllo': {
            img: require('~/assets/images/publications/6phyllo.jpg?resize'),
            webp: require('~/assets/images/publications/6phyllo.jpg?webp'),
            alt: 'Annealing a Magnetic Cactus Into Phyllotaxis',
          },
          '4multiplication': {
            img: require('~/assets/images/publications/4multiplication.jpg?resize'),
            webp: require('~/assets/images/publications/4multiplication.jpg?webp'),
            alt: `Extremely Efficient Multiple Electron-Hole Pair Generation in Carbon Nanotube Photodiodes`,
          },
          '5phyllotaxis': {
            img: require('~/assets/images/publications/5phyllotaxis.jpg?resize'),
            webp: require('~/assets/images/publications/5phyllotaxis.jpg?webp'),
            alt: 'Static and Dynamical Phyllotaxis in a Magnetic Cactus',
          },
        },
      };
    },
    ...headAndTitle('Publications', `QMO Lab @ UCR Publications Page.`),
  };
</script>

<style lang="scss" scoped>
  .pubYearCircle {
    border: 2px solid;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
  }
</style>
