<template>
  <div class="tourPage">
    <h2 class="font-weight-light mt-4 text-h5">
      Fill out this form to request a tour of the QMO lab
    </h2>
    <ContactCard message-cols="8" date message-subject="New lab tour request" />
  </div>
</template>

<script>
  import ContactCard from '@/components/ContactCard.vue';
  import headAndTitle from '@/assets/js/headAndTitle';
  export default {
    components: { ContactCard },
    ...headAndTitle(
      'Tours',
      'contact/tour/',
      `Schedule a tour of QMO Lab @ UCR`
    ),
  };
</script>
