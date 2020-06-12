<template>
  <v-list nav dens>
    <v-list-item><div class="qmoLogo" /></v-list-item>
    <v-divider />
    <nuxt-link
      v-for="(link, i) in navLinks"
      :key="i"
      v-slot="{ navigate, isActive, isExactActive }"
      :to="link.to"
    >
      <div>
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
        <div v-if="isActive && link.sub">
          <v-divider />
          <nuxt-link
            v-for="(item, j) in link.sub"
            :key="j"
            v-slot="{ navigate: n, isExactActive: a }"
            :to="item.to"
            class="mb-0"
          >
            <v-list-item color="primary" :disabled="a" dens link @click="n">
              <v-list-item-title class="pl-12">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <v-divider />
        </div>
      </div>
    </nuxt-link>
    <v-list-item>
      <v-switch v-model="$vuetify.theme.dark" class="my-8" label="Dark Theme" />
    </v-list-item>
  </v-list>
</template>

<script>
  export default {
    name: 'TheNavigationDrawer',
    props: { navLinks: { type: Object, required: true } },
  };
</script>
