<template>
  <div class="d-inline" v-html="html" />
</template>

<script>
  export default {
    props: {
      html: {
        type: String,
        required: true,
      },
    },
  };
</script>
