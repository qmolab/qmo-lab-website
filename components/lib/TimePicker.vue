<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="time"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <TextField
        :value="time"
        :name="name"
        :label="label"
        :prepend-icon="mdiClock"
        readonly
        :on="on"
      />
    </template>
    <v-time-picker v-model="time" reactive>
      <v-spacer />
      <v-btn right color="error" text @click="menu = false">
        <span>Cancel</span>
        <v-icon right>{{ mdiCancel }}</v-icon>
      </v-btn>
      <v-btn right color="success" text @click="save">
        <span>OK</span>
        <v-icon right>{{ mdiCheckOutline }}</v-icon>
      </v-btn>
    </v-time-picker>
  </v-menu>
</template>

<script>
  import { mdiClock, mdiCancel, mdiCheckOutline } from '@mdi/js';
  import TextField from '@/components/lib/TextField.vue';
  export default {
    components: { TextField },
    model: {
      prop: 'value',
      event: 'change',
    },
    props: {
      name: { type: String, default: undefined },
      label: { type: String, default: '' },
      value: { type: String, default: '' },
    },
    data() {
      return {
        menu: false,
        mdiClock,
        mdiCancel,
        mdiCheckOutline,
        time: this.value,
      };
    },
    watch: {
      value() {
        this.time = this.value;
      },
    },
    methods: {
      save() {
        this.$refs.menu.save(this.time);
        this.$emit('change', this.time);
      },
    },
  };
</script>
