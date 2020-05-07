<template>
  <v-card class="mx-auto" :max-width="768" :min-height="200">
    <v-card-title class="pb-0">
      {{ fullName }}&nbsp;&nbsp;
      <small>({{ byline }})</small>
    </v-card-title>
    <v-row no-gutters class="pa-4">
      <v-col :cols="12" :sm="6" :md="largePic ? 4 : 6">
        <BaseImage
          :src="member.img"
          :webp="member.webp"
          :aspect-ratio="5 / 4"
          :alt="fullName"
          :title="shortName"
          class="pb-2"
        />
      </v-col>
      <v-col :cols="12" :sm="6" :md="largePic ? 8 : 6">
        <v-card-text class="pa-0 pl-4">
          Research: <DynamicHtml :html="member.focus" />
        </v-card-text>
        <v-btn
          v-if="!member.current && member.level & 2"
          text
          nuxt
          :to="`/members/theses/`"
          class="hide-md-and-up"
        >
          Dissertation
        </v-btn>
      </v-col>
    </v-row>
    <v-card-actions v-if="!largePic">
      <v-btn text disabled>More about {{ shortName }}</v-btn>
      <v-btn
        v-if="!member.current && member.level & 2"
        text
        nuxt
        :to="`/members/theses/`"
        class="hide-sm-and-down"
      >
        Dissertation
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  // ${fullName.replace(/ /g, '_').toLowerCase()}
  import BaseImage from '@/components/BaseImage.vue';
  import DynamicHtml from '@/components/DynamicHtml.vue';
  export default {
    name: 'MemberCard',
    components: { BaseImage, DynamicHtml },
    props: {
      largePic: {
        type: Boolean,
        default: false,
      },
      member: {
        type: Object,
        required: true,
      },
    },
    computed: {
      fullName() {
        return this.member.first + ' ' + this.member.last;
      },
      shortName() {
        return this.member.nickname || this.member.first;
      },
      byline() {
        let byline = this.member.dept;
        if (!this.member.current) {
          byline += ' ';
          if (this.member.level & 2) byline += 'Ph.D. ';
          byline += this.member.gradYear.toString();
        }
        return byline;
      },
    },
  };
</script>

<style scoped lang="scss">
  .v-card__title {
    word-break: break-word;
    text-transform: capitalize;
  }
  .v-application .subtitle-1 {
    line-height: 1rem;
  }
</style>
