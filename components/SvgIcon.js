import '../../../src/components/VIcon/VIcon.sass'; // Mixins

import Vue from 'vue';
import BindsAttrs from '../../mixins/binds-attrs';
import Colorable from '../../mixins/colorable';
import Sizeable from '../../mixins/sizeable';
import Themeable from '../../mixins/themeable'; // Util

import { convertToUnit } from '../../util/helpers'; // Types

import mixins from '../../util/mixins';
let SIZE_MAP;

(function (SIZE_MAP) {
  SIZE_MAP.xSmall = '12px';
  SIZE_MAP.small = '16px';
  SIZE_MAP.default = '24px';
  SIZE_MAP.medium = '28px';
  SIZE_MAP.large = '36px';
  SIZE_MAP.xLarge = '40px';
})(SIZE_MAP || (SIZE_MAP = {}));

const VIcon = mixins(
  BindsAttrs,
  Colorable,
  Sizeable,
  Themeable
  /* @vue/component */
).extend({
  name: 'VIcon',
  props: {
    dense: { type: Boolean },
    disabled: { type: Boolean },
    left: { type: Boolean },
    right: { type: Boolean },
    link: { type: Boolean },
    size: {
      type: [Number, String],
      default: undefined,
    },
    tag: {
      type: String,
      default: 'i',
    },
  },
  methods: {
    getIcon() {
      let iconName = '';
      if (this.$slots.default) iconName = this.$slots.default[0].text.trim();
      return iconName;
    },

    getSize() {
      const sizes = {
        xSmall: this.xSmall,
        small: this.small,
        medium: this.medium,
        large: this.large,
        xLarge: this.xLarge,
      };
      const explicitSize = Object.keys(sizes).find((key) => sizes[key]);
      return (
        (explicitSize && SIZE_MAP[explicitSize]) || convertToUnit(this.size)
      );
    },

    renderSvgIcon(icon, fontSize, h) {
      const wrapperData = {
        staticClass: 'v-icon notranslate',
        class: {
          'v-icon--disabled': this.disabled,
          'v-icon--left': this.left,
          'v-icon--link': this.link,
          'v-icon--right': this.right,
          'v-icon--dense': this.dense,
          ...this.themeClasses,
        },
        attrs: {
          'aria-hidden': !this.link,
          disabled: this.link && this.disabled,
          type: this.link ? 'button' : undefined,
        },
        style: fontSize
          ? {
              fontSize,
              height: fontSize,
              width: fontSize,
            }
          : undefined,
      };
      this.setTextColor(this.color, wrapperData);
      const svgData = {
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          height: fontSize || '24',
          width: fontSize || '24',
          role: 'img',
          'aria-hidden': true,
        },
      };
      return h(this.link ? 'button' : 'span', wrapperData, [
        h('svg', svgData, [
          h('path', {
            attrs: {
              d: icon,
            },
          }),
        ]),
      ]);
    },
  },

  render(h) {
    return this.renderSvgIcon(this.getIcon(), this.getSize(), h);
  },
});
export default Vue.extend({
  name: 'VIcon',
  $_wrapperFor: VIcon,
  functional: true,

  render(h, { data, children }) {
    let iconName = ''; // Support usage of v-text and v-html

    if (data.domProps) {
      iconName =
        data.domProps.textContent || data.domProps.innerHTML || iconName; // Remove nodes so it doesn't
      // overwrite our changes

      delete data.domProps.textContent;
      delete data.domProps.innerHTML;
    }

    return h(VIcon, data, iconName ? [iconName] : children);
  },
});
// # sourceMappingURL=VIcon.js.map
