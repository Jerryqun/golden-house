参考
https://juejin.cn/post/6844903689702866952


1、什么是csrf

CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。

1、受害者登录a.com，并保留了登录凭证（Cookie）。
2、攻击者引诱受害者访问了b.com。
3、b.com 向 a.com 发送了一个请求：a.com/act=xx。
4、a.com接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求。
5、a.com以受害者的名义执行了act=xx。
6、攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让a.com执行了自己定义的操作。

2、几种常见的攻击类型

a、GET类型的CSRF
 <img src="http://bank.example/withdraw?amount=10000&for=hacker" > 

b、POST类型的CSRF
 <form action="http://bank.example/withdraw" method=POST>
    <input type="hidden" name="account" value="xiaoming" />
    <input type="hidden" name="amount" value="10000" />
    <input type="hidden" name="for" value="hacker" />
</form>
<script> document.forms[0].submit(); </script> 

c、链接类型的CSRF
 <a href="http://test.com/csrf/withdraw.php?amount=1000&for=hacker" taget="_blank">
  重磅消息！！
  <a/>

3、CSRF的特点


攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生。
攻击利用受害者在被攻击网站的登录凭证，冒充受害者提交操作；而不是直接窃取数据。
整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”。
跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪。


4、如何防止csrf攻击
a、同源检测
使用Origin Header确定来源域名
Origin在以下两种情况下并不存在
1、IE11同源策略：
2、302重定向

使用Referer Header确定来源域名
攻击者可以在自己的请求中隐藏Referer。如果攻击者将自己的请求这样填写：
 <img src="http://bank.example/withdraw?amount=10000&for=hacker" referrerpolicy="no-referrer"> 
1.IE6、7下使用window.location.href=url进行界面的跳转，会丢失Referer。
2.IE6、7下使用window.open，也会缺失Referer。
3.HTTPS页面跳转到HTTP页面，所有浏览器Referer都丢失。
4.点击Flash上到达另外一个网站的时候，Referer的情况就比较杂乱，不太可信。

b、CSRF Token
1.将CSRF Token输出到页面中
2.页面提交的请求携带这个Token
3.服务器验证Token是否正确


c、双重Cookie验证
在用户访问网站页面时，向请求域名注入一个Cookie，内容为随机字符串（例如csrfcookie=v8g9e4ksfhw）。
在前端向后端发起请求时，取出Cookie，并添加到URL的参数中（接上例POST https://www.a.com/comment?csrfcookie=v8g9e4ksfhw）。
后端接口验证Cookie中的字段与URL参数中的字段是否一致，不一致则拒绝。







