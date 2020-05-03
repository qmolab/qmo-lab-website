<template>
  <v-card>
    <v-list-item>
      <v-list-item-avatar size="40" color="primary">
        '{{ publication.year.substring(2) }}
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="subtitle-1">{{ publication.author }}</div>
      </v-list-item-content>
    </v-list-item>

    <BaseImage
      class="cardImage"
      :src="publication.img"
      :webp="publication.webp"
      :alt="publication.alt"
      :title="publication.title"
      :width="width - 16"
      :aspect-ratio="3 / 2"
    >
      <div class="textOnImage subtitle-2">{{ publication.pubInfo }}</div>
    </BaseImage>
    <v-card-title v-html="publication.title" />
    <v-card-text v-html="publication.text" />
    <v-card-actions>
      <v-btn text>
        Share
      </v-btn>

      <v-btn text :href="publication.href" target="_blank" rel="noopener">
        Read more
        <v-icon right color="secondary">{{ openInNewIcon }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mdiOpenInNew } from '@mdi/js';
  import BaseImage from '@/components/BaseImage.vue';
  export default {
    name: 'PublicationCard',
    components: { BaseImage },
    props: {
      publication: {
        type: Object,
        required: true,
      },
      width: { type: Number, default: undefined },
    },
    data() {
      return {
        openInNewIcon: mdiOpenInNew,
      };
    },
  };
</script>

<style scoped lang="scss">
  .cardImage ::v-deep .v-image {
    position: relative;
    align-items: flex-end;
    margin: 8px;
    .textOnImage {
      background-color: rgba(0, 0, 0, 0.72);
      padding: 0 8px;
    }
  }
  .v-application .subtitle-1 {
    line-height: 1rem;
  }
</style>
