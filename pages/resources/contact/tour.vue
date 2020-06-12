<template>
  <div class="tourPage">
    <h2 class="font-weight-light mt-4 headline">
      Fill out this form to request a tour of the QMO lab
    </h2>
    <ContactCard message-cols="8" date />
  </div>
</template>

<script>
  import ContactCard from '@/components/ContactCard.vue';
  export default {
    components: { ContactCard },
  };
</script>
