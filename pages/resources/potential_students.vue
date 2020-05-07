<template>
  <HeroLayout class="potentialStudentsPage">
    <BreadCrumb />
    <h1>Information for Potential Students</h1>
    <h3>The QMO Lab is accepting new students!</h3>
    <p class="ma-8">
      If you're interested in joining the QMO Lab, fill out the form below to
      contact Nathan and the other lab members.
    </p>
    <v-card class="mx-auto my-4 pa-2 contactCard">
      <v-card-title>Contact us</v-card-title>
      <v-form ref="contactForm" v-model="valid">
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="nameText"
              name="nameText"
              :rules="nameRules"
              :counter="25"
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
          <v-col cols="12">
            <v-checkbox
              v-model="checkbox"
              label="Recieve additional information via email"
              :on-icon="mdiCheckboxMarked"
              :off-icon="mdiCheckboxBlankOutline"
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="messageText"
              name="messageText"
              :rules="MessageRules"
              :counter="1500"
              label="Tell us about yourself"
              outlined
              auto-grow
              required
            />
          </v-col>
        </v-row>
        <v-col cols="12">
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
    </v-card>
  </HeroLayout>
</template>

<script>
  import { mdiCheckboxBlankOutline, mdiCheckboxMarked } from '@mdi/js';
  import HeroLayout from '@/components/layouts/HeroLayout.vue';
  import BreadCrumb from '@/components/lib/BreadCrumb.vue';
  export default {
    components: { HeroLayout, BreadCrumb },
    data: () => ({
      mdiCheckboxBlankOutline,
      mdiCheckboxMarked,
      valid: false,
      checkbox: true,
      nameText: '',
      emailText: '',
      messageText: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 25 || 'Name must be less than 25 characters',
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      MessageRules: [
        (v) => !!v || 'Message is required',
        (v) => v.length <= 1500 || 'Name must be less than 1500 characters',
      ],
    }),
    methods: {
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
