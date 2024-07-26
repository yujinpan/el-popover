import { Dropdown, DropdownMenu } from 'element-ui';
import { defineComponent } from 'vue-component-pluggable';

import type { VNodeData } from 'vue';

import { definePopoverComponent } from '@/components/utils';

const ElDropdownReference = defineComponent({
  name: Dropdown.name,
  props: {
    ...Dropdown.props,

    reference: {},
  },
  render(h) {
    // empty vNode point the reference
    const trigger = h('span', { slot: 'default' });
    trigger.elm = this.reference;

    return h(
      Dropdown,
      {
        props: this.$props,
        on: this.$listeners,
      } as VNodeData,
      [
        trigger,
        h('span', { slot: 'dropdown' }),
        ...(this.$scopedSlots.default?.() || []),
      ],
    );
  },
});

const ElDropdown = definePopoverComponent(ElDropdownReference);

export const ElDropdownMenu = defineComponent({
  ...DropdownMenu,
  install: undefined,
  // fork from element-ui/packages/dropdown/src/dropdown-menu.vue
  mounted() {
    this.dropdown.popperElm = this.popperElm = this.$el;

    // compatible with 2.6 new v-slot syntax
    // issue link https://github.com/ElemeFE/element/issues/14345
    this.dropdown.initDomOperation();

    // use trigger element
    this.referenceElm = this.dropdown.triggerElm;
  },
});

export default ElDropdown;
