<template>
  <v-card class="mx-auto padd-bottom pa-2" elevation="2">
    <v-card-title class="headline">{{ title }}</v-card-title>
    <v-card
      v-for="item in announcementsChecked"
      :key="item.title"
      class="pa-2"
      flat
      style="background-color: unset;"
    >
      <div style="display: flex; align-items: center;">
        <v-avatar :size="75">
          <v-img :src="item.img" />
        </v-avatar>
        <div>
          <v-card-title>{{ item.title }}!</v-card-title>
          <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
        </div>
      </div>
    </v-card>
    <v-card-text class="no-padding-bottom">{{ text }}</v-card-text>

    <v-card-actions class="no-padding-top">
      <v-spacer></v-spacer>
      <v-btn v-if="button1Text" text :to="button1Target">
        {{ button1Text }}
      </v-btn>
      <v-btn v-if="button2Text" text :to="button2Target">
        {{ button2Text }}
      </v-btn>
    </v-card-actions>
  </v-card>
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
      maxItems: { type: Number, default: undefined },
      button1Text: { type: String, default: 'Publications' },
      button1Target: { type: String, default: '/publications/' },
      button2Text: { type: String, default: 'News Archive' },
      button2Target: { type: String, default: '/news/' },
    },
    computed: {
      announcementsChecked() {
        return this.maxItems
          ? this.announcements.slice(0, this.maxItems)
          : this.announcements;
      },
    },
  };
</script>

<style scoped>
  .no-padding-bottom {
    padding-bottom: 0;
  }
</style>
