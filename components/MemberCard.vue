<template>
  <v-card class="mx-auto" :max-width="768" :min-height="200">
    <div class="title pt-2 px-4">
      {{ fullName }}&nbsp;&nbsp;
      <span style="font-weight: 300; font-size: 80%;">({{ byline }})</span>
    </div>
    <v-row no-gutters class="pa-4">
      <v-col :cols="12" :sm="6" :md="largePic ? 4 : 6">
        <BaseImage
          :src="member.img"
          :webp="member.webp"
          :aspect-ratio="5 / 4"
          :alt="fullName"
          :title="shortName"
          class="aspect-800"
        />
      </v-col>
      <v-col :cols="12" :sm="6" :md="largePic ? 8 : 6">
        <v-card-text class="pa-0 pl-4">
          Research:
          <span style="font-weight: 300;">
            <DynamicHtml :html="member.focus" />
          </span>
        </v-card-text>
        <v-btn
          v-if="member.level & 10"
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
      <v-spacer />
      <v-btn text disabled>More about {{ shortName }}</v-btn>
      <v-btn
        v-if="member.level & 10"
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
        if (this.member.dept) {
          return (
            this.member.dept +
            (this.member.level & 8
              ? (this.member.level & 2 ? ' Ph.D. ' : ' B.S. ') +
                this.member.gradYear.toString()
              : '')
          );
        } else return this.member.title;
      },
    },
  };
</script>
