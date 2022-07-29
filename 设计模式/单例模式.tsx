/**
 * 1、类只能new出一个对象
 * 2、对象可全局访问
 */

/**
 * 第一种普通版本
 */

let instance = null
function getSingleInstance(fn) {
    if (!instance) {
        return this
    }
    return instance
}

const ins1 = new getSingleInstance()
const ins2 = new getSingleInstance()

ins1 === ins2  // true

/**
 * 第二种惰性版本 （单例模式调用的时候才会生成实例）
 */

const getSingle = function (fn) {
    let result
    return function () {
        return result || (result = fn.apply(this, arguments))
    }
}
/**
 * 弹框demo 使用惰性版本
 */

const createModal = function (message) {
    const box = document.createElement('div')
    box.innerHTML = message
    box.className = 'box'
    document.body.appendChild(box)
    return box
}

const createAlertMessaeg = CreateSingleV1(createModal)

modalAlert.onclick = function (params) {
    const alertMessaeg = createAlertMessaeg('独孤九剑yyds')
}

/**
 * 第三种闭包实现(单一职责)
 */

 var Singleton = function(name) {
    this.name = name;
};

Singleton.prototype.getName = function() {
    alert(this.name);
};

Singleton.getInstance = (function(name) {
    var instance;
    return function(name){
        if (!instance) {
            instance = new Singleton(name);
        }
        return instance;
    }
})();

var a = Singleton.getInstance('ConardLi');
var b = Singleton.getInstance('ConardLi2');

console.log(a===b);   //true





