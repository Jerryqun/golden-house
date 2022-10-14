属性 width:100%；使用情况主要有以下几种。
1、子元素必须是块级元素才能实现宽度的继承
2、父级元素设置了宽度

当父级元素和子元素只是一般嵌套关系的时候，子元素继承父元素的宽。
当子元素浮动时，也可以完整的继承父元素的宽。
当子元素为position: absolute;的时候，这个时候子元素会逐级向上寻找是否有position: relative;的元素。如果有，则继承该元素；如果没有则宽度是相对于body而言。
当子元素为position: relative;时，width:100%是基于父级元素，而不是找position: relative;的元素
--------特殊--------当元素被设置了postion: fixed的时候，是一直基于body的，其宽度就是body的宽度
补充一点：不论box-sizing设置为border-box还是content-box,width继承的都是‘父’级元素的内容区的宽度

