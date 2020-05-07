<template>
  <HeroLayout class="resourcesPage">
    <h1>QMO Lab Resources</h1>
    <v-list>
      <v-list-item>
        <v-btn nuxt text to="/resources/software/">Lab Software</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn nuxt text to="/members/theses/">Student Theses</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn nuxt text to="/research/posters/">Posters</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn nuxt text to="/news/">News Archive</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn nuxt text to="/resources/tour/">Lab Tours</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn nuxt text to="/resources/potential_students/">
          Information for Potential Students
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn nuxt text to="/resources/contact/">Contact Us</v-btn>
      </v-list-item>
    </v-list>
  </HeroLayout>
</template>

<script>
  import HeroLayout from '@/components/layouts/HeroLayout.vue';
  export default { components: { HeroLayout } };
</script>
