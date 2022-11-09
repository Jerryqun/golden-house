https://lotabout.me/2019/Things-about-keepalive/


HTTP keep-alive 也称为 HTTP 长连接。它通过重用一个 TCP 连接来发送/接收多个 HTTP请求，来减少创建/关闭多个 TCP 连接的开销

keep-alive 是客户端和服务端的一个约定，如果开启 keep-alive，则服务端在返回 response 后不关闭 TCP 连接；同样的，在接收完响应报文后，客户端也不关闭连接，发送下一个 HTTP 请求时会重用该连接

在 HTTP/1.0 协议中，如果请求头中包含：


Connection: keep-alive

客户端浏览器一般都是默认开启




