解决跨平台，兼容性问题

1、合成事件的监听器是统一注册在document上的，且仅有冒泡阶段。所以原生事件的监听器响应总是比合成事件的监听器早
2、阻止原生事件的冒泡后，会阻止合成事件的监听器执行