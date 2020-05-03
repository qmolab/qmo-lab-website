<template>
  <v-card class="mx-auto" :max-width="768" :min-height="200">
    <v-row no-gutters>
      <v-col :cols="12" :sm="6" :md="largePic ? 4 : 6">
        <BaseImage
          class="align-end pa-2"
          :src="member.img"
          :webp="member.webp"
          :aspect-ratio="5 / 4"
          :alt="fullName"
          :title="shortName"
        />
      </v-col>
      <v-col>
        <v-card-title>{{ fullName }}</v-card-title>
        <v-card-subtitle>{{ byline }}</v-card-subtitle>
        <v-card-text v-if="largePic" class="mb-12">
          Research: {{ member.focus }}
        </v-card-text>
        <v-card-actions v-if="largePic" style="position: absolute; bottom: 0;">
          <v-btn text> Read more about {{ shortName }} </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
    <v-row v-if="!largePic" no-gutters>
      <v-col>
        <v-card-text>Research: {{ member.focus }}</v-card-text>
        <v-card-actions>
          <v-btn text> Read more about {{ shortName }} </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  import BaseImage from '@/components/BaseImage.vue';
  export default {
    name: 'MemberCard',
    components: { BaseImage },
    props: {
      member: {
        type: Object,
        required: true,
      },
      largePic: {
        type: Boolean,
        default: false,
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
