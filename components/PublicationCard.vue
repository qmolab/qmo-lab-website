<template>
  <v-sheet class="stretchCard pb-12">
    <v-list-item>
      <v-list-item-avatar
        size="40"
        color="primary"
        style="border: 2px solid; background-color: unset !important;"
      >
        '{{ publication.year.substring(2) }}
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="subtitle-1">{{ publication.author }}</div>
      </v-list-item-content>
    </v-list-item>

    <BaseImage
      class="mt-2 px-3 aspect-667"
      :src="publication.img"
      :webp="publication.webp"
      :alt="publication.alt"
      :title="publication.title"
      :width="width"
      :aspect-ratio="3 / 2"
    >
      <div class="textOnImage px-4 subtitle-2">
        {{ publication.pubInfo }}
      </div>
    </BaseImage>
    <div class="pt-1 px-4 title">
      <DynamicHtml :html="publication.title" />
    </div>
    <div class="pa-4 summary">
      <DynamicHtml :html="publication.text" />
    </div>
    <div class="actions px-2">
      <v-spacer />
      <v-btn text disabled>
        Share
      </v-btn>

      <v-btn text :href="publication.href" target="_blank" rel="noopener">
        Read more
        <v-icon right color="secondary">{{ openInNewIcon }}</v-icon>
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
  import { mdiOpenInNew } from '@mdi/js';
  import BaseImage from '@/components/BaseImage.vue';
  import DynamicHtml from '@/components/DynamicHtml.vue';
  export default {
    name: 'PublicationCard',
    components: { BaseImage, DynamicHtml },
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
