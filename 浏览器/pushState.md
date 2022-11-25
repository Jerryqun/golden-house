https://developer.mozilla.org/en-US/docs/Web/API/History/pushState
改变当前url但是不刷新页面
pushState() 不会造成 hashchange 事件调用


history.replaceState(state,title,url)
history.pushState(state, title, url)

replaceState和pushState 的区别一个是对历史栈追加一个是对当前url的替换