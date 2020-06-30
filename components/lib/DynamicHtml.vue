<template>
  <!-- eslint-disable vue/no-v-html -->
  <div v-if="pageContent">
    <div v-for="(item, i) in paragraphs" :key="i">
      <QImg
        v-if="imageCategory && item.img"
        :class="{
          'my-1 text-center': true,
          'float-left mr-4': item.float === 'left',
          'float-right ml-4': item.float === 'right',
          'mx-auto': !item.float,
        }"
        :cat="imageCategory"
        :name="item.img"
        :alt="item.alt"
        :width="item.width"
        :height="item.height"
        :placeholder="item.placeholder"
        :max-width="item.maxWidth || '400px'"
        :style="`max-width: ${item.maxWidth || '400px'}`"
        :max-height="item.maxHeight"
        img-class="imgBorder"
        no-title
      >
        <template v-slot:append>
          <div v-if="figures" class="caption mb-2">
            Figure {{ figureNum(i) }}: {{ item.imgTitle }}
          </div>
        </template>
      </QImg>
      <div
        v-if="item.content"
        class="body-1 text--secondary mb-2"
        v-html="item.content"
      />
    </div>
  </div>
</template>

<script>
  import QImg from '@/components/lib/QImg.vue';
  function convertText(text) {
    return text
      .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
      .replace(
        /\[([^\]]+)\]\((http[^)]+)\)/g,
        '<a href="$2" target="_blank" class="v-btn v-btn--flat v-btn--text theme--dark v-size--small" rel="noopener"><span class="v-btn__content">$1<span aria-hidden="true" class="v-icon notranslate v-icon--right v-icon--svg theme--dark secondary--text"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24" role="img" aria-hidden="true"><path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"></path></svg></span></span></a>'
      )
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="' +
          process.env.baseUrl +
          '$2" class="v-btn v-btn--flat v-btn--text theme--dark v-size--small"><span class="v-btn__content">$1</span></a>'
      )
      .replace(/\n/g, '<br />');
  }
  export default {
    components: { QImg },
    props: {
      pageContent: {
        type: String,
        default: undefined,
      },
      imageCategory: {
        type: String,
        default: undefined,
      },
      figures: {
        type: Boolean,
        default: false,
      },
    },
    data: () => ({ figureList: {}, figNum: 1 }),
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
    methods: {
      figureNum(i) {
        if (!this.figureList[i]) this.figureList[i] = this.figNum++;
        return this.figureList[i];
      },
    },
  };
</script>
