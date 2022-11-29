1、src会阻碍其他资源的加载 href不会
2、src会替换元素本身的内容 href不会
// test.js
console.log(2)

<script src="./test.js">
    console.log(1)
</script>

打印的是2

原因就是test.js的代码嵌入到了当前script元素中，导致原本的内容被替换。

3、href ：a  link；src：script img iframe video

4、src代表的是网站的一部分，没有会对网站的使用造成影响
href代表网站的附属资源，没有不会对网站的核心逻辑和结构造成影响

