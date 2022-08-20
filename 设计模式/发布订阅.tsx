class EventEmit {
  listeners = [];
  publish = (...params) => {
    this.listeners.forEach((fn) => fn(params));
  };
  // 订阅下
  subscribe = (fn) => {
    this.listeners.push(fn);
    // 返回取消订阅
    return () => {
      this.listeners = this.listeners.filter(
        (fn) => fn !== fn,
      );
    };
  };
}

const temp = new EventEmit()
function log(...params) {
  console.log(params)
}
const unsubscribe = temp.subscribe(log)

setTimeout(() => {
  temp.publish('cq')
  unsubscribe()
}, 2000)