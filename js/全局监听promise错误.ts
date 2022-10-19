// 浏览器
window.addEventListener("unhandledrejection", (event) => {
  const {
    error, // 错误对象
    promise, // 出现异常的promise对象
  } = event;
  console.log(error, promise);
  event.preventDefault();
});

// node
process.on("unhandledRejection", (error, promise) => {
  console.log(error, promise);
});
