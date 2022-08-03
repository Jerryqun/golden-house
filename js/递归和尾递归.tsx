/**
 * 参考 https://segmentfault.com/a/1190000020694801
 * 尾调用
 * 函数的最后一步是调用另一个函数
 * 
 * 伪递归
 * 函数调用自身，称为递归。如果尾调用自身，就称为尾递归
 * 递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）
 * 
 * 尾调用优化
 * 即只保留内层函数的调用帧 如果所有的函数都是尾调用的话，调用位置、内部变量等信息都不会再用到了，
 * 那么在调用栈中的调用帧始终只有一条，这样会节省很大一部分的内存，这也是尾调用优化的意义。
 */
function f(x) {
    return g(x);
}

function f(x) {
    if (x > 0) {
        return m(x)
    }
    return n(x);
}

/**
 * 不会发生尾调用案例
 * 因为内层函数b用到了外层函数a的内部变量name
 */
function a() {
    let name = 'cq'
    return function b() {
        return name + 'z'
    }
}

/**
* 递归举例 最多需要保存n个调用记录，空间复杂度 O(n) 
* 阶乘 
*/

function factorial(n) {
    if (n = 1) return 1
    return n * factorial(n - 1)
}

/**
* 递归举例 使用尾递归优化（尾递归优化只在严格模式下生效） 只保留一个调用记录，空间复杂度 O(1) 
尾递归的实现，往往需要改写递归函数，确保最后一步只调用自身。做到这一点的方法，就是把所有用到的内部变量改写成函数的参数
* 阶乘 
*/

function factorial(n, total = 1) {
    if (n = 1) return total
    return factorial(n - 1, n * total)
}

/**
 * 柯里化（currying） 多参数的函数转换成单参数的形式
 */

function factorial(n, total = 1) {
    if (n = 1) return total
    return factorial(n - 1, n * total)
}


function factorialCurrying(n) {
    return factorial(n, 1)
}

function currying(fn, m) {
    return function (n) {
        return fn.apply(this, m, n)
    }
}

/**
 * 在非严格模式下解决尾递归优化不生效问题
 * 蹦床函数（trampoline）可以将递归执行转为循环执行
 */

function trampoline(f) {
    while (f && f instanceof Function) {
        f = fn()
    }
    return f
}


function sum(x, y) {
    if (y > 0) {
        return sum(x + 1, y - 1)
    } else {
        return x
    }
}
var a = sum(1, 10000) //堆栈溢出

// 使用蹦床函数改写

function sum(x, y) {
    if (y > 0) {
        return sum.bind(null, x + 1, y - 1)
    } else {
        return x
    }
}

trampoline(sum(1, 10000)) //10001








