import { Popconfirm } from 'element-ui';

import ElPopover from './ElPopover';

const ElPopconfirm: typeof Popconfirm = {
  ...Popconfirm,
  components: {
    ...Popconfirm.components,
    ElPopover,
  },
} as any;

export default ElPopconfirm;
