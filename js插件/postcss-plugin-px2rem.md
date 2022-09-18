postcss-px2rem不能转换js设置的px和内联样式

解决办法：
1.对于已知的样式，写成动态class形式
2.未知的样式，可以采用px/htmlSize的形式换算成rem
const htmlSize = document.documentElement.style.fontSize.replace("px", "");
dom.style.width = `${px/Number(htmlSize)}rem`

