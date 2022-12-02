/**
 * https://www.npmjs.com/package/tiny-async-pool
 * https://www.cnblogs.com/yf-html/p/14957529.html
 * 下面实例用的是1.X版本
 * "tiny-async-pool": "^1.1.0",
 */

const timeout = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(ms), ms));

async function a() {
  return asyncPool(2, [1000, 5000, 3000, 2000], timeout).then((results) => {
    console.log("results: ", results);
  });
}

// 执行顺序 一开始 1000, 5000 压入执行队列， 一秒后1000任务执行完毕， 压入3000  然后三秒后 3000任务执行完毕压入2000  一秒后5000执行完毕 最后再一秒后2000 执行完毕

// results 按顺序输出结果
// asyncPool 第一个参数：并发执行的个数
// asyncPool 第二个参数：传入第三个参数函数的参数, 其长度就是任务数
// asyncPool 第三个参数：一个函数 返回一个promise 对象
