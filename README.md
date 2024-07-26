# ElPopover

el-popover/el-popconfirm/el-dropdown is used internally.

## Why

Do not change the original structure.

```vue
<template>
  <button>test button 1</button>
  <button>
    test button 2
    <ElPopover>test popover</ElPopover> // [!code ++]
  </button>
</template>
```

It will additionally generate multiple dom levels.

```vue
<template>
  <button>test button 1</button>
  <ElPopover>
    // [!code --] test popover
    <button slot="reference">test button 2</button>
  </ElPopover>
  // [!code --]
</template>
```

## Usage

```shell
npm i --save el-popover
```

```ts
import ElementUI from "element-ui";
import { ElPopover, ElPopconfirm } from "el-popover";

Vue.use(ElementUI);
// Override registered ElPopover.
Vue.use(ElPopover);
Vue.use(ElPopconfirm);
```

<demo name="el-popover" />

> You need to add `root` prop to let Popover append to component root element.

## Options

Forward [ElPopover](https://element.eleme.cn/#/zh-CN/component/popover#attributes) all props/events/attrs.

### Owner Props

| Name | Type    | Description                                               |
| ---- | ------- | --------------------------------------------------------- |
| root | boolean | append to component root, default false to parent element |
