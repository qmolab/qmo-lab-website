<template>
  <WaterfallLayout
    v-slot="{
      item,
      index,
    }"
    :container-id="containerId"
    :items="items"
    :num-cols="numCols"
    :resizable="resizable"
    :delay="delay"
  >
    <slot
      v-bind="{
        item,
        index,
      }"
    />
  </WaterfallLayout>
</template>

<script>
  import WaterfallLayout from '@/components/lib/WaterfallLayout.vue';
  export default {
    name: 'VuetifyWaterfall',
    components: { WaterfallLayout },
    props: {
      containerId: { type: [String, Number], required: true },
      items: { type: [Object, Array], required: true },
      cols: { type: Number, default: 1 },
      sm: { type: Number, default: 2 },
      md: { type: Number, default: 2 },
      lg: { type: Number, default: 3 },
      xl: { type: Number, default: 4 },
      resizable: { type: Boolean, default: true },
      delay: { type: Number, default: 150 },
    },
    computed: {
      numCols() {
        switch (this.$vuetify.breakpoint.name) {
          case 'sm':
            return this.sm;
          case 'md':
            return this.md;
          case 'lg':
            return this.lg;
          case 'xl':
            return this.xl;
        }
        return this.cols;
      },
    },
  };
</script>
