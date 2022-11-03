https://juejin.cn/post/7078924628525056007

1、去package.json 的script 中找到对应的命令 并执行
2、直接执行xxx会报错，因为操作系统中没有存在xxx这一条指令
3、运行 npm run xxx的时候，npm 会先在当前目录的 node_modules/.bin 查找要执行的程序，如果找到则运行；
没有找到则从全局的 node_modules/.bin 中查找，
npm i -g xxx就是安装到到全局目录；
如果全局目录还是没找到，那么就从 path 环境变量中查找有没有其他同名的可执行程序。

