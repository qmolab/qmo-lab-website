<template>
  <v-container>
    <v-card class="mx-auto padd-bottom" elevation="2">
      <v-card-title class="headline">{{ title }}</v-card-title>
      <v-list-item v-for="item in announcements" :key="item.title">
        <v-list-item-avatar color="primary">{{ item.img }}</v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}!</v-list-item-title>
          <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-text class="no-padding-bottom">{{ text }}</v-card-text>

      <v-card-actions class="no-padding-top">
        <v-spacer></v-spacer>
        <v-btn text to="/publications">
          Publications
        </v-btn>
        <v-btn text to="/news">
          News Archive
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'Home',
    components: {},
    props: {
      title: { type: String, default: 'Announcements' },
      text: { type: String, default: '' },
      announcements: { type: Array, required: true },
    },
  };
</script>

<style scoped>
  .no-padding-bottom {
    padding-bottom: 0;
  }
</style>
