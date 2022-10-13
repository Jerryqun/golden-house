参考链接：
https://zhuanlan.zhihu.com/p/25184390
https://www.ruanyifeng.com/blog/2018/07/web-worker.html

Web Worker 提供的多线程编程能力并不像我们传统意义上的多线程编程，它不像其他的多线程语言(Java、C++ 等)，主程序线程和 Worker 线程之间，Worker 线程之间，不会共享任何作用域或资源，他们间唯一的通信方式就是一个基于事件监听机制的 message

Web Worker并不意味着 JavaScript 语言本身就支持了多线程，对于 JavaScript 语言本身它仍是运行在单线程上的， Web Worker 只是浏览器（宿主环境）提供的一个能力／API。


在 Worker 线程的运行环境中没有 window 全局对象，也无法访问 DOM 对象，所以一般来说他只能来执行纯 JavaScript 的计算操作。

但是，他还是可以获取到部分浏览器提供的 API 的：

1、`setTimeout()， clearTimeout()， setInterval()， clearInterval()`：有了设计个函数，就可以在 Worker 线程中执行定时操作了；
2、`XMLHttpRequest` 对象：意味着我们可以在 Worker 线程中执行 **ajax** 请求；
3、`navigator` 对象：可以获取到 ppName，appVersion，platform，userAgent 等信息；
4、`location` 对象（只读）：可以获取到有关当前 URL 的信息；


Web Worker 的实现为前端程序带来了后台计算的能力，可以实现主 UI 线程与复杂计运算线程的分离，从而极大减轻了因计算量大而造成 UI 阻塞而出现的界面渲染卡、掉帧的情况，并且更大程度地利用了终端硬件的性能；

同时把程序之间的任务更清晰、条理化；

其主要应用有几个场景：

1、对于图像、视频、音频的解析处理；
2、canvas 中的图像计算处理；
3、大量的 ajax 请求或者网络服务轮询；
4、大量数据的计算处理（排序、检索、过滤、分析...）


使用
实例化运行一个 Worker 很简单，我们只需要 `new` 一个 `Worker` 全局对象即可：`new Worker(filepathname)`， 接受一个 filepathname String 参数，用于指定 Worker 脚本文件的路径；

// main.js (它所加载的脚本，必须来自网络)
var worker = new Worker('./worker.js');

数据通信
当实例运行了一个 Worker 线程之后，两个线程是运行在完全独立的环境中，他们之间的通信是通过基于事件监听机制的 message 来实现的，`new Worker()` 之后会返回一个实例对象，它包含一个 `postMessage ` 方法，可以通过调用这个方法来给 Worker 线程传递信息；同时我们可以给这个对象监听事件，这样，就能在 Worker 中触发事件通信的时候接收到数据了；具体实现：

// main.js
var worker = new Worker('./worker.js');
// 监听事件
worker.addEventListener('message', function (e) {
  console.log('MAIN: ', 'RECEIVE', e.data);
});
// 或者可以使用 onMessage 来监听事件：
// worker.onmessage = function () {
//  console.log('MAIN: ', 'RECEIVE', e.data);
//};
// 触发事件，传递信息给 Worker
worker.postMessage('Hello Worker, I am main.js');

在 Worker 的脚本中，我们可以调用全局函数 `postMessage` 和给全局的 `onmessage` 赋值来发送和监听数据和事件
// worker.js
console.log('WORKER TASK: ', 'running');
// 监听事件
onmessage = function (e) {
  console.log('WORKER TASK: ', 'RECEIVE', e.data);
  // 发送数据事件
  postMessage('Hello, I am Worker');
}
// 或者使用 addEventListener 来监听事件
//addEventListener('message', function (e) {
//  console.log('WORKER TASK: ', 'RECEIVE', e.data);
//  ...
//});

当然，这里传递的是一个 String 类型的数据，实际上，它支持 JavaScript 中所有类型的数据传递，可以传递一个 Object 数据；然而，值得注意的是，这里的数据传递（主要是 Object 类型）并不是共享，而是复制，发送端的数据和接收端的数据是复制而来，并不指向同一个对象，并且，这里的复制不是简单的便利拷贝，而是通过两端的序列化/解序列化来实现的，一般来说浏览器会通过 JSON 编码/解码；当然，这里的更多细节部分会由浏览器来处理，我们并不需要关系，只需要明白两端的数据是复制而来，互相独立的。

终止 worker
var worker = new Worker('./worker.js');
worker.terminate();





