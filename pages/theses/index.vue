<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="thesesPage">
    <v-row>
      <v-col v-for="(item, i) in memberTheses" :key="i" cols="12" md="6">
        <v-card class="itemCard stretchCard pb-8">
          <v-list-item>
            <v-list-item-avatar size="75">
              <StoreImage
                sub-category="members"
                :item-id="item.img"
                width="82"
                height="82"
              />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="text-h6">{{
                item.author
              }}</v-list-item-title>
              <v-list-item-subtitle class="subtitle-1"
                >Doctoral Dissertation</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-card-text class="pt-2 body-1" v-html="item.title" />
          <v-card-actions class="actions">
            <v-spacer />
            <v-btn
              nuxt
              text
              :to="`/theses/${item.author.replace(/ /g, '_').toLowerCase()}/`"
            >
              <span>{{ item.author.split(' ')[0] }}'s Dissertation</span>
              <v-icon right color="secondary">$mdiPageNext</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import StoreImage from '@/components/StoreImage.vue';
  import headAndTitle from '@/assets/js/headAndTitle';
  export default {
    components: { StoreImage },
    async asyncData({ $axios }) {
      const memberTheses = await $axios.$get('/theses/cards/');
      return { memberTheses };
    },
    ...headAndTitle(
      'Theses',
      'theses/',
      `QMO Lab @ UCR Theses Page. Student Theses and Dissertations from former student members.`
    ),
  };
</script>
