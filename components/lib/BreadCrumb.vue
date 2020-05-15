<template>
  <v-breadcrumbs nuxt :items="crumbs">
    <template v-slot:divider>
      <v-icon>{{ mdiChevronRight }}</v-icon>
    </template>
    <template v-slot:item="{ item }">
      <div>
        <span v-if="item.disabled" class="current">
          {{ item.text }}
        </span>
        <v-btn v-else text nuxt :to="item.to" small exact>
          {{ item.text }}
        </v-btn>
      </div>
    </template>
  </v-breadcrumbs>
</template>

<script>
  // Adapted from the response by ManUtopiK on https://stackoverflow.com/questions/57676974/how-to-create-dynamic-breadcrumbs-in-nuxt-js
  import { mdiChevronRight } from '@mdi/js';

  export default {
    data() {
      return {
        mdiChevronRight,
        crumbs: [
          {
            to: '/',
            text: 'Home',
            disabled: false,
          },
        ],
      };
    },
    mounted() {
      const pathParts = this.$route.path
        .substr(1, this.$route.path.length - 1)
        .split('/')
        .slice(0, -1);
      pathParts.forEach((e, i) => {
        this.crumbs.push({
          to: `/${pathParts.slice(0, i + 1).join('/')}/`,
          text: pathParts[i].replace(/_/g, ' '),
          disabled: i === pathParts.length - 1,
        });
      });
    },
  };
</script>

<style lang="scss" scoped>
  .current {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1.07143px;
  }
</style>
