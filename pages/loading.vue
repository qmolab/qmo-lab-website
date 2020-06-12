<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80vh;
    "
  >
    <v-progress-circular color="primary" size="300" indeterminate />
  </div>
</template>

<script>
  export default {
    mounted() {
      if (this.$route.hash) {
        this.$router.replace(this.$route.hash.slice(1));
      }
    },
  };
</script>
