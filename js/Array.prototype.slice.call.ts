/**
 * https://juejin.cn/post/6844903550342938637
 *
 * Array.prototype.slice.call 是把类数组转成数组
 */

function test(a, b, c, d) {
  var arg = Array.prototype.slice.call(arguments, 0);
  console.log(arg);
}
test("a", "b", "c", "d"); //a,b,c,d
