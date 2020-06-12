<template>
  <div>
    <v-checkbox
      v-model="inputValue"
      :name="name"
      :label="label"
      :prepend-icon="prependIcon"
    />
  </div>
</template>

<script>
  export default {
    model: {
      prop: 'value',
      event: 'input',
    },
    props: {
      value: { type: Boolean, default: false },
      name: { type: String, default: undefined },
      label: { type: String, default: undefined },
      prependIcon: { type: String, default: undefined },
    },
    data() {
      return { inputValue: this.value };
    },
    watch: {
      value() {
        this.inputValue = this.value;
      },
      inputValue() {
        this.$emit('input', this.inputValue);
      },
    },
  };
</script>
