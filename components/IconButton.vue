<template>
  <div></div>
</template>

<script>
  export default {
    name: 'IconButton',
    components: {},
    props: {
      alt: { type: String, default: undefined },
      title: { type: String, default: '' },
      size: { type: [Number, String], default: undefined },
      tooltipDelay: { type: [String, Number], default: '500' },
      flat: { type: Boolean, default: false },
      elevation: { type: [Number, String], default: 2 },
      hoverElevation: { type: [Number, String], default: 12 },
      disabled: { type: Boolean, default: false },
    },
  };
</script>
