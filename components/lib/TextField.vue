<template>
  <v-text-field
    :value="value"
    :name="name"
    :rules="rules"
    :counter="counter"
    :label="label"
    outlined
    :type="type"
    :required="required"
    :readonly="readonly"
    :prepend-icon="prependIcon"
    @input="$emit('change', $event)"
    v-on="on"
  />
</template>

<script>
  export default {
    model: {
      prop: 'value',
      event: 'change',
    },
    props: {
      value: { type: String, default: '' },
      name: { type: String, default: undefined },
      label: { type: String, default: undefined },
      counter: { type: Number, default: undefined },
      rules: { type: Array, default: undefined },
      required: { type: Boolean, default: false },
      readonly: { type: Boolean, default: false },
      type: { type: String, default: 'string' },
      prependIcon: { type: [Object, Array, String], default: undefined },
      on: { type: Object, default: undefined },
    },
  };
</script>
