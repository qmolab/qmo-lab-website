<template>
  <v-dialog
    :value="dialog"
    overlay-opacity="1"
    overlay-color="primary"
    fullscreen
  >
    <div class="modalContainer">
      <div class="pa-4">
        <v-carousel
          :id="`modal-carousel`"
          v-model="modelValue"
          hide-delimiters
          show-arrows
          continuous
          height="80vh"
        >
          <v-carousel-item
            v-for="(slide, i) in images"
            :id="`modal-carousel-item-${i}`"
            :key="slide.href"
            :src="slide.href"
            :srcset="slide.webp"
            :lazy-src="slide.thumbnail.src"
            contain
          />
        </v-carousel>
        <v-slide-group
          v-if="images.length > 0"
          :key="images[0].thumbnail.src"
          v-model="modelValue"
          class="hidden-md-and-down pt-4 vh15"
          show-arrows
          center-active
          mandatory
        >
          <v-slide-item
            v-for="(slide, i) in images"
            :id="`modal-carousel-bsi-${i}`"
            :key="`modal-carousel-bsi-${i}`"
            v-slot:default="{ active, toggle }"
            class="mx-2"
          >
            <v-img
              max-height="13.5vh"
              max-width="24vh"
              :class="{ dimDown: active, pointer: !active }"
              :src="slide.thumbnail.src"
              :srcset="slide.webp"
              @click="toggle"
            />
          </v-slide-item>
        </v-slide-group>
      </div>
      <v-btn color="red" class="abs closeButton" fab @click="dialog = false">
        <v-icon x-large>$mdiClose</v-icon>
      </v-btn>
    </div>
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
      value: { type: [Number, String], default: -1 },
      images: { type: [Object, Array], default: undefined },
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

<style lang="scss">
  .modalContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: rgba($black, 0.9);
    .closeButton {
      top: 16px;
      right: 16px;
    }
    .v-slide-group__content {
      justify-content: center;
    }
  }
  .vh15 {
    height: 15vh !important;
  }
  .pointer {
    cursor: pointer !important;
  }
  .dimDown {
    opacity: 0.3 !important;
  }
</style>
