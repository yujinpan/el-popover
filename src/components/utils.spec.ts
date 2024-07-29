import { mount } from '@vue/test-utils';
import { Popover, Popconfirm } from 'element-ui';
import { describe, it, expect } from 'vitest';

import { definePopoverComponent } from './utils';

describe('utils', () => {
  it('mounted success', () => {
    const wrapper = mount(definePopoverComponent(Popover), {
      attachTo: document.body,
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('lazy load', async () => {
    const testComponent = async (component, selector) => {
      const wrapper = mount(
        {
          render: (h) => h('div', [h(definePopoverComponent(component))]),
        },
        {
          attachTo: document.body,
        },
      );
      expect(wrapper.element.querySelector(selector)).toBeNull();
      await wrapper.trigger('click');
      expect(wrapper.element.querySelector(selector)).toBeDefined();
    };

    await testComponent(Popover, '.el-popover__reference-wrapper');
    await testComponent(Popconfirm, '.el-popover__reference-wrapper');
  });
});
