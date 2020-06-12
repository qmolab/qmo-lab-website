<template>
  <div class="safetyPage">
    <v-list>
      <v-list-item v-for="(item, title) in items" :key="title" nuxt :to="item">
        {{ title }}
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: {
          'Emergency Action Plan': '/resources/safety/emergency_action_plan/',
          'Emergency Procedures': '/resources/safety/emergency_procedures/',
          'Safety Data Sheets (SDS)': '/resources/safety/safety_data_sheets/',
          'Chemical Hygiene Plan': '/resources/safety/chemical_hygiene_plan/',
          'Injury and Illness Prevention Plan':
            '/resources/safety/injury_and_illness_prevention_plan/',
          'Fire Prevention Plan (FPP)':
            '/resources/safety/fire_prevention_plan/',
        },
      };
    },
  };
</script>
