import { mount } from '@vue/test-utils';
import { Popover } from 'element-ui';
import { describe, it, expect } from 'vitest';

import { definePopoverComponent } from './utils';

describe('utils', () => {
  it('mounted success', () => {
    const wrapper = mount(definePopoverComponent(Popover), {
      attachTo: document.body,
    });
    expect(wrapper.exists()).toBe(true);
  });
});
