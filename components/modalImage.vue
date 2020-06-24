<template>
  <v-dialog v-model="dialog" fullscreen>
    <div class="modalContainer fill-vw fill-vh black--80 no-overflow">
      <v-row class="pa-4" no-gutters>
        <v-col class="d-flex align-center justify-center modalImage">
          <v-img
            v-if="images[modelValue]"
            :src="images[modelValue].href"
            :lazy-src="images[modelValue].thumbnail.src"
            contain
            max-width="75vw"
            max-height="75vh"
            class="flex-grow-0"
          />
        </v-col>
        <v-col cols="12">
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
              class="mx-2 justify-self-center"
            >
              <v-img
                max-height="13.5vh"
                max-width="24vh"
                :class="{ dimmer: active, link: !active }"
                :src="slide.thumbnail.src"
                :srcset="slide.thumbnail.srcSet"
                @click="toggle"
              />
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
      <v-btn color="red" class="abs t0 r0 ma-4" fab @click="dialog = false">
        <v-icon x-large>$close</v-icon>
      </v-btn>
    </div>
  </v-dialog>
</template>

<script>
  export default {
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

<style lang="scss" scoped>
  .modalImage {
    height: 78vh;
  }
  .vh15 {
    height: 15vh !important;
  }
</style>
