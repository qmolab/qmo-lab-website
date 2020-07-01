<template>
  <div ref="grid" class="rel waterfall-layout mx-auto" :style="gridStyle">
    <div v-for="(item, index) in items" :key="item.title">
      <slot v-bind="{ item, index }" />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      items: { type: [Object, Array], required: true },
      cols: { type: Number, default: 1 },
      sm: { type: Number, default: 2 },
      md: { type: Number, default: 2 },
      lg: { type: Number, default: 3 },
      xl: { type: Number, default: 4 },
      delay: { type: Number, default: 150 },
    },
    data: () => ({ loaded: '', gridStyle: '' }),
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
      numItems() {
        return this.items ? this.items.length : 0;
      },
      children() {
        return this.$refs.grid.children;
      },
    },
    watch: {
      numCols() {
        setTimeout(() => this.resize(), 0);
      },
    },
    mounted() {
      this.setup((i) => {
        const child = this.children[i];
        child.className = `waterfall-item cols-${this.numCols}`;
        setTimeout(() => {
          this.updateItem(child);
          child.className += ' loaded';
        }, Math.min(i, 6) * this.delay);
      });
      setTimeout(() => {
        this.finish();
        this.loaded = 'loaded';
        this.resizeListener = window.addEventListener('resize', this.resize, {
          passive: true,
        });
      }, Math.min(this.numItems, 6) * this.delay);
    },
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
        if (process.client && this.numItems) {
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
        this.gridStyle = `height: ${max}px`;
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
