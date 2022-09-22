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

/**
 * 跳出循环
 */

let arr = [...new Array(10).keys()];
try {
  arr.forEach((item) => {
    console.log(`item:${item}`);
    if (item > 5) throw new Error("break");
  });
} catch (err) {
  if (err.message === "break") console.log("break success!");
  else console.error(err);
}
