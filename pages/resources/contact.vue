<template>
  <HeroLayout class="contactPage">
    <BreadCrumb />
    <h1 class="hidden-sm-and-down">Contact the QMO Lab</h1>
    <ContactCard
      title="Send us a message"
      :subject-items="subjectItems"
      :member-items="memberItems"
    />
  </HeroLayout>
</template>

<script>
  import BreadCrumb from '@/components/lib/BreadCrumb.vue';
  import HeroLayout from '@/components/layouts/HeroLayout.vue';
  import ContactCard from '@/components/ContactCard.vue';
  export default {
    components: { HeroLayout, BreadCrumb, ContactCard },
    async asyncData({ store }) {
      return await new Promise((resolve) => {
        const memberItems = ['Nathan'];
        for (const key in store.state.members.members) {
          const e = store.state.members.members[key];
          memberItems.push(e.nickname || e.first);
        }
        resolve({ memberItems });
      });
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
  };
</script>
