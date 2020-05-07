<template>
  <HeroLayout class="tourPage">
    <BreadCrumb />
    <h1>QMO Lab Tours</h1>
    <v-card class="mx-auto my-4 pa-2 contactCard">
      <v-card-title>
        Fill out this form to request a tour of the QMO lab
      </v-card-title>
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
          <v-col cols="12" md="4">
            <v-date-picker
              v-model="picker"
              full-width
              :prev-icon="mdiChevronLeft"
              :next-icon="mdiChevronRight"
            />
          </v-col>
          <v-col cols="12" md="8">
            <v-textarea
              v-model="messageText"
              name="messageText"
              :rules="MessageRules"
              :counter="1500"
              label="What's your interest in the QMO Lab?"
              outlined
              auto-grow
              required
            />
          </v-col>
          <v-col cols="12" class="mt-4">
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
        </v-row>
      </v-form>
    </v-card>
  </HeroLayout>
</template>

<script>
  import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
  import HeroLayout from '@/components/layouts/HeroLayout.vue';
  import BreadCrumb from '@/components/lib/BreadCrumb.vue';
  export default {
    components: { HeroLayout, BreadCrumb },
    data: () => ({
      mdiChevronLeft,
      mdiChevronRight,
      valid: false,
      nameText: '',
      emailText: '',
      messageText: '',
      picker: new Date().toISOString().substr(0, 10),
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
