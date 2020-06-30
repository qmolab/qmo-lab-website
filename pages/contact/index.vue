<template>
  <div class="contactPage">
    <ContactCard
      title="Send us a message"
      :subject-items="subjectItems"
      :member-items="memberItems"
    />
  </div>
</template>

<script>
  import ContactCard from '@/components/ContactCard.vue';
  import headAndTitle from '@/assets/js/headAndTitle';
  export default {
    components: { ContactCard },
    async asyncData({ $axios }) {
      const memberItems = await $axios.$get('/members/list/master/');
      return { memberItems: memberItems.map((e) => e.text) };
    },
    data() {
      return {
        subjectItems: [
          'Lab Tour',
          'Information for potential students',
          'Question about research',
          'Question about a publication',
          'Lab funding',
        ],
      };
    },
    ...headAndTitle('Contact', 'contact/', `Contact the QMO Lab @ UCR`),
  };
</script>
