/**
概念：可以访问外部作用域的内部函数，即使这个外部作用域已经执行结束（闭包就是那些引用了外部作用域中变量的函数）
举例

https://juejin.cn/post/6844903769646317576
 */

(function autorun() {
  let x = 1;
  function log() {
    console.log(x);
  }
  log();
})();

// 闭包只存储外部变量的引用，而不会拷贝这些外部变量的值。

function initEvents() {
  for (var i = 1; i <= 3; i++) {
    $("#btn" + i).click(function showNumber() {
      alert(i); //4
    });
  }
}
initEvents();

function initEvents() {
  for (let i = 1; i <= 3; i++) {
    $("#btn" + i).click(function showNumber() {
      alert(i); //1 2 3
    });
  }
}
initEvents();
