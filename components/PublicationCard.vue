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
    <v-img
      class="align-end cardImage mx-2"
      :src="publication.img"
      :lazy-src="publication.lazy"
      :aspect-ratio="3 / 2"
    >
      <div class="ps-2 textOnImage subtitle-2">{{ publication.pubInfo }}</div>
    </v-img>
    <v-card-title>{{ publication.title }}</v-card-title>
    <v-card-text>{{ publication.text }}</v-card-text>
    <v-card-actions>
      <v-btn text>
        Share
      </v-btn>

      <v-btn text :href="publication.href" target="_blank">
        Read more
        <v-icon right color="secondary">mdi-open-in-new</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    props: {
      publication: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style scoped lang="scss">
  .cardImage {
    position: relative;
    .textOnImage {
      background-color: rgba(0, 0, 0, 0.72);
    }
  }
  .v-card__title {
    word-break: break-word;
    text-transform: capitalize;
  }
  .v-application .subtitle-1 {
    line-height: 1rem;
  }
</style>
