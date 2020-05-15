<template>
  <HeroLayout class="tourPage">
    <BreadCrumb />
    <h1 class="hidden-sm-and-down">QMO Lab Tours</h1>
    <ContactCard
      message-cols="8"
      title="Fill out this form to request a tour of the QMO lab"
    >
      <v-col cols="12" md="4">
        <v-date-picker
          v-model="picker"
          full-width
          :prev-icon="mdiChevronLeft"
          :next-icon="mdiChevronRight"
        />
      </v-col>
    </ContactCard>
  </HeroLayout>
</template>

<script>
  import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
  import BreadCrumb from '@/components/lib/BreadCrumb.vue';
  import HeroLayout from '@/components/layouts/HeroLayout.vue';
  import ContactCard from '@/components/ContactCard.vue';
  export default {
    components: { HeroLayout, BreadCrumb, ContactCard },
    data: () => ({
      mdiChevronLeft,
      mdiChevronRight,
      picker: new Date().toISOString().substr(0, 10),
    }),
  };
</script>
