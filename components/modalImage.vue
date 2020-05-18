<template>
  <v-dialog v-model="dialog" fullscreen>
    <div class="rel fill-h" style="background-color: rgba(0, 0, 0, 0.8);">
      <div class="pa-4">
        <v-carousel
          :id="`modal-carousel`"
          :key="`modal-carousel`"
          v-model="modelValue"
          hide-delimiters
          show-arrows
          continuous
          height="80vh"
          :next-icon="mdiChevronRight"
          :prev-icon="mdiChevronLeft"
        >
          <v-carousel-item
            v-for="(slide, i) in images"
            :id="`modal-carousel-item-${i}`"
            :key="`modal-carousel-item-${i}`"
            :src="slide.href"
            :srcset="slide.webp"
            :lazy-src="slide.thumbnail.src"
            contain
          />
        </v-carousel>
        <v-slide-group
          id="modal-carousel-bsg"
          key="modal-carousel-bsg"
          v-model="modelValue"
          class="d-xs-none d-md-flex pt-4"
          show-arrows
          center-active
          style="height: 15vh;"
          :next-icon="mdiChevronRight"
          :prev-icon="mdiChevronLeft"
        >
          <v-slide-item
            v-for="(slide, i) in images"
            :id="`modal-carousel-bsi-${i}`"
            :key="`modal-carousel-bsi-${i}`"
            v-slot:default="{ active, toggle }"
            class="mx-2"
            style="flex: 1 1 auto;"
          >
            <v-card :disabled="active" @click="toggle">
              <v-img
                height="100%"
                :aspect-ratio="5 / 4"
                :src="slide.thumbnail.src"
                :srcset="slide.webp"
              />
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </div>
      <v-btn
        color="red"
        class="abs closeButton pa-0 ma-2"
        style="top: 8px; right: 8px;"
        @click="dialog = false"
      >
        <v-icon size="36">{{ closeIcon }}</v-icon>
      </v-btn>
    </div>
  </v-dialog>
</template>

<script>
  import { mdiChevronRight, mdiChevronLeft, mdiClose } from '@mdi/js';
  export default {
    name: 'ModalImage',
    components: {},
    model: {
      prop: 'value',
      event: 'changed',
    },
    props: {
      value: { type: [Number, String], default: -1 },
      images: { type: [Object, Array], default: undefined },
    },
    data() {
      return { closeIcon: mdiClose, mdiChevronRight, mdiChevronLeft };
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
    float: right;
    min-width: 36px !important;
    max-width: 36px;
  }
</style>
