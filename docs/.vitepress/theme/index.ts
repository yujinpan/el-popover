import { Button } from 'element-ui';
import DefaultTheme from 'vitepress/theme';
import { enhanceApp } from 'vitepress-plugin-component-demo';

import type { Theme } from 'vitepress';

import { ElPopconfirm, ElPopover } from '@/index';
import '@/style.css';
import 'element-ui/lib/theme-chalk/button.css';

export default {
  extends: DefaultTheme,
  async enhanceApp(context) {
    enhanceApp(context);

    context.app.use(Button);
    context.app.use(ElPopconfirm);
    context.app.use(ElPopover);
  },
} as Theme;

