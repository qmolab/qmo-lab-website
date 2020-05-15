<template>
  <v-sheet class="mx-auto my-4 pa-2 contactCard">
    <div class="title">Contact us</div>
    <v-form ref="contactForm" v-model="valid">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="nameText"
            name="nameText"
            :rules="nameRules"
            :counter="nameLength"
            label="Name"
            required
          />
        </v-col>
        <v-col cols="12" md="8">
          <v-text-field
            v-model="emailText"
            name="emailText"
            :rules="emailRules"
            label="E-mail"
            required
          />
        </v-col>
        <v-col v-if="subjectItems" cols="12">
          <v-combobox
            v-model="subjectText"
            name="subjectText"
            :items="subjectItems"
            :rules="subjectRules"
            :clear-icon="mdiClose"
            :append-icon="mdiMenuDown"
            :menu-props="{ auto: true, maxHeight: 1000 }"
            label="Subject"
            required
            clearable
            outlined
          />
        </v-col>
        <v-col v-if="memberItems" cols="12">
          <v-select
            v-model="memberTags"
            name="memberTags"
            :items="memberItems"
            :clear-icon="mdiClose"
            :append-icon="mdiPlus"
            multiple
            clearable
            label="Tag a lab member"
            outlined
          />
        </v-col>
        <v-col v-if="askForFollowUp" cols="12">
          <v-checkbox
            v-model="followUpCheckbox"
            label="Recieve additional information via email"
            :on-icon="mdiCheckboxMarked"
            :off-icon="mdiCheckboxBlankOutline"
            :class="{ strike: !followUpCheckbox }"
          />
        </v-col>
        <slot />
        <v-col cols="12" :md="messageCols">
          <v-textarea
            v-model="messageText"
            name="messageText"
            :rules="MessageRules"
            :counter="messageLength"
            label="Send us a message"
            outlined
            auto-grow
            required
          />
        </v-col>
      </v-row>
      <v-col cols="12">
        <v-spacer />
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Submit
        </v-btn>
        <v-btn color="error" class="mr-4" @click="reset">
          Reset
        </v-btn>
      </v-col>
    </v-form>
  </v-sheet>
</template>

<script>
  import {
    mdiCheckboxBlankOutline,
    mdiCheckboxMarked,
    mdiClose,
    mdiPlus,
    mdiMenuDown,
  } from '@mdi/js';
  export default {
    props: {
      subjectItems: { type: Array, default: undefined },
      memberItems: { type: Array, default: undefined },
      messageCols: { type: [Number, String], default: 12 },
      askForFollowUp: { type: Boolean, default: false },
      nameLength: { type: Number, default: 25 },
      messageLength: { type: Number, default: 1500 },
    },
    data() {
      return {
        mdiCheckboxBlankOutline,
        mdiCheckboxMarked,
        mdiClose,
        mdiPlus,
        mdiMenuDown,
        valid: false,
        nameText: '',
        emailText: '',
        subjectText: '',
        messageText: '',
        memberTags: [],
        followUpCheckbox: true,
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) =>
            (v && v.length <= this.nameLength) ||
            `Name must be less than ${this.nameLength} characters`,
        ],
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        subjectRules: [(v) => !!v || 'Subject is required'],
        MessageRules: [
          (v) => !!v || 'Message is required',
          (v) =>
            (v && v.length <= this.messageLength) ||
            `Name must be less than ${this.messageLength} characters`,
        ],
      };
    },
    methods: {
      removeTag(item) {
        this.memberTags = this.memberTags.filter((value, index, arr) => {
          return value !== item;
        });
      },
      validate() {
        this.$refs.contactForm.validate();
      },
      reset() {
        this.$refs.contactForm.reset();
      },
      resetValidation() {
        this.$refs.contactForm.resetValidation();
      },
    },
  };
</script>
