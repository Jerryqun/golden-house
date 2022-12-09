/**
 * 1、any 和 unknown 都是顶级类型，但是 unknown 更加严格，不像 any 那样不做类型检查
 */

/**
 * 2、反而 unknown 因为未知性质，不允许访问属性，不允许赋值给其他有明确类型的变量
 */

let a: unknown = { a: 1 };
a.a; //   Error unknown无法提供属性访问
let b: string = "1";
b = a; // Error 不能将类型“unknown”分配给类型“string”。
