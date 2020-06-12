<template>
  <div>
    <v-fade-transition>
      <v-breadcrumbs
        v-slot:item="{ item }"
        :items="crumbs"
        class="py-0 hidden-sm-and-down headline"
      >
        <v-breadcrumbs-item nuxt :to="item.to" exact ripple>
          <v-menu
            :key="item.title"
            bottom
            right
            open-on-hover
            offset-y
            :disabled="!item.sub"
          >
            <template v-slot:activator="{ on }">
              <v-btn class="px-0 minW-0" text small v-on="on">
                <span>{{ item.title }}</span>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(e, i) in item.sub" :key="i" :to="e.to" nuxt>
                <v-list-item-title>{{ e.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-breadcrumbs-item>
      </v-breadcrumbs>
    </v-fade-transition>
    <v-fade-transition>
      <nuxt-child :key="title" />
    </v-fade-transition>
  </div>
</template>

<script>
  export default {
    data: () => ({}),
    computed: {
      title() {
        return (this.$route.params.id || '').replace(/_/g, ' ');
      },
      crumbs() {
        const crumbs = [
          { to: '/', title: 'Home' },
          this.$store.state.navLinks.members,
        ];
        const l = this.$route.matched.length;
        if (l > 1) {
          if (this.title) {
            if (l === 3)
              this.$store.state.navLinks.members.sub &&
                crumbs.push(this.$store.state.navLinks.members.sub.theses);
            crumbs.push({ to: this.$route.path, title: this.title });
          } else if (l === 3)
            this.$store.state.navLinks.members.sub &&
              crumbs.push(this.$store.state.navLinks.members.sub.theses);
        }
        return crumbs;
      },
    },
    async mounted() {
      const payload = await this.getNavLinks(
        '/members/routes/',
        '/members/',
        'name'
      );
      payload.theses = {
        title: 'theses',
        to: '/members/theses/',
        sub: await this.getNavLinks(
          '/theses/routes/',
          '/members/theses/',
          'author'
        ),
      };
      this.$store.commit('addToNavLinks', {
        parent: 'members',
        payload,
      });
    },
    methods: {
      async getNavLinks(table, routeBase, idColumn) {
        const ret = {};
        const res = await this.$axios.$get(table);
        res.forEach((e) => {
          const name = e[idColumn].replace(/ /g, '_').toLowerCase();
          ret[name] = {
            title: e[idColumn],
            to: routeBase + name,
          };
        });
        return ret;
      },
    },
  };
</script>
