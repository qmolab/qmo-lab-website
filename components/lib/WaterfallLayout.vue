<template>
  <div :id="`${containerId}`" class="waterfall-layout">
    <div v-for="(item, index) in items" :key="`${containerId}-item--${index}`">
      <slot
        v-bind="{
          item,
          index,
        }"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WaterfallLayout',
    props: {
      containerId: { type: [String, Number], required: true },
      items: { type: [Object, Array], required: true },
      numCols: { type: Number, required: true },
      resizable: { type: Boolean, default: true },
      delay: { type: Number, default: 150 },
    },
    data() {
      return {
        loaded: '',
      };
    },
    computed: {
      numItems() {
        return this.items ? this.items.length : 0;
      },
    },
    watch: {
      numCols() {
        setTimeout(() => this.resize(), 0);
      },
      resizable() {
        window.removeEventListener(this.resizeListener, 'resize');
      },
    },
    mounted() {
      this.grid = document.getElementById(`${this.containerId}`);
      this.children = this.grid.children;
      this.setup((i) => {
        const child = this.children[i];
        child.className = `waterfall-item cols-${this.numCols}`;
        setTimeout(() => {
          this.updateItem(child);
          child.className += ' loaded';
        }, i * this.delay);
      });
      setTimeout(() => {
        this.finish();
        this.loaded = 'loaded';
        if (this.resizable) {
          this.resizeListener = window.addEventListener('resize', this.resize, {
            passive: true,
          });
        }
      }, this.numItems * this.delay);
    },
    activated() {},
    updated() {},
    methods: {
      updateItem(item) {
        let col = 0;
        let min = this.lastNItems[0];
        for (let i = 1; i < this.lastNItems.length; ++i) {
          if (this.lastNItems[i] < min) {
            min = this.lastNItems[i];
            col = i;
          }
        }
        item.className = `waterfall-item cols-${this.numCols} column-${
          col + 1
        } ${this.loaded}`;
        this.lastNItems[col] += item.offsetHeight;
        item.style.cssText = `top:${min}px;left:${
          (100 * col) / this.numCols
        }%;`;
      },
      setup(func) {
        if (process.client && this.grid && this.numItems) {
          this.lastNItems = [];
          for (let i = 0; i < this.numCols; ++i) this.lastNItems.push(0);
          for (let i = 0; i < this.numItems; ++i) func(i);
        }
      },
      finish() {
        let max = 0;
        this.lastNItems.forEach((e) => {
          if (e > max) max = e;
        });
        this.grid.style.height = `${max}px`;
      },
      resize() {
        this.setup((i) => {
          const child = this.children[i];
          this.updateItem(child);
        });
        this.finish();
      },
    },
  };
</script>

<style lang="scss">
  $gutterSize: 16px !default;
  .waterfall-layout {
    margin: auto;
    position: relative;
    height: 100vh;
  }
  .waterfall-item {
    opacity: 0;
    position: absolute;
    top: 1000px;
    transform: translateY(700px);
    padding: $gutterSize / 2;
    @for $i from 1 through 6 {
      &.cols-#{$i} {
        width: percentage(1 / $i);
        @for $j from 1 through $i {
          &.column-#{j} {
            left: percentage(($j - 1) / $i);
          }
        }
      }
    }
    &.loaded {
      opacity: 1;
      transform: translateY(0);
      transition-property: transform, top, left;
      transition-duration: 0.28s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
</style>
