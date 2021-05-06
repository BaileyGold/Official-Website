// 监听浏览器窗口发生改变时，调用iphone函数动态刷新font-size
window.onresize=iphone;

// 通过监听设备尺寸，动态修改根元素的font-size属性值
function iphone(){

  // 获取设备尺寸
  var deviceWidth = document.documentElement.clientWidth;
    if(deviceWidth < 1200){
      // 如果设备尺寸大于设计稿尺寸，默认改为设计稿尺寸
      if(deviceWidth > 640 && deviceWidth<1200) deviceWidth = 640;

      // 根据尺寸设置font-size的值
      document.documentElement.style.fontSize = deviceWidth / 64 + 'px';
    }
    if(deviceWidth>1200){
      document.documentElement.style.fontSize = '62.5%';
    }
}
iphone();


