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
    <nuxt-child />
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
          this.$store.state.resourceLinks.resources,
        ];
        const l = this.$route.matched.length;
        if (l > 1) {
          for (let i = 1; i < l - 1; ++i) {
            const p = this.$route.matched[i].path;
            crumbs.push({
              to: p,
              title: p.split('/')[i + 1].replace(/_/g, ' '),
            });
          }
          if (this.title)
            crumbs.push({ to: this.$route.path, title: this.title });
        }
        return crumbs;
      },
    },
  };
</script>
