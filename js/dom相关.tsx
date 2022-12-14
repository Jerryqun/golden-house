/**
 * 元素的实际高度
 * document.getElementById("div").offsetHeight
 * 元素的实际宽度
 * document.getElementById("div").offsetWidth
 * 元素距离左边的距离
 * document.getElementById("div").offsetLeft
 * 元素距离上边的距离
 * document.getElementById("div").offsetTop
 */

/**
 * Element.getBoundingClientRect() 方法返回一个 DOMRect 对象，其提供了元素的大小及其相对于视口的位置。
 */

/**
 * 案例图片懒加载
 */

function lazyload() {
  let viewHeight = document.body.clientHeight; //获取可视区高度
  let imgs = document.querySelectorAll("img[data-src]");
  imgs.forEach((item, index) => {
    if (item.dataset.src === "") return;

    // 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
    let rect = item.getBoundingClientRect();
    if (rect.bottom >= 0 && rect.top < viewHeight) {
      item.src = item.dataset.src;
      item.removeAttribute("data-src");
    }
  });
}

// 可以使用节流优化一下
window.addEventListener("scroll", lazyload);
