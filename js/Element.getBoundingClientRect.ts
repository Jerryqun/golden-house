/**
  https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
 */

/**
 * 图片懒加载
 */

const imgs = document.querySelectorAll("img[data-src]");
const config = {
  rootMargin: "0px",
  threshold: 0,
};
let observer = new IntersectionObserver((entries, self) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let img = entry.target;
      let src = img.dataset.src;
      if (src) {
        img.src = src;
        img.removeAttribute("data-src");
      }
      // 解除观察
      self.unobserve(entry.target);
    }
  });
}, config);

imgs.forEach((image) => {
  observer.observe(image);
});
