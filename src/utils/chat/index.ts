/**
 * 滚动到底部的函数
 * @param smooth 是否关闭滑动效果 - 默认false
 */
export function scrollTargetElement(el: HTMLElement, smooth: boolean = false) {
  queueMicrotask(() => {
    const last_child = el.children[el.children.length - 1];
    last_child.scrollIntoView({
      behavior: smooth ? "smooth" : "instant"
    });
  });
}
