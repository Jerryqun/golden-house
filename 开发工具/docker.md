1、docker 
我们先回想下搭建服务的过程，无论是搭建后端服务，还是爬虫等，我们首先得在本机上配置语言相关的环境，如编译器，变量环境等等，有时候还得下载对应的数据库。反正就是需要一系列的环境准备，经常配置个老半天的还可能被某个步骤卡住了。
在本机开发完成，需要部署线上环境的时候，往往又得跑一遍相同环境配置，因为计算机环境不同，配置也并不会一帆风顺。明明在我本机上这样可行的，但是在他人机器上却不行了。
所以 docker 的出现就是为了解决服务迁移过程中的这种不确定性，既然环境不同会引起一系列差异问题出现，那我干脆连环境一起迁移好了。
类似于虚拟机，docker 也是提供一份隔离环境，叫做容器。但是相比于虚拟机而已，它却非常的节约资源，高效。

2、镜像
镜像是指 （服务 + 环境）的集合，也可以比作语言中的类，比如在将本机配置好的环境和服务打包成镜像，有了镜像，别人就可以生产一模一样的环境和服务，不需要再处理计算机环境的差异。




