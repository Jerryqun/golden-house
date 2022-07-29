/**
 * 这就类似我们在微信平台订阅了公众号 , 当它有新的文章发表后，就会推送给我们所有订阅的人。

   我们作为订阅者不必每次都去查看这个公众号有没有新文章发布，公众号作为发布者会在合适时间通知我们。

   我们与公众号之间不再强耦合在一起。公众号不关心谁订阅了它， 不管你是男是女还是宠物狗，它只需要定时向所有订阅者发布消息即可。
 */

/**
 * 手动实现EventEmitter
 */

 function EventEmitter() {
    this._maxListeners = 10;
    this._events = Object.create(null);
  }

  // 向事件队列添加事件
  // prepend为true表示向事件队列头部添加事件
  EventEmitter.prototype.addListener = function (type, listener, prepend) {
    if (!this._events) {
      this._events = Object.create(null);
    }
    if (this._events[type]) {
      if (prepend) {
        this._events[type].unshift(listener);
      } else {
        this._events[type].push(listener);
      }
    } else {
      this._events[type] = [listener];
    }
  };

  // 移除某个事件
  EventEmitter.prototype.removeListener = function (type, listener) {
    if (Array.isArray(this._events[type])) {
      if (!listener) {
        delete this._events[type]
      } else {
        this._events[type] = this._events[type].filter(e => e !== listener && e.origin !== listener)
      }
    }
  };

  // 向事件队列添加事件，只执行一次
  EventEmitter.prototype.once = function (type, listener) {
    const only = (...args) => {
      listener.apply(this, args);
      this.removeListener(type, listener);
    }
    only.origin = listener;
    this.addListener(type, only);
  };

  // 执行某类事件
  EventEmitter.prototype.emit = function (type, ...args) {
    if (Array.isArray(this._events[type])) {
      this._events[type].forEach(fn => {
        fn.apply(this, args);
      });
    }
  };

  // 设置最大事件监听个数
  EventEmitter.prototype.setMaxListeners = function (count) {
    this.maxListeners = count;
  };
