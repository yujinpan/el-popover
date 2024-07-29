import { nextTick, type PropType, type VNodeData } from 'vue';
import { defineComponent } from 'vue-component-pluggable';

export function definePopoverComponent<T>(component: T): T {
  return defineComponent({
    mixins: component.mixins?.map((item) => ({ props: item.props })),
    name: component.name,
    props: {
      trigger: {
        type: String as PropType<'click' | 'focus' | 'hover' | 'manual'>,
        default: 'click',
      },
      ...component.props,

      // append to component root, default false to parent element
      root: { type: Boolean },
    },
    data() {
      return {
        parentElement: null as Element | null,
        currentVisible: false,
        loaded: false,
      };
    },
    computed: {
      currentReference() {
        return (
          this.$props.reference || this.$attrs.reference || this.parentElement
        );
      },
      triggerEventName() {
        return {
          click: 'click',
          focus: 'focusin',
          hover: 'mouseenter',
        }[this.trigger as string];
      },
    },
    watch: {
      currentReference: {
        handler(val) {
          if (val) {
            val.setAttribute(
              'tabindex',
              val.getAttribute('tabindex') || this.tabindex || 0,
            );
            this.bindTriggerEvents(val);
          }
        },
        immediate: true,
      },
    },
    methods: {
      handleLoaded() {
        this.unbindTriggerEvents?.();
        this.unbindTriggerEvents = null;

        this.loaded = true;

        this.triggerEventName &&
          nextTick(() => {
            this.currentReference.dispatchEvent(
              new CustomEvent(this.triggerEventName),
            );
          });
      },
      handleManualLoaded() {
        this.value && this.handleLoaded();
      },
      bindTriggerEvents(elem: Element) {
        this.unbindTriggerEvents?.();

        switch (this.trigger) {
          case 'click':
          case 'focus':
          case 'hover':
            elem.addEventListener(this.triggerEventName, this.handleLoaded);
            this.unbindTriggerEvents = () =>
              elem.removeEventListener(
                this.triggerEventName,
                this.handleLoaded,
              );
            break;
          case 'manual':
            this.unbindTriggerEvents = this.$watch(
              'value',
              this.handleManualLoaded,
              {
                immediate: true,
              },
            );
            break;
        }
      },
      unbindTriggerEvents() {},
    },
    render(h) {
      if (!this.currentReference || !this.loaded) return undefined;

      return h(component, {
        ref: 'popover',
        props: {
          ...this.$props,
          reference: this.currentReference,
          // currentVisible will be true when mounted
          value: this.currentVisible && this.value,
        },
        attrs: {
          ...this.$attrs,
          reference: this.currentReference,
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
        ? findValidRootElem(this.$parent?.$el as any)
        : findValidElem(this.$el?.parentElement as any);

      if (!this.parentElement) {
        // eslint-disable-next-line no-console
        console.warn('[ElPopover] parentElement can not found.');
      }

      nextTick(() => {
        this.currentVisible = true;
      });
    },
    beforeDestroy() {
      this.unbindTriggerEvents?.();
      this.unbindTriggerEvents = null;
    },
  }) as any;
}

function findValidElem(el: Element): Element {
  return el.tagName ? el : findValidElem(el.parentElement as Element);
}

function findValidRootElem(el: Element): Element {
  return el.tagName && el.__vue__
    ? el
    : findValidRootElem(el.parentElement as Element);
}
