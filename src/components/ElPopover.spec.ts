import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';

import ElPopover from './ElPopover.vue';

describe('ElPopover', () => {
  it('mounted success', () => {
    const wrapper = mount(ElPopover);
    expect(wrapper.exists()).toBe(true);
  });
});
