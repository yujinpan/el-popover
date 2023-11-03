<script lang="ts">
import { Popover } from 'element-ui';
import { defineComponent } from 'vue-component-pluggable';

export default defineComponent({
  name: 'ElPopover',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  props: Popover['props'],
  data() {
    return {
      parentElement: null as HTMLElement | null,
    };
  },
  render(h) {
    if (!this.parentElement) return undefined;

    return h(Popover, {
      props: {
        ...this.$props,
        reference: this.$props.reference || this.parentElement,
      },
      attrs: this.$attrs,
      on: this.$listeners,
      scopedSlots: this.$scopedSlots,
      staticStyle: {
        display: 'none',
      },
    });
  },
  mounted() {
    this.parentElement = this.$el?.parentElement;
  },
});
</script>
