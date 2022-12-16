https://fe.ecool.fun/topic/d76e76c3-7400-4c6e-958a-b5f00916d47d?orderBy=updateTime&order=desc&tagId=12

DNS优化
在介绍dns-prefetch之前，先要提下当前对于DNS优化主流方法。

一般来说，一次DNS解析需要耗费 20-120ms，所以为了优化DNS，我们可以考虑两个方向：

1、减少DNS请求次数
2、缩短DNS解析时间dns-prefetch

什么是dns-prefetch

dns-prefetch(DNS预获取)是前端网络性能优化的一种措施。它根据浏览器定义的规则，提前解析之后可能会用到的域名，使解析结果缓存到系统缓存中，缩短DNS解析时间，进而提高网站的访问速度。

为什么要用dns-prefetch

每当浏览器从（第三方）服务器发送一次请求时，都要先通过DNS解析将该跨域域名解析为 IP地址，然后浏览器才能发出请求。
如果某一时间内，有多个请求都发送给同一个服务器，那么DNS解析会多次并且重复触发。这样会导致整体的网页加载有延迟的情况。
我们知道，虽然DNS解析占用不了多大带宽，但是它会产生很高的延迟，尤其是对于移动网络会更为明显。
因此，为了减少DNS解析产生的延迟，我们可以通过dns-prefetch预解析技术有效地缩短DNS解析时间

<link rel="dns-prefetch" href="https://baidu.com/"> 

dns-prefetch缺点
dns-prefetch最大的缺点就是使用它太多。

过多的预获取会导致过量的DNS解析，对网络是一种负担。

注意事项

dns-prefetch 仅对跨域域上的 DNS查找有效，因此请避免使用它来指向相同域。这是因为，到浏览器看到提示时，您站点域背后的IP已经被解析。

除了link 还可以通过使用 HTTP链接字段将 dns-prefetch（以及其他资源提示）指定为 HTTP标头：

Link: <https://fonts.gstatic.com/>; rel=dns-prefetch



