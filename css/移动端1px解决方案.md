https://juejin.cn/post/7084220221505929230

设备尺寸: 设备的对角线长度
像素: 组成图像的最小单元
分辨率： 屏幕分辨率是指纵横向上的像素点数 (单位px)
逻辑像素： css像素
pc端1css像素 = 1物理像素
设备像素比DPR(devicePixelRatio) ：物理像素/逻辑像素(CSS像素)


我们可以采用伪元素+transform的方式解决该问题
.scale-1px{
  position: relative;
  border:none;
}
.scale-1px:after{
  content: '';
  position: absolute;
  bottom: 0;
  background: #000;
  width: 100%;
  height: 1px;
  /*核心是利用transform缩放边框*/
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

if(window.devicePixelRatio && devicePixelRatio >= 2){
  document.querySelector('ul').className = 'scale-1px';
}