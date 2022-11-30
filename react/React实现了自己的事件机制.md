1、问什么react会自己实现一套事件机制
a、将事件都代理到了根节点上，减少了事件监听器的创建，节省了内存
b、磨平浏览器差异，开发者无需兼容多种浏览器写法。如想阻止事件传播时需要编写event.stopPropagation() 或 event.cancelBubble = true，在React中只需编写event.stopPropagation()即可
c、对开发者友好。只需在对应的节点上编写如onClick、onClickCapture等代码即可完成click事件在该节点上冒泡节点、捕获阶段的监听，统一了写法。


React 事件的命名采用小驼峰式（camelCase），而不是纯小写。以click事件为例，冒泡阶段用onClick，捕获阶段用onClickCapture。