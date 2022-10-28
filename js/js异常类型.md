
1、Error: 基本错误 其他的错误类型都继承自该类型 
Error 类型一般都是开发人员自己抛出的异常
try {
  throw new Error('ConardLi抛出的异常');
} catch (error) {
  console.log(error);
}


2、SyntaxError: 语法错误 (表示不符合编程语言的语法规范)
const = name

此类异常发生在 JavaScript 解析/编译时，此类异常一旦发生，导致整个js文件都无法执行，而其他异常发生在代码运行时，这一类的错误会导致在错误出现的那一行之后的代码无法执行，但在那一行之前的代码不会受到影响。


3、TypeError: 类型错误
const str = 'cq'
str()

4、ReferenceError: 引用错误
引用一个不存在的变量时发生的错误

5、RangeError: 边界错误
数组长度为负数或超长
数字类型的方法参数超出预定义范围
函数堆栈调用超过最大值

var a = [1]
a.length = -1

6、URIError: 在调用 URI 相关的方法中 URL 无效时抛出的异常，主要包括 encodeURI、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape(）几个函数

decodeURIComponent('%%')

7、自定义错误类型

class UnAuthError extends Error { }
 
class ParamError extends Error { }
 
function controller() {
  throw new UnAuthError();
}
