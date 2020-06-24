<template>
  <div class="potentialStudentsPage">
    <h2 class="font-weight-light mt-4 text-h5">
      The QMO Lab is now accepting new students!
    </h2>
    <h3 class="my-8 font-weight-light">
      If you're interested in joining the QMO Lab, fill out the form below to
      contact Nathan and the other lab members...
    </h3>
    <ContactCard
      title="Contact us"
      ask-for-follow-up
      message-subject="New potential student request"
    />
  </div>
</template>

<script>
  import ContactCard from '@/components/ContactCard.vue';
  import headAndTitle from '@/assets/js/headAndTitle';
  export default {
    components: { ContactCard },
    ...headAndTitle(
      'Potential Students',
      'contact/potential_students/',
      `Information for potential students`
    ),
  };
</script>
