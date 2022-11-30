1、>(大于号) 子元素选择器
>大于号的意思是 选择某元素后面的第一代子元素
<style type="text/css">
	h1>strong {
		color: red;
	}
</style>
<body>
	<h1>
		<strong>一代子元素</strong>
	</h1>
	<h1>
		<span>
			<strong>二代子元素</strong>
		</span>
	</h1>
</body>

2、~（波浪号） 
~波浪号的意思是 选取 某个元素之后的所有相同元素

.box~h2 这句就是 选取 .box 后面所有的 h2

这个选择器 两种元素必须处于同一个父元素内，被选取的元素不必直接紧随。

<style type="text/css">
	.box~h2{
		background: aqua;
	}
</style>
 
<body>
	<h2>1</h2>
	<div class="box"></div>
	<em>2</em>
	<h2>3</h2>
	<h2>4</h2>
</body>
上面例子 34背景色生效

3、（空格） 派生选择器

选择某元素后面的所有子元素
派生选择器允许你根据文档的上下文关系来确定某个标签的样式

<style type="text/css">
	h1 strong {
		color: red;
	}
</style>
 
<body>
	<h1>
		<strong>一代子元素</strong>
	</h1>
	<h1>
		<span>
			<strong>二代子元素</strong>
		</span>
	</h1>
</body>
一代和二代子元素都会被赋予color: red;

4、,（逗号）群组选择器
可以对选择器进行分组，被分组的选择器就可以分享相同的声明
<style type="text/css">
	h1,h2,h3{
		color: blue;
	}
	h4,h5,h6{
		color: red;
	}
</style>
 
<body>
	<h1>案例1</h1>
	<h2>案例1</h2>
	<h3>案例1</h3>
 
	<h4>案例2</h4>
	<h5>案例2</h5>
	<h6>案例2</h6>
</body>

5、+（加号）相邻兄弟选择器
可选择紧接在另一元素后的元素，且二者有相同父元素
<style type="text/css">
	span+em{
		color: red;
	}
</style>
 
<body>
	<h1>
		<span>案例1</span>
		<em>案例2</em>
		<em>案例3</em>
	</h1>
</body>
only 案例2 add color: red;