<template>
  <HeroLayout class="potentialStudentsPage">
    <BreadCrumb />
    <h1 class="hidden-sm-and-down">Information for Potential Students:</h1>
    <h2 class="light mt-4">
      The QMO Lab is now accepting new students!
    </h2>
    <h3 class="my-8 light">
      If you're interested in joining the QMO Lab, fill out the form below to
      contact Nathan and the other lab members...
    </h3>
    <ContactCard title="Contact us" ask-for-follow-up />
  </HeroLayout>
</template>

<script>
  import BreadCrumb from '@/components/lib/BreadCrumb.vue';
  import HeroLayout from '@/components/layouts/HeroLayout.vue';
  import ContactCard from '@/components/ContactCard.vue';
  export default {
    components: { HeroLayout, BreadCrumb, ContactCard },
  };
</script>
