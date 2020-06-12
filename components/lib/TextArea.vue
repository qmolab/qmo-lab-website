<template>
  <v-textarea
    :value="value"
    :name="name"
    :rules="rules"
    :counter="counter"
    :label="label"
    outlined
    auto-grow
    :required="required"
    :prepend-icon="prependIcon"
    :prepend-inner-icon="prependInnerIcon"
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
      value: { type: String, default: '' },
      name: { type: String, default: undefined },
      label: { type: String, default: undefined },
      counter: { type: Number, default: undefined },
      rules: { type: Array, default: undefined },
      prependIcon: { type: [Object, Array, String], default: undefined },
      prependInnerIcon: { type: [Object, Array, String], default: undefined },
      required: { type: Boolean, default: false },
    },
  };
</script>
