<template>
  <div>
    <div class="px-8 py-5">
      <v-btn to="/" text>
        Home
      </v-btn>
    </div>
    <h2 class="text-h1 ma-4">Error</h2>
    <span v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </span>
    <span v-else>
      {{ otherError }}
    </span>
    <div
      role="img"
      class="emoji--disappointed text-center"
      aria-label="Disappointed Emoji"
    />
  </div>
</template>

<script>
  export default {
    props: {
      error: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        pageNotFound: '404: Page Not Found',
        otherError: 'An error occurred',
      };
    },
    head() {
      const title =
        this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
      return { title };
    },
  };
</script>

<style lang="scss" scoped>
  .emoji--disappointed {
    &::before {
      content: '\1F61E';
      font-size: 25em;
      @media (max-width: 600px) {
        font-size: 10em;
      }
    }
  }
</style>
