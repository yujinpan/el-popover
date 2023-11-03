el-popover is used internally.

## Usage

```shell
npm i --save el-popover
```

```ts
import ElementUI from 'element-ui';
import ElPopover from 'el-popover';

Vue.use(ElementUI);
// Override registered ElPopover.
Vue.use(ElPopover);
```

<demo name="el-popover" />

## Why

Do not change the original structure.

```vue
<template>
  <button>test button 1</button>
  <button>
    test button 2
    <ElPopover>test popover</ElPopover>
  </button>
</template>
```

It will additionally generate multiple dom levels.

```vue
<template>
  <button>test button 1</button>
  <ElPopover>
    test popover
    <button slot="reference">test button 2</button>
  </ElPopover>
</template>
```

## Options

Forward [ElPopover](https://element.eleme.cn/#/zh-CN/component/popover#attributes) all props/events/attrs.