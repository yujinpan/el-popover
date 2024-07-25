import type { VNode } from 'vue';
import type Vue from 'vue';

export function findValidElem(el: Element): Element {
  return el.tagName ? el : findValidElem(el.parentElement as Element);
}

export function isComponentElem(el: Element): boolean {
  const component = findComponent(el);
  return component ? !isComponentSlots(el, component) : false;
}

export function findComponent(el: Element & { __vue__?: any }): any {
  if (el?.__vue__) {
    return el.__vue__;
  } else if (el?.parentElement) {
    return findComponent(el.parentElement);
  }
}

function isComponentSlots(el: Element, component: Vue): boolean {
  const some = (vnode: VNode): boolean => {
    if (vnode?.elm === el) {
      return true;
    } else if (vnode?.children) {
      return vnode?.children.some((item: any) => some(item));
    }
    return false;
  };
  return !!component?.$vnode?.componentOptions?.children?.some((item: any) =>
    some(item),
  );
}
