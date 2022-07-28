/**
 * https://juejin.cn/post/6844903496253177863
 * 
 * es5 中this 永远指向最后调用它的那个对象
 * es6 中箭头函数的 this 始终指向函数定义时的 this，而非执行时
 * 怎么改变 this 的指向
 * 1、使用 ES6 的箭头函数
 * 2、在函数内部使用 _this = this
 * 3、使用 apply、call、bind
 * 4、new 实例化一个对象
 */