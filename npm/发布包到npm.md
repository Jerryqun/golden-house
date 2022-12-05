1、终端登录npm
打开终端输入指令（发布包需要在包的根目录打开终端）

npm login

然后依次输入账号，密码，邮箱，其中密码输入时不会显示已输入的字符。

输入完成之后npm会发一个验证码 ，输入验证码完成登录

登录完成后输入指令

2、npm publish

完成发布，发布完成之后登录npm官网即可查询发布的包

3、删除发布的包
发布的包经过72个小时就无法进行删除所以请及时删除用来测试的包

终端登录npm以后输入指令

npm deprecate 包名 备注


发布 NPM 包时，遭遇 You should bug the author to publish it (or use the name yourself!) 怎么办?
经过查询后发现，是因为我之前使用的 Login Token 失效了，在这种情况下，只需要重新执行npm adduser添加用户，即可解决问题。

解决npm public提示403 Forbidden - PUT https://registry.npmjs.org/js-toolkit - You do not have permission
包名冲突  换名字

