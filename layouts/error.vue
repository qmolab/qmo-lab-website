<template>
  <div>
    <div class="px-8 py-5"><NuxtLink text to="/">Home</NuxtLink></div>
    <h2>Error</h2>
    <span v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </span>
    <span v-else>
      {{ otherError }}
    </span>
    <div
      role="img"
      class="emoji--disappointed"
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
    text-align: center;
    &::before {
      content: '\1F61E';
      font-size: 25em;
      @media (max-width: 600px) {
        font-size: 10em;
      }
    }
  }
</style>
