<template>
  <div>
    <button>
      ElPopover with html element
      <ElPopover>Content</ElPopover>
    </button>
    <el-button>
      ElPopover with el-button
      <ElPopover root>Content</ElPopover>
    </el-button>
    <hr />
    <button>
      ElPopconfirm with html element
      <ElPopconfirm title="Title">Content</ElPopconfirm>
    </button>
    <el-button>
      ElPopconfirm with el-button
      <ElPopconfirm title="Title" root>Content</ElPopconfirm>
    </el-button>
    <hr />
    <el-button>
      without <code>root</code> property
      <ElPopover>Content</ElPopover>
    </el-button>
    <hr />
    <button>
      ElDropdown with html element
      <ElDropdown>
        <ElDropdownMenu>
          <ElDropdownItem>Menu 1</ElDropdownItem>
          <ElDropdownItem>Menu 2</ElDropdownItem>
        </ElDropdownMenu>
      </ElDropdown>
    </button>
    <el-button>
      ElDropdown with el-button
      <ElDropdown root>
        <ElDropdownMenu>
          <ElDropdownItem>Menu 1</ElDropdownItem>
          <ElDropdownItem>Menu 2</ElDropdownItem>
        </ElDropdownMenu>
      </ElDropdown>
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
button {
  font-size: 16px;
  + button {
    margin-left: 10px;
  }
}
</style>
