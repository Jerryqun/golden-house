class MyPromise {
  constructor(fn) {
    try {
      fn(this.resove, this.reject);
    } catch (err) {
      this.reject(err);
    }
  }
  status = 'pendding';
  result = '';
  onFulfilledCallbacks = [];
  onRejectedCallbacks = [];
  resove = (res) => {
    if (this.status === 'pendding') {
      this.status = 'fulfilled';
      this.result = res;
      while (this.onFulfilledCallbacks.length) {
        this.onFulfilledCallbacks.shift()(this.result);
      }
    }
  };
  reject = (err) => {
    if (this.status === 'pendding') {
      this.status = 'rejected';
      this.result = err;
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(this.result);
      }
    }
  };
  then = (resFn, errFn) => {
    let thenPromise = new MyPromise((resove, reject) => { });
    resFn = typeof resFn === 'function' ? resFn : () => { };
    errFn =
      typeof errFn === 'function'
        ? errFn
        : (reason) => {
          throw reason;
        };
    if (this.status === 'pendding') {
      this.onFulfilledCallbacks.push(resFn);
      this.onRejectedCallbacks.push(errFn);
    } else if (this.status === 'fulfilled') {
      this.onFulfilledCallbacks.push(resFn);
    } else {
      this.onRejectedCallbacks.push(errFn);
    }
    return thenPromise;
  };
}