<template>
  <v-select
    ref="select"
    :value="value"
    :items="items"
    :name="name"
    :label="label"
    :required="required"
    outlined
    :clearable="clearable"
    :multiple="multiple"
    :rules="rules"
    :prepend-icon="prependIcon"
    :menu-props="{ auto: true, maxHeight: 2000 }"
    @input="$emit('change', $event)"
  />
</template>

<script>
  export default {
    model: {
      prop: 'value',
      event: 'change',
    },
    props: {
      value: { type: [String, Array, Object], required: true },
      items: { type: Array, required: true },
      name: { type: String, default: undefined },
      label: { type: String, default: undefined },
      required: { type: Boolean, default: false },
      clearable: { type: Boolean, default: true },
      multiple: { type: Boolean, default: false },
      prependIcon: { type: String, default: undefined },
    },
    computed: {
      rules() {
        return this.required
          ? [(v) => !!v || 'This item is required']
          : undefined;
      },
    },
    methods: {
      focus() {
        this.$refs.select.focus();
      },
    },
  };
</script>
