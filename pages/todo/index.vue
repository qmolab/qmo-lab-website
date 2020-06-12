<template>
  <div class="todoPage">
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" nuxt :to="item.to">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            title: 'Design',
            to: '/todo/design/',
          },
          {
            title: 'Development',
            to: '/todo/develop/',
          },
          {
            title: 'Content',
            to: '/todo/content/',
          },
        ],
      };
    },
  };
</script>
