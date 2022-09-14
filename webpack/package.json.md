版本说明

固定版本: 比如5.38.1，安装时只安装指定版本。
波浪号: 比如~5.38.1, 表示安装5.38.x的最新版本（不低于5.38.1），但是不安装5.39.x，也就是说安装时不改变大版本号和次要版本号。
插入号: 比如ˆ5.38.1, ，表示安装5.x.x的最新版本（不低于5.38.1），但是不安装6.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
latest: 安装最新版本。


限制模块只能在某种架构的cpu下运行
"cpu" : [ "x64", "ia32" ]


可以指定你的模块只能在哪个操作系统上运行
"os" : [ "darwin", "linux", "win32" ]

engines字段指明了该模块运行的平台，比如Node或者npm的某个版本或者浏览器。
{ "engines" : { "node" : ">=0.10.3 <0.12", "npm" : "~1.0.20" } }