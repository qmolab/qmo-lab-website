export default function setHeadAndTitle(
  title,
  path = '',
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
        ],
        link: [
          {
            rel: 'canonical',
            href: process.env.baseUrl + path,
          },
        ],
      };
    },
  };
}
