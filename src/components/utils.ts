import { defineComponent } from 'vue-component-pluggable';

export function findValidElem(el: Element): Element {
  return el.tagName ? el : findValidElem(el.parentElement as Element);
}

export function definePopoverComponent<T>(component: T): T {
  return defineComponent({
    name: component.name,
    props: {
      ...component.props,

      reference: {},
      // append to component root, default false to parent element
      root: { type: Boolean },
    },
    data() {
      return {
        parentElement: null as Element | null,
      };
    },
    render(h) {
      if (!this.parentElement) return undefined;

      return h(component, {
        props: {
          ...this.$props,
          reference: this.$props.reference || this.parentElement,
        },
        attrs: {
          ...this.$attrs,
          reference: this.$props.reference || this.parentElement,
        },
        on: this.$listeners,
        scopedSlots: this.$scopedSlots,
        staticStyle: {
          display: 'none',
        },
      });
    },
    mounted() {
      this.parentElement = this.root
        ? findValidElem(this.$parent?.$el as any)
        : findValidElem(this.$el?.parentElement as any);

      if (!this.parentElement) {
        // eslint-disable-next-line no-console
        console.warn('[ElPopover] parentElement can not found.');
      }
    },
  }) as any;
}
