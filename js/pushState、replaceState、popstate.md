pushState(state, title, url)

state: 可以通过history.state读取
title: 可选参数，暂时没有用，建议传个短标题
url: 改变过后的url地址

浏览器不会向服务端请求数据，直接改变url地址，可以类似的理解为变相版的hash；但不像hash一样，浏览器会记录pushState的历史记录，可以使用浏览器的前进、后退功能作用

replaceState用法与pushState一样 区别是不会增加浏览器历史记录，只是修改浏览器当前记录。


当用户在浏览器点击进行后退、前进，或者在js中调用histroy.back()，history.go()，history.forward()等，会触发popstate事件；但pushState、replaceState不会触发这个事件。

 /** 当界面跳转到pushState或者replaceState的时候 就会打印出来pushState或者replaceState之前设置的state值 */
window.onpopstate = function(e) {
  console.log(JSON.stringify(e.state));     
}


