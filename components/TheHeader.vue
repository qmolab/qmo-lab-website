<template>
  <v-row justify="center" no-gutters class="fill-h">
    <v-col cols="12" md="0" class="hidden-md-and-up hide-overflow fill-h">
      <v-btn icon class="float-l" @click.stop="$emit('toggle-drawer')">
        <v-icon>{{ mdiMenu }}</v-icon>
      </v-btn>
      <h1 class="titleText ellipsis_text">
        QMO Lab
        {{ title }}
      </h1>
    </v-col>
    <v-col md="3" class="headerCol">
      <QmoLogo
        :key="$route.path"
        spin
        class="hidden-sm-and-down mt-2"
        style="max-width: 226px;"
      />
    </v-col>
    <v-spacer class="hidden-sm-and-down" />
    <v-col sm="auto" class="hidden-sm-and-down fill-h headerCol">
      <nav class="nav float-l d-flex align-center">
        <NuxtLink
          v-for="(link, i) in navLinks"
          :key="i"
          :to="link.to"
          active-border
          class="rel fill-h float-l d-flex align-center"
        >
          {{ link.title }}
        </NuxtLink>
      </nav>
    </v-col>
  </v-row>
</template>

<script>
  import { mdiMenu } from '@mdi/js';
  import QmoLogo from '@/components/QmoLogo.vue';
  import NuxtLink from '@/components/NuxtLink.vue';
  export default {
    name: 'TheHeader',
    components: { QmoLogo, NuxtLink },
    props: {
      title: { type: String, required: true },
      navLinks: { type: Array, required: true },
    },
    data() {
      return { mdiMenu };
    },
  };
</script>

<style scoped lang="scss">
  .titleText {
    margin-top: 6px;
    font-size: 1.5em;
    text-transform: capitalize;
  }
  .nav {
    height: 100%;
    margin-bottom: -8px;
  }
</style>
