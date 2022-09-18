https://juejin.cn/post/6844903495108132877

BFC
块级格式化上下文
用于决定块盒子的布局及浮动相互影响范围的一个区域。
一个BFC包含创建该上下文元素的所有子元素，但不包括创建了新BFC的子元素的内部元素
一个元素不能同时存在于两个BFC中。


块盒（block box）
当元素的CSS属性display为block，list-item或 table时，它是块级元素 block-level；


行内盒（inline box）
当元素的CSS属性display的计算值为inline，inline-block或inline-table时，称它为行内级元素；


三个定位方案
1、常规流（当position为static或relative，并且float为none时会触发常规流）
2、浮动（它位于当前行的开头或末尾；这导致常规流环绕在它的周边，除非设置 clear 属性；）
3、绝对定位（如果元素的属性position为absolute或fixed，它是绝对定位元素，对于position: absolute，元素定位将相对于最近的一个relative、fixed或absolute的父元素，如果没有则相对于body

BFC的创建方法
1、浮动
2、绝对定位元素
3、行内块inline-blocks
4、表格单元格
5、overflow的值不为visible的元素
6、弹性盒 flex boxes (元素的display: flex或inline-flex)；

BFC的效果
1、内部的盒会在垂直方向一个接一个排列（可以看作BFC中有一个的常规流）；
2、处于同一个BFC中的元素相互影响，可能会发生margin collapse；
3、BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然；
4、计算BFC的高度时，考虑BFC所包含的所有元素，连浮动元素也参与计算；
5、每个元素的margin box的左边，与容器块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此；
6、浮动盒区域不叠加到BFC上；

这么多性质有点难以理解，但可以作如下推理来帮助理解：html的根元素就是<html>，而根元素会创建一个BFC，创建一个新的BFC时就相当于在这个元素内部创建一个新的<html>，子元素的定位就如同在一个新<html>页面中那样，而这个新旧html页面之间时不会相互影响的。
上述这个理解并不是最准确的理解，甚至是将因果倒置了（因为html是根元素，因此才会有BFC的特性，而不是BFC有html的特性），但这样的推理可以帮助理解BFC这个概念。



