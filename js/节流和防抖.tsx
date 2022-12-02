/**
 * 防抖
 */

const debounce = (fn, timer) => {
  return function (...args) {
    clearTimeout(fn.id);
    fn.id = setTimeout(() => {
      fn.apply(this, args);
    }, timer);
  };
};

/**
 * 节流 第一次事件肯定触发，最后一次不会触发
 */

const throttle = (fn, timer) => {
  let pre = 0;
  return function (...args) {
    if (Date.now() - pre > timer) {
      pre = Date.now();
      fn.apply(this, args);
    }
  };
};

/**
 * 节流 定时器模式 第一次事件不会触发，最后一次一定触发
 */

const throttle = (fn, timer) => {
  let t = null;
  return function (...args) {
    if (!t) {
      t = setTimeout(() => {
        t = null;
        fn.apply(this, args);
      }, timer);
    }
  };
};

/**
 * 结合版 第一次和最后一次都要执行
 */

const throttle = (fn, timer) => {
  let pre = 0,
    t = null;
  return function (...args) {
    if (Date.now() - pre > timer) {
      clearTimeout(t);
      t = null;
      pre = Date.now();
      fn.apply(this, args);
    } else if (!t) {
      t = setTimeout(() => {
        fn.apply(this, args);
      }, timer);
    }
  };
};
