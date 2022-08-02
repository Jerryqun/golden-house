
1、fiber的概念

https://juejin.cn/post/7063321486135656479

1、React16启用了全新的架构，叫做Fiber 不直接渲染vdom，而是先转成fiber , 也就是vdom 树 => fiber 链表
2、链表结构可打断
3、16.8后基于fiber推出hooks
4、React 16 之前通过React.creatElement生成虚拟dom 然后递归虚拟dom树生成真实的dom(React.render)
5、fiber的三大过程

schedule、reconcile、commit

schedule： 空闲调度 (调度这fiber节点执行reconcile)

reconcile： vdom => fiberl  （并且还会准备好要用的 dom 节点、确定好是增、删、还是改，通过 schdule 的调度，最终把整个 vdom 树转成了 fiber 链表）

commit: 把 reconcile 产生的 fiber 链表一次性添加到 dom 中，因为 fiber 对应的节点提前创建好了、是增是删还是改也都知道了，所以，这一个阶段很快

2、fiber数据结构(链表)

3、双缓冲的原理

WIP树就是一个缓冲，它在Reconciliation 完毕后一次性提交给浏览器进行渲染。它可以减少内存分配和垃圾回收，WIP 的节点不完全是新的，比如某颗子树不需要变动，React会克隆复用旧树中的子树。
双缓存技术还有另外一个重要的场景就是异常的处理，比如当一个节点抛出异常，仍然可以继续沿用旧树的节点，避免整棵树挂掉。

。




