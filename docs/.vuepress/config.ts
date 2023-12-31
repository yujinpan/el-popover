import { defineConfig } from 'vuepress/config';

export default defineConfig({
  base: '/el-popover/',
  title: 'el-popover',
  description: 'el-popover is used internally.',
  head: [...getGAHead()],
  themeConfig: {
    repo: 'el-popover',
    lastUpdated: 'Last Updated',
    logo: '/logo.svg',
  },
  plugins: ['vuepress-plugin-component-demo' as any],
});

function getGAHead(): HeadTags {
  return process.env.NODE_ENV === 'production'
    ? [
        [
          'script',
          {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-S66MPLRFJZ',
          },
          '',
        ],
        [
          'script',
          {},
          `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-S66MPLRFJZ');
`,
        ],
      ]
    : [];
}
