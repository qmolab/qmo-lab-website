<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="d-inline" v-html="checked" />
</template>

<script>
  export default {
    props: {
      html: {
        type: String,
        required: true,
      },
    },
    computed: {
      checked() {
        return this.html
          .replace(
            /\[([^\]]+)\]\((http[^)]+)\)/g,
            '<a href="$2" target="_blank" class="v-btn v-btn--flat v-btn--text theme--dark v-size--small" rel="noopener"><span class="v-btn__content">$1<span aria-hidden="true" class="v-icon notranslate v-icon--right v-icon--svg theme--dark secondary--text"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"></path></svg></span></span></a>'
          )
          .replace(
            /\[([^\]]+)\]\(([^)]+)\)/g,
            '<a href="' +
              process.env.baseUrl +
              '$2" class="v-btn v-btn--flat v-btn--text theme--dark v-size--small"><span class="v-btn__content">$1</span></a>'
          )
          .replace(/\n/g, '<br />');
      },
    },
  };
</script>
