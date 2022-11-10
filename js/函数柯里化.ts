/**
 * 函数柯里化指的是将能够接收多个参数的函数转化为接收单一参数的函数，并且返回接收余下参数且返回结果的新函数的技术。
 */

function curry() {
  let args = Array.prototype.slice.call(arguments);
  const fn = function () {
    return curry.apply(
      this,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };
  fn.getResult = function () {
    return args;
  };
  return fn;
}

curry(1)(2)(3).getResult(); //  [1,2,3]
