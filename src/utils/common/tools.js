/**
 * @description:
 * @param {any} className
 * @param {start,center,end，nearest} block
 * @param {auto、instant,smooth} behavior
 * @return {viod}
 */
export function goBackTop(className = 'is-error', block = "center", behavior = "smooth") {
  let goBackTop = document.getElementsByClassName(className);
  goBackTop[0].scrollIntoView({
    // 滚动到指定节点
    // 值有start,center,end，nearest，当前显示在视图区域中间
    block: block,
    // 值有auto、instant,smooth，缓动动画（当前是慢速的）
    behavior: behavior
  });
}