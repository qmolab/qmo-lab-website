<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :value="dateText"
        :name="name"
        :label="label"
        :prepend-icon="mdiCalendar"
        readonly
        outlined
        v-bind="attrs"
        v-on="on"
      />
    </template>
    <v-date-picker v-model="date" :range="range" reactive no-title scrollable>
      <v-spacer />
      <v-btn right color="error" text @click="menu = false">
        <span>Cancel</span>
        <v-icon right>$cancel</v-icon>
      </v-btn>
      <v-btn right color="success" text @click="save">
        <span>OK</span>
        <v-icon right>$success</v-icon>
      </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
  import { mdiCalendar } from '@mdi/js';
  export default {
    model: {
      prop: 'value',
      event: 'change',
    },
    props: {
      name: { type: String, default: undefined },
      label: { type: String, default: '' },
      value: { type: String, default: '' },
      range: { type: Boolean, default: false },
    },
    data() {
      return {
        menu: false,
        date: this.getDate(),
        mdiCalendar,
      };
    },
    computed: {
      dateText() {
        return this.range ? this.date.join(' ~ ') : this.date;
      },
    },
    watch: {
      value() {
        this.date = this.getDate();
      },
    },
    methods: {
      getDate() {
        return this.range
          ? this.value
            ? JSON.parse(this.value)
            : ['', '']
          : this.value;
      },
      save() {
        this.$refs.menu.save(this.date);
        this.$emit(
          'change',
          this.range ? JSON.stringify(this.date) : this.date
        );
      },
    },
  };
</script>
