<template>
  <div :id="`waterfallContainer-${containerId}`">
    <modalImage
      v-if="popupOnClick"
      :id="`modal-gallery-${containerId}`"
      :key="`modal-gallery-${containerId}`"
      v-model="currentIndex"
      :unique-key="`modal-gallery-${containerId}`"
      :images="items"
    />
    <v-row
      :id="`waterfallGrid-${containerId}`"
      class="waterfall-layout"
      :dense="dense"
      :no-gutters="noGutters"
      :align-content="alignContent"
      :align-content-sm="alignContentSm"
      :align-content-md="alignContentMd"
      :align-content-lg="alignContentLg"
      :align-content-xl="alignContentXl"
      :align="align"
      :align-sm="alignSm"
      :align-md="alignMd"
      :align-lg="alignLg"
      :align-xl="alignXl"
      :justify="justify"
      :justify-sm="justifySm"
      :justify-md="justifyMd"
      :justify-lg="justifyLg"
      :justify-xl="justifyXl"
      :tag="galleryTag"
    >
      <v-col
        v-for="(item, index) in items"
        :key="`waterfall--${index}`"
        class="waterfall-item"
        :cols="cols"
        :sm="sm"
        :md="md"
        :lg="lg"
        :xl="xl"
        :tag="itemWrapperTag"
      >
        <slot
          v-bind="{
            item,
            index,
            update,
            select() {
              onSelect(index);
            },
          }"
        >
          <ImageButton
            :src="item.thumbnail"
            :lazy-src="item.lazy"
            :alt="item.title"
            :title="item.title"
            :aspect-ratio="item.aspectRatio"
            :height="item.height"
            :min-height="item.minHeight"
            :max-height="item.maxHeight"
            :width="item.width"
            :min-width="item.minWidth"
            :max-width="item.maxWidth"
            @clicked="onSelect(index)"
            @load="update"
          />
        </slot>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import ImageButton from '@/components/ImageButton.vue';
  import modalImage from '@/components/modalImage.vue';
  function sMargin(name, el) {
    return parseFloat(window.getComputedStyle(el)['margin' + name]) || 0;
  }
  function sBottom(el) {
    return parseFloat(el.style.top) + el.offsetHeight + sMargin('Bottom', el);
  }
  function sRight(el) {
    return parseFloat(el.style.left) + el.offsetWidth + sMargin('Right', el);
  }
  function stylize(item, left = '0', top = '0') {
    item.style.left = left + 'px';
    item.style.top = top + 'px';
  }
  export default {
    name: 'WaterfallLayout',
    components: {
      ImageButton,
      modalImage,
    },
    props: {
      containerId: { type: [String, Number], required: true },
      items: { type: [Object, Array], required: true },
      cols: { type: [String, Number], default: 12 },
      sm: { type: [String, Number], default: 6 },
      md: { type: [String, Number], default: undefined },
      lg: { type: [String, Number], default: 4 },
      xl: { type: [String, Number], default: 3 },
      resizable: { type: Boolean, default: true },
      dense: { type: Boolean, default: false },
      noGutters: { type: Boolean, default: false },
      galleryTag: { type: String, default: 'div' },
      itemWrapperTag: { type: String, default: 'div' },
      popupOnClick: { type: Boolean, default: false },
      align: { type: String, default: undefined },
      alignSm: { type: String, default: undefined },
      alignMd: { type: String, default: undefined },
      alignLg: { type: String, default: undefined },
      alignXl: { type: String, default: undefined },
      alignContent: { type: String, default: undefined },
      alignContentSm: { type: String, default: undefined },
      alignContentMd: { type: String, default: undefined },
      alignContentLg: { type: String, default: undefined },
      alignContentXl: { type: String, default: undefined },
      justify: { type: String, default: undefined },
      justifySm: { type: String, default: undefined },
      justifyMd: { type: String, default: undefined },
      justifyLg: { type: String, default: undefined },
      justifyXl: { type: String, default: undefined },
    },
    data() {
      return { currentIndex: -1, updateId: undefined, prev: undefined };
    },
    mounted() {
      this.grid = document.getElementById(`waterfallGrid-${this.containerId}`);
      this.children = this.grid.children;
      if (this.resizable)
        window.addEventListener('resize', this.refresh, { passive: true });
      window.addEventListener('scroll', this.update, { passive: true });
      this.$nextTick(this.update);
    },
    activated() {
      this.$nextTick(this.update);
    },
    methods: {
      onSelect(index) {
        if (this.popupOnClick) this.currentIndex = index;
        this.$emit('select', this.currentIndex);
      },
      update() {
        clearTimeout(this.updateId);
        this.updateId = setTimeout(this.refresh, 200);
      },
      refresh() {
        if (process.client && this.grid && this.children.length) this.setup();
      },
      setup_mainGrid(bound, i) {
        const boundary = bound.sort((a, b) => {
          return sBottom(a) === sBottom(b)
            ? parseFloat(b.style.left) - parseFloat(a.style.left)
            : sBottom(b) - sBottom(a);
        });
        if (i >= this.children.length) return boundary[0];
        const item = this.children[i];
        const minEl = boundary.pop();
        stylize(
          item,
          parseFloat(minEl.style.left),
          sBottom(minEl) + sMargin('Top', item)
        );
        boundary.push(item);
        return this.setup_mainGrid(boundary, i + 1);
      },
      setup() {
        const boundary = [];
        let i = 1;
        this.prev = this.children[0];
        stylize(this.prev, sMargin('Left', this.prev));
        boundary.push(this.prev);
        for (; i < this.children.length; i++) {
          const item = this.children[i];
          if (sRight(this.prev) + item.offsetWidth > this.grid.offsetWidth + 10)
            break;
          stylize(item, sRight(this.prev) + sMargin('Left', item));
          boundary.push(item);
          this.prev = item;
        }
        const maxEl = this.setup_mainGrid(boundary, i);
        this.grid.style.height =
          (sBottom(maxEl) + sMargin('Bottom', maxEl)).toString() + 'px';
      },
    },
  };
</script>

<style lang="scss" scoped>
  .waterfall-layout {
    margin: auto;
    position: relative;
    overflow: hidden;
    .waterfall-item {
      position: absolute;
      top: 1000px;
      transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
</style>
