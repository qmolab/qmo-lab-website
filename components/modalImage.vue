<template>
  <v-dialog v-model="dialog" :overlay-opacity="0.76" overlay-color="#000">
    <v-btn
      width="36"
      min-width="36"
      height="36"
      color="red"
      class="closeButton"
      @click="dialog = false"
    >
      <v-icon large>mdi-close</v-icon>
    </v-btn>
    <v-carousel
      :id="`modal-carousel-${uniqueKey}`"
      :key="`modal-carousel-${uniqueKey}`"
      v-model="modelValue"
      hide-delimiters
      show-arrows
      continuous
      height="70vh"
    >
      <v-carousel-item
        v-for="(slide, i) in images"
        :id="`modal-carousel-${uniqueKey}-item-${i}`"
        :key="`modal-carousel-${uniqueKey}-item-${i}`"
        :src="slide.href"
        contain
      />
    </v-carousel>
    <v-slide-group
      :id="`modal-carousel-${uniqueKey}-bsg`"
      :key="`modal-carousel-${uniqueKey}-bsg`"
      v-model="modelValue"
      class="pa-4"
      show-arrows
      center-active
      style="height: 15vh;"
    >
      <v-slide-item
        v-for="(slide, i) in images"
        :id="`modal-carousel-${uniqueKey}-bsi-${i}`"
        :key="`modal-carousel-${uniqueKey}-bsi-${i}`"
        v-slot:default="{ active, toggle }"
        class="mx-2"
      >
        <v-card :disabled="active" @click="toggle">
          <v-img height="100%" width="100%" :src="slide.thumbnail" />
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-dialog>
</template>

<script>
  export default {
    name: 'ModalImage',
    components: {},
    model: {
      prop: 'value',
      event: 'changed',
    },
    props: {
      uniqueKey: { type: [Number, String], default: '' },
      value: { type: [Number, String], default: -1 },
      images: { type: [Object, Array], default: undefined },
    },
    data() {
      return {};
    },
    computed: {
      dialog: {
        get() {
          return this.value !== -1;
        },
        set(val) {
          this.$emit('changed', -1);
        },
      },
      modelValue: {
        get() {
          return this.value === -1 ? 0 : this.value;
        },
        set(val) {
          this.$emit('changed', val);
        },
      },
    },
  };
</script>

<style lang="scss" scoped>
  .closeButton {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
