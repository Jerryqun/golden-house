class EventEmitter {
  // 存储
  listerners = []
  // 发布
  publish = (params) => {
    listerners.map(fn => {
      fn(params)
    })
  }
  // 订阅
  subscribe = (fn) => {
    this.listerners.push(fn)
    return (fn) => {
      this.listerners = this.listerners.filter(f => f !== fn)
    }
  }
}