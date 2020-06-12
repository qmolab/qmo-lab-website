<template>
  <span>{{ prettyDate }}</span>
</template>

<script>
  export default {
    props: {
      value: { type: String, required: true },
    },
    computed: {
      prettyDate() {
        const d = new Date(this.value);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(
          d
        );
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        return `${month}. ${da}, ${ye}`;
      },
    },
  };
</script>
