/**
 * 节流 
 */

const debounce = (fn, timer) => {
    return function (...args) {
        clearTimeout(fn.id)
        fn.id = setTimeout(() => {
            fn.apply(this, args);
        }, timer);
    }
}

/**
* 防抖 第一次事件肯定触发，最后一次不会触发
*/

const throttle = (fn, timer) => {
    let pre = 0;
    return function (...args) {
        if (Date.now() - pre > timer) {
            pre = Date.now()
            fn.apply(this, args);
        }
    }
}