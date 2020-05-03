<style></style>
<template>
  <v-card @error="$emit('error', $event)">
    <v-list-item>
      <v-list-item-avatar size="40" color="primary">
        '{{ config.year.substring(2) }}
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="caption">{{ config.headline }}</div>
      </v-list-item-content>
    </v-list-item>
    <v-img class="align-end" :src="config.img" :aspect-ratio="3 / 2">
      <div v-if="config.textOnImage" class="caption textOnImage ps-4">
        {{ config.textOnImage }}
      </div>
    </v-img>
    <v-card-title class="title">{{ config.title }}</v-card-title>
    <v-card-text>{{ config.text }}</v-card-text>
    <v-card-actions>
      <v-btn color="secondary" text>
        Share
      </v-btn>

      <v-btn
        color="secondary"
        text
        :href="config.href"
        target="_blank"
        rel="noopener"
      >
        Read more
        <v-icon right color="secondary">{{ openInNewIcon }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mdiOpenInNew } from '@mdi/js';
  export default {
    name: 'BaseCard',
    props: {
      config: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        openInNewIcon: mdiOpenInNew,
      };
    },
  };
</script>

<style scoped lang="scss">
  .textOnImage {
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
