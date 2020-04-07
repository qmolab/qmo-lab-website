<template>
  <v-col class="funding-card-container">
    <v-card
      :height="height"
      :max-width="maxWidth"
      class="funding-card"
      color="#1d1d1d"
      :to="to"
      :hover="hover"
    >
      <v-card-title class="funding-card-title">Lab Funding: </v-card-title>
      <div class="funding-card-image-area">
        <img
          src="~assets/images/funding_logos/NSF_logo.png"
          class="funding-card-image nsfLogo"
        />
        <img
          src="~assets/images/funding_logos/CIFAR_logo.png"
          class="funding-card-image cifarLogo"
        />
        <img
          src="~assets/images/funding_logos/SHINES_logo.png"
          class="funding-card-image shinesLogo"
        />
        <img
          src="~assets/images/funding_logos/RCSA_logo.png"
          class="funding-card-image hidden-sm-and-down rcsaLogo"
        />
      </div>
    </v-card>
  </v-col>
</template>

<script>
  export default {
    name: 'FundingCard',
    props: {
      to: {
        type: String,
        default: '/links',
      },
      height: {
        type: String,
        default: 'initial',
      },
      maxWidth: {
        type: Number,
        default: 819,
      },
      hover: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        images: [
          {
            src: '~assets/images/funding_logos/NSF_logo.png',
            class: 'nsfLogo',
          },
          {
            src: '~assets/images/funding_logos/CIFAR_logo.png',
            class: 'cifarLogo',
          },
          {
            src: '~assets/images/funding_logos/SHINES_logo.png',
            class: 'shinesLogo',
          },
          {
            src: '~assets/images/funding_logos/RCSA_logo.png',
            class: 'hidden-sm-and-down rcsaLogo',
          },
        ],
      };
    },
  };
</script>

<style scoped lang="scss">
  .funding-card-container {
    padding: 0;
    width: 500px;
    .funding-card {
      flex-grow: 1;
      margin: 12px;
      overflow: hidden;
      float: right;
      .funding-card-title {
        padding: 0;
        padding-bottom: 8px;
      }
      .funding-card-image-area {
        display: flex;
        .funding-card-image {
          max-height: 80px;
          .nsfLogo {
            width: 40px;
            max-width: 80px;
          }
          .cifarLogo {
            width: 117px;
            max-width: 235px;
          }
          .shinesLogo {
            width: 75px;
            max-width: 150px;
          }
          .rcsaLogo {
            width: 130px;
            max-width: 260px;
          }
        }
      }
    }
  }
</style>
