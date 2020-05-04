<template>
  <div>
    <div class="carousel_slider">
      <BaseCarousel :slides="heroSlides" cycle />
    </div>
    <BaseLayout>
      <slot />
    </BaseLayout>
  </div>
</template>
<script>
  import BaseCarousel from '@/components/BaseCarousel.vue';
  import BaseLayout from '@/components/layouts/BaseLayout.vue';
  export default {
    components: { BaseCarousel, BaseLayout },
    data() {
      return {
        heroSlides: [
          {
            src: require('~/assets/images/hero_carousel/jackyGloveBox2.jpg?resize&sizes[]=300,sizes[]=760,sizes[]=1240,sizes[]=1920'),
            webp: require('~/assets/images/hero_carousel/jackyGloveBox2.jpg?webp'),
            alt: 'Routine Lab Work Poster',
            title: 'learn more about research projects in the QMO Labs',
          },
          {
            src: require('~/assets/images/hero_carousel/e-h_liquid_banner_2.png?resize&sizes[]=300,sizes[]=760,sizes[]=1240,sizes[]=1920'),
            webp: require('~/assets/images/hero_carousel/e-h_liquid_banner_2.png?webp'),
            alt: 'Electron Hole Liquid',
            title:
              'exotic droplets: atomic layers can host novel electron-hole liquid ',
          },
          {
            src: require('~/assets/images/hero_carousel/graphene_cool_low_dof_hd_cropped.png?resize&sizes[]=300,sizes[]=760,sizes[]=1240,sizes[]=1920'),
            webp: require('~/assets/images/hero_carousel/graphene_cool_low_dof_hd_cropped.png?webp'),
            alt: 'Clean Graphene Sheets',
            title:
              'clean sheets: giant photocurrents manifest in pristine graphene layers ',
          },
          {
            src: require('~/assets/images/hero_carousel/green.jpg?resize&sizes[]=300,sizes[]=760,sizes[]=1240,sizes[]=1920'),
            webp: require('~/assets/images/hero_carousel/green.jpg?webp'),
            alt: 'Photosynthesis Poster',
            title:
              'green machines: quantum photocells naturally regulate internal energy flows',
          },
        ],
      };
    },
  };
</script>

<style scoped lang="scss">
  @import '~vuetify/src/styles/styles.sass';
  .carousel_slider {
    height: 350px;
    @media (max-width: 960px) {
      height: 250px;
    }
  }
</style>
