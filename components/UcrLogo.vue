<template>
  <a href="https://ucr.edu" target="blank">
    <v-tooltip bottom open-delay="500">
      <template v-slot:activator="{ on }">
        <v-img
          :src="src"
          :lazy-src="require('~/assets/images/ucr_logo_blGd.png?lqip')"
          :alt="alt"
          :max-width="maxWidth"
          class="ucrLogo"
          v-on="on"
        />
      </template>
      <span>{{ title }}</span>
    </v-tooltip>
  </a>
</template>

<script>
  export default {
    name: 'UcrLogo',
    props: {
      maxWidth: {
        type: Number,
        default: 380,
      },
      title: {
        type: String,
        default: "Visit UCR's main site",
      },
      alt: {
        type: String,
        default: 'University of California, Riverside',
      },
    },
    data() {
      return {
        src: require('~/assets/images/ucr_logo_blGd.png?resize&quality=55&format=png&size=300'),
      };
    },
  };
</script>

<style scoped lang="scss">
  .ucrLogo {
    margin: auto;
  }
</style>
