import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import { h, nextTick, defineComponent } from 'vue';

import { isComponentElem } from './utils';

describe('utils', () => {
  it('isComponentElem', async () => {
    const componentA = defineComponent({
      setup(_, { slots }) {
        return (): any =>
          h('div', [h('h1'), slots.default?.(), slots.body?.()]);
      },
    });
    const wrapperA = mount(componentA);
    const h1 = wrapperA.element.querySelector('h1') as HTMLElement;
    await nextTick();
    expect(isComponentElem(h1)).toBe(true);

    const wrapperB = mount(componentA, {
      slots: {
        default: 'h2',
      },
      scopedSlots: {
        body: () => h('h3'),
      },
    });

    // only slots, not scopedSlots
    expect(wrapperB.vm.$vnode.componentOptions?.children?.length).toBe(1);

    expect(
      isComponentElem(wrapperB.element.querySelector('h1') as HTMLElement),
    ).toBe(true);

    const h2 = wrapperB.element.querySelector('h2') as HTMLElement;
    expect(isComponentElem(h2)).toBe(false);

    // @TODO scopedSlots can not handle
    const h3 = wrapperB.element.querySelector('h3') as HTMLElement;
    expect(isComponentElem(h3)).toBe(true);
  });
});
