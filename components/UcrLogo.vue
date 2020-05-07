<template>
  <a href="https://ucr.edu" target="_blank" rel="noopener">
    <v-tooltip bottom :open-delay="500">
      <template v-slot:activator="{ on }">
        <v-img
          :src="src.src"
          :srcset="src.srcSet"
          :lazy-src="src.placeholder"
          :alt="alt"
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
        src: require('~/assets/images/ucr_logo_blGd.png?resize&format=png'),
      };
    },
  };
</script>
