import { Popover } from 'element-ui';
import { defineComponent } from 'vue-component-pluggable';

import {
  findComponent,
  findValidElem,
  isComponentElem,
} from '@/components/utils';

const ElPopover: typeof Popover = defineComponent({
  name: 'ElPopover',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  props: Popover['props'],
  data() {
    return {
      parentElement: null as Element | null,
    };
  },
  render(h) {
    if (!this.parentElement) return undefined;

    return h(Popover, {
      props: {
        ...this.$props,
        reference: this.$props.reference || this.parentElement,
      },
      attrs: this.$attrs,
      on: this.$listeners,
      scopedSlots: this.$scopedSlots,
      staticStyle: {
        display: 'none',
      },
    });
  },
  mounted() {
    this.parentElement = (() => {
      if (isComponentElem(this.$el?.parentElement as HTMLElement)) {
        const validElem = findValidElem(this.$parent?.$el as HTMLElement);
        if (isComponentElem(validElem)) {
          return findComponent(validElem)?.$el;
        } else {
          return validElem;
        }
      } else {
        return findValidElem(this.$el.parentElement as HTMLElement);
      }
    })();
  },
}) as any;

export default ElPopover;
