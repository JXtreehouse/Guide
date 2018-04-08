// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 界面组件
var panel = new t3d.widget.Panel({
    name: '我是标题',
    isClose: true, // 是否有关闭按钮
    isDrag: true,
    isRetract: true,
    opacity: 0.9,
    hasTitle: true,
    titleImage: 'http://47.93.162.148:8081/liangyw/images/icon/icon.png'
});

// 创建任意对象
var dataObj = {
    pressure: '0.14MPa',
    temperature: '21°C',
    checkbox: {'设备1': false, '设备2': false, '设备3': true, '设备4': true },
    radio: '摄像头01',
    open1: true,
    height: 10,
    maxSize: 6.0,
    iframe: true
};

// 动态绑定物体
var press   = panel.add(dataObj, 'pressure').name('水压').setText(true).setText(false);
var water   = panel.add(dataObj, 'temperature').name('水温').setText(true);
var check   = panel.add(dataObj, 'checkbox').name({"设备2": "设备2(rename)"});
var radio   = panel.addRadio(dataObj, 'radio', ['摄像头01', '摄像头02']);
var open1   = panel.add(dataObj, 'open1').name('开关01');
var height  = panel.add(dataObj, 'height').name('高度');
var maxSize = panel.add(dataObj, 'maxSize').step(0.25).min(-10).max(10);
var iframe  = panel.addIframe(dataObj, 'iframe').name('视屏').iframeUrl('http://www.3dmomoda.com');

// 设置位置
panel.setPosition({left: 30, top: 30});		

// 更新
setInterval(function() {
    dataObj.height += 1;
}, 1000);