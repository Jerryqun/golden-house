/**
Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写
target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。
 *  
 */

const proxy = new Proxy(target, handler);

/**
 *  手写用 ES6proxy 如何实现 arr[-1] 的访问
 */

const arrProxy = (arr) =>
  new Proxy(arr, {
    get(target, key) {
      key = +key;
      while (key < 0) {
        key += target.length;
      }
      return target[key];
    },
  });

const a = proxyarr([0, 1, 2, 3]);
console.log(a);
