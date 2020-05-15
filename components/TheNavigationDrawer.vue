<template>
  <v-list nav dens>
    <v-list-item><div class="qmoLogo" /></v-list-item>
    <v-divider />
    <nuxt-link
      v-for="(link, i) in navLinks"
      :key="i"
      v-slot="{ href, navigate, isExactActive }"
      :to="link.to"
    >
      <v-list-item
        color="primary"
        :disabled="isExactActive"
        dens
        link
        @click="navigate"
      >
        <v-list-item-icon>
          <v-icon :color="isExactActive ? 'primary' : undefined">
            {{ link.icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ link.title }}</v-list-item-title>
      </v-list-item>
    </nuxt-link>
  </v-list>
</template>

<script>
  export default {
    name: 'TheNavigationDrawer',
    props: { navLinks: { type: Array, required: true } },
  };
</script>
