参考： https://blog.csdn.net/zz_jesse/article/details/102815299

从继承的角度来说Element继承自Node,具有node的方法，同时扩展了很多自己的独有的方法。

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      body {
        margin: 0;
      }
      .box {
        width: 400px;
        background: red;
      }
      img {
        width: 50%;
        /* vertical-align: bottom; */ /*解决图片底部的间隙*/
      }
    </style>
  </head>
  <body>
    <div class="box">
      <img
        src="https://img.alicdn.com/imgextra/i1/O1CN01E9EvIo1DtziMJCHCF_!!6000000000275-2-tps-359-197.png"
      />
      <img
        src="https://img.alicdn.com/imgextra/i1/O1CN01E9EvIo1DtziMJCHCF_!!6000000000275-2-tps-359-197.png"
      />
      <img
        src="https://img.alicdn.com/imgextra/i1/O1CN01E9EvIo1DtziMJCHCF_!!6000000000275-2-tps-359-197.png"
      />
    </div>
  </body>
</html>


展示的结果与我们期望不一样  
img垂直显示了
这是什么原因呢？我们都知道 img标签默认是内联元素，除非剩余宽度不足才会换行，代码中我们都设置成为50%,宽度也没有超出呀。

这是因为html中标签后的每个换行也会被当做是一个节点，会进行渲染，也会占用空间，这个节点就是text节点，他不像标签那么形象，可以有具体的表示，他就是换行和空字符串的组合。

document.getElementsByClassName('box')[0].children //拿到的是img, 没有我们所说的 text节点。
ParentNode.children 是一个只读属性，返回 一个Node的子elements ，是一个动态更新的 HTMLCollection。

document.getElementsByClassName('box')[0].childNodes 这样得到了text node，但是同时也把 img返回了。

回到题中，我们让 text node显示出来。
给所有的 text node 设置文本
document.getElementsByClassName('box')[0].childNodes.forEach(item=>{
item.nodeType===3?item.appendData('text node'):null
})


解决方案
1、最直接的手段就是删除掉 text node。
2、 .box{
        font-size:0
    }

参考： http://t.zoukankan.com/QianBoy-p-8424317.html
因为图片底部是相对于基线对齐的，所以图片下面还留出一些空间，要解决这个问题，方法很多：

1、设置图片的 vertical-align: bottom;（将图像底部与行框底部对齐，行框底部就是这一行的最底部）
2、对图片使用 float（float的定义是元素紧挨元素，所以不会出现缝隙）
3、指定图片的 display: block; (垂直文本对齐属性 vertical-align 只适用于行内或者替换元素，display改变了元素的显示，实际上并不是只有block才会这样，只要不是带有inline的都不会出现缝隙，这样做的目的就是使图像成为块级元素，这样图像就不会生成行框，也就不会是相对于基线对齐，所以也不会有基线下面的缝隙)(《CSS 权威指南》第三版第203页)
指定父元素 font-size: 0; （实际上font-size并不是你看到的字体大小，而是用于设置字体的em框，它指定了如果没有额外行间距的情况下，字体基线间的距离）
4、指定父元素 line-height: 0; (line-height 指定了基线之间的最小距离，font-size是指定没有额外行间距时的基线距离，此处的额外行间距就是line-height来指定)






