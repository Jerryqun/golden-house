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

window.a = "window";

let target = {
  a: "target",
};

let test = {
  a: "objtest",
  fn: function (params) {
    console.log("params", params);
    console.log("a", this.a);
    return { a };
  },
};

/**手写call */

Function.prototype.my_call = function (context = window, ...args) {
  if (this === Function.prototype) {
    return undefined; // 用于防止 Function.prototype.my_call() 直接调用
  }
  const fn = Symbol;
  context[fn] = this;
  const res = context.fn(...args);
  delete context[fn];
  return res;
};

test.fn.my_call(target, 1, 2, 3);

/**手写apply */

Function.prototype.my_apply = function (context = window, args) {
  if (this === Function.prototype) {
    return undefined; // 用于防止 Function.prototype.my_apply() 直接调用
  }
  const fn = Symbol;
  let res;
  context[fn] = this;

  if (Array.isArray(args)) {
    res = context[fn](...args);
  } else {
    res = context[fn]();
  }
  delete context[fn];
  return res;
};

test.fn.my_apply(target, [1, 2, 3]);
// apply 参数妙用 可以使push unshift传数组
let a = [1, 2, 3];
let b = [4, 5, 6];
Array.prototype.unshift.my_apply(a, b);

/**手写bind */

Function.prototype.my_bind = function (context, ...args1) {
  if (this === Function.prototype) {
    throw new TypeError("Error");
  }
  const _this = this;
  return function fn(...args2) {
    // 判断是否用于构造函数
    if (this instanceof fn) {
      return new _this(...args1, ...args2);
    }
    return _this.apply(context, args1.concat(args2));
  };
};
