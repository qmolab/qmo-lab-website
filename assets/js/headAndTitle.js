export default function setHeadAndTitle(
  title,
  description,
  metaTitle = undefined,
  tags = ''
) {
  return {
    mounted() {
      this.$store.commit('pageTitle', title);
    },
    head() {
      return {
        title: metaTitle || title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: description,
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: `${title}, QMO Lab UCR ${tags}`,
          },
        ],
      };
    },
  };
}
