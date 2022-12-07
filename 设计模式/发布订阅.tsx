class EventEmit {
  // 发布订阅中心
  listeners = [];
  // 发布者
  publish = (...params) => {
    this.listeners.forEach((fn) => fn(params));
  };
  // 订阅下  观察者
  subscribe = (fn) => {
    this.listeners.push(fn);
    // 返回取消订阅
    return () => {
      this.listeners = this.listeners.filter((fn) => fn !== fn);
    };
  };
}

const temp = new EventEmit();
function log(...params) {
  console.log(params);
}
const unsubscribe = temp.subscribe(log);

setTimeout(() => {
  temp.publish("cq");
  unsubscribe();
}, 2000);
