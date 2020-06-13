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
  export default {
    components: { ContactCard },
    async asyncData({ store }) {
      return await new Promise((resolve) => {
        resolve({
          memberItems: ['Nathan', ...Object.keys(store.state.images.members)],
          subjectItems: [
            'Lab Tour',
            'Information for potential students',
            'Question about research',
            'Question about a publication',
            'Lab funding',
          ],
        });
      });
    },
  };
</script>
