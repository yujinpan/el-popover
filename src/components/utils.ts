import { nextTick, type VNodeData } from 'vue';
import { defineComponent } from 'vue-component-pluggable';

export function findValidElem(el: Element): Element {
  return el.tagName ? el : findValidElem(el.parentElement as Element);
}

export function definePopoverComponent<T>(component: T): T {
  return defineComponent({
    mixins: component.mixins?.map((item) => ({ props: item.props })),
    name: component.name,
    props: {
      ...component.props,

      // append to component root, default false to parent element
      root: { type: Boolean },
    },
    data() {
      return {
        parentElement: null as Element | null,
        currentVisible: false,
      };
    },
    render(h) {
      const reference =
        this.$props.reference || this.$attrs.reference || this.parentElement;

      if (!reference) return undefined;

      return h(component, {
        ref: 'popover',
        props: {
          ...this.$props,
          reference,
          // currentVisible will be true when mounted
          value: this.currentVisible && this.value,
        },
        attrs: {
          ...this.$attrs,
          reference,
        },
        on: this.$listeners,
        scopedSlots: this.$scopedSlots,
        staticStyle: {
          display: 'none',
        },
      } as VNodeData);
    },
    mounted() {
      this.parentElement = this.root
        ? findValidElem(this.$parent?.$el as any)
        : findValidElem(this.$el?.parentElement as any);

      if (!this.parentElement) {
        // eslint-disable-next-line no-console
        console.warn('[ElPopover] parentElement can not found.');
      }

      nextTick(() => {
        this.currentVisible = true;
      });
    },
  }) as any;
}
