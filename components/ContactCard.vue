<template>
  <v-card class="mx-auto my-4 pa-2 contactCard">
    <v-card-title class="mb-8">
      <span>
        <v-icon>$mdiEmailEdit</v-icon>
        <span class="pl-1">Contact us</span>
      </span>
    </v-card-title>
    <v-form ref="contactForm" v-model="valid" class="ml-12 mr-7">
      <v-text-field
        v-model="nameText"
        name="nameText"
        :rules="nameRules"
        prepend-icon="$mdiFormTextbox"
        :counter="nameLength"
        label="Your Name"
        required
        outlined
      />
      <v-text-field
        v-model="emailText"
        name="emailText"
        :rules="emailRules"
        prepend-icon="$mdiAt"
        label="Email"
        outlined
        required
      />
      <v-combobox
        v-if="subjectItems"
        v-model="subjectText"
        name="subjectText"
        :items="subjectItems"
        :rules="subjectRules"
        prepend-icon="$mdiTextSubject"
        :counter="maxSubjectLength"
        :menu-props="{ auto: true, maxHeight: 1000 }"
        label="Subject"
        required
        clearable
        outlined
      />
      <MemberSelect
        v-if="memberItems"
        v-model="memberTags"
        :items="memberItems"
        prepend-icon="$mdiTag"
        name="memberTags"
        label="Tag a lab member"
        multiple
      />
      <v-checkbox
        v-if="askForFollowUp"
        v-model="followUpCheckbox"
        :prepend-icon="followUpCheckbox ? '$mdiEmailCheck' : '$mdiEmailMinus'"
        label="Recieve additional information via email"
        :class="{ strike: !followUpCheckbox }"
        style="margin-top: -20px;"
      />
      <DatePicker
        v-if="date"
        v-model="datePicker"
        name="date"
        label="Choose Date"
      />
      <v-textarea
        v-model="messageText"
        prepend-icon="$mdiMessage"
        name="messageText"
        :rules="MessageRules"
        :counter="messageLength"
        label="Send us a message"
        required
        outlined
        auto-grow
      />
    </v-form>
    <v-card-actions cols="12">
      <v-spacer />
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        <span>Submit</span>
        <v-icon right>$mdiEmailSend</v-icon>
      </v-btn>
      <v-btn color="error" class="mr-4" @click="reset">
        <span>Reset</span>
        <v-icon right>$mdiRefreshCircle</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import {
    emailRule,
    lengthRule,
    requiredRule,
  } from '@/assets/js/helperScripts.js';
  import DatePicker from '@/components/lib/DatePicker.vue';
  import MemberSelect from '@/components/MemberSelect.vue';
  export default {
    components: { DatePicker, MemberSelect },
    props: {
      subjectItems: { type: Array, default: undefined },
      memberItems: { type: Array, default: undefined },
      askForFollowUp: { type: Boolean, default: false },
      nameLength: { type: Number, default: 25 },
      messageLength: { type: Number, default: 1500 },
      minSubjectLength: { type: Number, default: 10 },
      maxSubjectLength: { type: Number, default: 140 },
      maxEmailLength: { type: Number, default: 100 },
      date: { type: Boolean, default: false },
    },
    data() {
      const hash = this.$route.hash.slice(1).split('&');
      const assignments = {};
      for (let i = 0; i < hash.length; ++i) {
        const part = hash[i].split('=');
        assignments[part[0]] = part[1];
      }
      return {
        valid: false,
        nameText: '',
        emailText: '',
        subjectText: assignments.subject || '',
        messageText: '',
        memberTags: assignments.tag ? [assignments.tag] : [],
        followUpCheckbox: true,
        datePicker: new Date().toISOString().slice(0, 10),
        nameRules: [
          requiredRule('Name is required'),
          lengthRule(this.nameLength, 'Name'),
        ],
        emailRules: [requiredRule('Email is required'), emailRule()],
        subjectRules: [
          requiredRule('Subject is required'),
          lengthRule(this.maxSubjectLength, 'Subject'),
        ],
        MessageRules: [
          requiredRule('Message is required'),
          lengthRule(this.messageLength, 'Name'),
        ],
        cancelToken: undefined,
        request: undefined,
      };
    },
    methods: {
      removeTag(item) {
        this.memberTags = this.memberTags.filter((value) => {
          return value !== item;
        });
      },
      validate() {
        this.$refs.contactForm.validate() && this.submit();
      },
      reset() {
        this.$refs.contactForm.reset();
      },
      resetValidation() {
        this.$refs.contactForm.resetValidation();
      },
      submit() {
        this.cancelToken = this.$axios.CancelToken.source();
        this.request = this.$axios.$post(
          '/post/contact/',
          {
            name: this.nameText,
            email: this.emailText,
            subject: this.subjectText,
            message: this.messageText,
            tags: this.memberTags,
            date: this.datePicker,
            followUp: this.followUpCheckbox,
          },
          {
            cancelToken: this.cancelToken.token,
          }
        );
      },
    },
  };
</script>
