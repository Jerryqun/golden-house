/**
 * 1、用 window.URL.createObjectURl 方法对选择的图片数据（可以勉强理解为input的value）生成一个blob对象路径
 */

function imgChange(img) {
  document.querySelector("img").src = window.URL.cteateObejectURL(img.files[0]);
}

/**
 * 2、使用 FileReader 读取器
 */

/**
 * 创建 FileReader 对像；
调用 readAsDataURL 方法读取文件；
调用 onload 事件监听。因为我们需要拿到完整的数据，但我们又不知道文件何时读完，所以需要第三步监听；
通过 FileReader 的 result 属性拿到读取结果。
 */

function imgChange(img) {
  // 生成一个文件读取的对象
  const reader = new FileReader();
  reader.onload = function (ev) {
    document.querySelector("img").src = imgFile;
  };
  //发起异步读取文件请求，读取结果为data:url的字符串形式，
  reader.readAsDataURL(img.files[0]);
}
