<template>
  <HeroLayout class="contactPage">
    <BreadCrumb />
    <h1>Contact the QMO Lab</h1>
    <v-card class="mx-auto my-4 pa-2 contactCard">
      <v-card-title>Send us a message</v-card-title>
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
          <v-col cols="12">
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
          <v-col cols="12">
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
            >
              <template v-slot:selection="{ item, disabled }">
                <v-chip>
                  {{ item }}
                  <v-icon right :disabled="disabled" @click="removeTag(item)">
                    {{ mdiClose }}
                  </v-icon>
                </v-chip>
              </template>
            </v-select>
          </v-col>
          <v-col cols="12">
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
  import { mdiClose, mdiPlus, mdiMenuDown } from '@mdi/js';
  import HeroLayout from '@/components/layouts/HeroLayout.vue';
  import BreadCrumb from '@/components/lib/BreadCrumb.vue';
  export default {
    components: { HeroLayout, BreadCrumb },
    asyncData({ store }) {
      const memberItems = ['Nathan'];
      store.state.members.members.forEach((e) => {
        memberItems.push(e.nickname || e.first);
      });
      return {
        memberItems,
      };
    },
    data() {
      const nameLength = 25;
      const messageLength = 1500;
      return {
        mdiClose,
        mdiPlus,
        mdiMenuDown,
        valid: false,
        nameText: '',
        emailText: '',
        subjectText: '',
        messageText: '',
        nameLength,
        messageLength,
        memberTags: [],
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) =>
            (v && v.length <= nameLength) ||
            `Name must be less than ${nameLength} characters`,
        ],
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        subjectRules: [(v) => !!v || 'Subject is required'],
        MessageRules: [
          (v) => !!v || 'Message is required',
          (v) =>
            (v && v.length <= messageLength) ||
            `Name must be less than ${messageLength} characters`,
        ],
        subjectItems: [
          'Lab Tour',
          'Information for potential students',
          'Question about research',
          'Question about a publication',
          'Lab funding',
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
