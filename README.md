# ElPopover

el-popover/el-popconfirm/el-dropdown is used internally & lazy load.

## Why

- **Do not change the original structure**

```vue
<template>
  <button>test button 1</button>
  <button>
    test button 2
    <ElPopover>test popover</ElPopover> // [!code ++]
  </button>
</template>
```

> It will additionally generate multiple dom levels.

```vue
<template>
  <button>test button 1</button>
  <!-- Struct Blocked -->
  <ElPopover>
    test popover
    <button slot="reference">test button 2</button>
  </ElPopover>
</template>
```

- **Render when triggered**

```vue
<template>
  <button>
    test button
    <ElPopover>test popover</ElPopover> // [!code ++]
  </button>
</template>
```

Result:

```html
<button>
  test button
  <!-- will be show when click -->
</button>
```

## Usage

```shell
npm i --save el-popover
```

```ts
import ElementUI from "element-ui";
import {
  ElPopover,
  ElPopconfirm,
  ElDropdown,
  ElDropdownMenu,
} from "el-popover";

Vue.use(ElementUI);
// Override registered ElPopover.
Vue.use(ElPopover);
Vue.use(ElPopconfirm);
Vue.use(ElDropdown);
Vue.use(ElDropdownMenu);
```

<demo name="el-popover" />

> You need to add `root` prop to let Popover append to component root element.

## Options

Forward [ElPopover](https://element.eleme.cn/#/zh-CN/component/popover#attributes) all props/events/attrs.

### Owner Props

| Name | Type    | Description                                               |
| ---- | ------- | --------------------------------------------------------- |
| root | boolean | append to component root, default false to parent element |
