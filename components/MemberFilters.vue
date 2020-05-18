<template>
  <div>
    <span
      :class="{
        'v-chip v-chip--clickable v-chip--no-color theme--dark v-size--default': true,
        'v-chip--disabled primary--text': value === 0,
      }"
      @click="$emit('input', 0)"
    >
      <span class="v-chip__content">All</span>
    </span>
    <span
      :class="{
        'v-chip v-chip--clickable v-chip--no-color theme--dark v-size--default': true,
        'v-chip--disabled': disabledButton(0),
        'primary--text': value === 1,
      }"
      @click="$emit('input', 1)"
    >
      <span class="v-chip__content">Post-Docs</span>
    </span>
    <span
      :class="{
        'v-chip v-chip--clickable v-chip--no-color theme--dark v-size--default': true,
        'v-chip--disabled': disabledButton(1),
        'primary--text': value === 2,
      }"
      @click="$emit('input', 2)"
    >
      <span class="v-chip__content">Grad Students</span>
    </span>
    <span
      :class="{
        'v-chip v-chip--clickable v-chip--no-color theme--dark v-size--default': true,
        'v-chip--disabled': disabledButton(2),
        'primary--text': value === 3,
      }"
      @click="$emit('input', 3)"
    >
      <span class="v-chip__content">Undergrads</span>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      value: { type: Number, required: true },
      nMembersCat: { type: Array, required: true },
      currentSwitch: { type: Boolean, required: true },
    },
    methods: {
      disabledButton(i) {
        return (
          this.value === i + 1 ||
          this.nMembersCat[this.currentSwitch * 3 + i] === 0
        );
      },
    },
  };
</script>
