<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="flat ? 0 : canHover && hover ? elevationHover : elevation"
      :height="height"
      :nuxt="linkToLinkPage"
      :to="linkToLinkPage ? to : undefined"
      :color="color(hover)"
      class="fundingCard"
    >
      <v-card-title>Lab Funding:</v-card-title>
      <v-row>
        <v-col v-for="(fundingSource, n) in images" :key="n" :cols="colSpan">
          <BaseImage
            :src="fundingSource.src"
            :webp="fundingSource.webp"
            :alt="fundingSource.alt"
            :title="fundingSource.title"
            :max-height="maxHeight"
            contain
          />
        </v-col>
      </v-row>
    </v-card>
  </v-hover>
</template>

<script>
  import BaseImage from '@/components/BaseImage.vue';
  export default {
    name: 'FundingCard',
    components: { BaseImage },
    props: {
      to: {
        type: String,
        default: '/links',
      },
      height: {
        type: String,
        default: 'initial',
      },
      maxHeight: {
        type: Number,
        default: 80,
      },
      colSpan: {
        type: Number,
        default: 3,
      },
      tooltipDelay: {
        type: Number,
        default: 500,
      },
      canHover: {
        type: Boolean,
        default: true,
      },
      linkToLinkPage: {
        type: Boolean,
        default: true,
      },
      flat: {
        type: Boolean,
        default: false,
      },
      elevation: {
        type: Number,
        default: 2,
      },
      elevationHover: {
        type: Number,
        default: 12,
      },
      bgOpacity: {
        type: Number,
        default: 0.01,
      },
      bgOpacityHover: {
        type: Number,
        default: 0.02,
      },
    },
    data() {
      return {
        dummy: 0,
        images: [
          {
            src: require('~/assets/images/funding_logos/NSF_logo.png?resize&format=png'),
            webp: require('~/assets/images/funding_logos/NSF_logo.png?webp'),
            alt: 'NSF Logo',
            title: 'The National Science Foundation',
          },
          {
            src: require('~/assets/images/funding_logos/CIFAR_logo.png?resize&format=png'),
            webp: require('~/assets/images/funding_logos/CIFAR_logo.png?webp'),
            alt: 'CIFAR Logo',
            title: 'Canadian Institute for the Advanced Research',
          },
          {
            src: require('~/assets/images/funding_logos/SHINES_logo.png?resize&format=png'),
            webp: require('~/assets/images/funding_logos/SHINES_logo.png?webp'),
            alt: 'SHINES Logo',
            title: 'Spin and Heat in Nanoscale Electronic Systems',
          },
          {
            src: require('~/assets/images/funding_logos/RCSA_logo.png?resize&format=png'),
            webp: require('~/assets/images/funding_logos/RCSA_logo.png?webp'),
            alt: 'RCSA Logo',
            title: 'Research Corporation for Science Advancement',
          },
        ],
      };
    },
    methods: {
      color(hovering) {
        return (
          'rgba(255,255,255,' +
          (hovering ? this.bgOpacityHover : this.bgOpacity).toString() +
          ')'
        );
      },
    },
  };
</script>

<style scoped lang="scss">
  .fundingCard {
    transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
