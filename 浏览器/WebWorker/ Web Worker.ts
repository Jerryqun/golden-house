/**
 * webworker实践案例
 * 压缩
 */

function createWorker(f) {
  var blob = new Blob(["(" + f.toString() + ")()"]);
  var url = window.URL.createObjectURL(blob);
  var worker = new Worker(url);
  return worker;
}

const worker = createWorker(function () {
  // 加载pako
  importScripts("https://g.alicdn.com/code/lib/pako/1.0.11/pako.min.js");
  onmessage = function (e) {
    const { text } = e.data;
    function gzip(str) {
      return this.self.pako.gzip(str, {
        to: "string",
      });
    }
    const gzipText = gzip(text);
    postMessage(gzipText);
  };
});

worker.onmessage = (e) => {
  // 拿到压缩后的字符串
  const gzipText = e.data;
  console.log(e);
};

worker.postMessage({ text });
