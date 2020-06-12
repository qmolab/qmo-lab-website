<template>
  <div class="resourcesPage">
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" nuxt :to="item.to">
        <v-list-item-icon>
          <v-icon :color="item.iconColor">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: this.$store.state.resourceLinks.resources.sub,
      };
    },
  };
</script>
