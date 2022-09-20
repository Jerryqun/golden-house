/**
 * arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
 * forEach 无法跳出循环
 */

Array.prototype.myForEach = (callback, self) => {
  const m = [...this];
  for (let i = 0; i < m.length; i++) {
    callback.call(self, m[i], i, m);
  }
};
