/**
 * https://www.npmjs.com/package/tiny-async-pool
 */

const timeout = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(ms), ms));

async function a() {
  return asyncPool(2, [1000, 5000, 3000, 2000], timeout).then((results) => {
    console.log("results: ", results);
  });
}

// results 按顺序输出结果
// asyncPool 第一个参数：并发执行的个数
// asyncPool 第二个参数：传入第三个参数函数的参数，长度也控制着第三个参数实例化的数量
// asyncPool 第三个参数：一个函数 返回一个promise 对象
