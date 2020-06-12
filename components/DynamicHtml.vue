<template>
  <div v-if="pageContent">
    <div v-for="(item, i) in paragraphs" :key="i">
      <StoreImage
        v-if="imageCategory && item.img"
        :class="{
          'my-1 ta-center': true,
          'float-l mr-4': item.float === 'left',
          'float-r ml-4': item.float === 'right',
        }"
        :sub-category="imageCategory"
        :item-id="item.img"
        :width="item.width"
        :height="item.height"
        :style="'max-width: ' + (item.float ? '30%;' : '60%;')"
        :max-width="item.maxWidth"
        :max-height="item.maxHeight"
      />
      <div v-if="item.content" class="mb-2" v-html="item.content" />
    </div>
  </div>
</template>

<script>
  import StoreImage from '@/components/StoreImage.vue';
  function convertText(text) {
    return text
      .replace(/"/g, '')
      .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
      .replace(
        /\[([^\]]+)\]\((http[^)]+)\)/g,
        '<a href="$2" target="_blank" class="v-btn v-btn--flat v-btn--text theme--dark v-size--small" rel="noopener"><span class="v-btn__content">$1<span aria-hidden="true" class="v-icon notranslate v-icon--right v-icon--svg theme--dark secondary--text"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"></path></svg></span></span></a>'
      )
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="/$2" class="v-btn v-btn--flat v-btn--text theme--dark v-size--small"><span class="v-btn__content">$1</span></a>'
      )
      .replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>')
      .replace(/(\*|_)(.*?)\1/g, '<em>$2</em>')
      .replace(/~~(.*?)~~/g, '<del>$1</del>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/_\{(.*?)\}/g, '<sub>$1</sub>')
      .replace(/\^\{(.*?)\}/g, '<sup>$1</sup>')
      .replace(/_(.)/g, '<sub>$1</sub>')
      .replace(/\^(.)/g, '<sup>$1</sup>')
      .replace(/\n/g, '<br />');
  }
  export default {
    components: { StoreImage },
    props: {
      pageContent: {
        type: String,
        default: undefined,
      },
      imageCategory: {
        type: String,
        default: undefined,
      },
    },
    computed: {
      paragraphs() {
        try {
          return (
            this.pageContent &&
            JSON.parse(this.pageContent).map((e) =>
              typeof e === 'string' ? { content: convertText(e) } : e
            )
          );
        } catch {
          return [{ content: 'Fail' }];
        }
      },
    },
  };
</script>
