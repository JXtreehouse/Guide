// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 创建工具条
var toolbar = t3d.widget.ToolBar();
toolbar.setPosition({left: '10px', top: '10px'});

// 绑定物体
var dataObj = {
    warehouseCode: false,
    temperature: false,
    humidity: false,
    statistics: false,
    status: false,
    insect: false,
    cerealsReserve: false,
    video: false,
    cloud: true,
    orientation: true
}

// 添加按钮
var button0 = toolbar.addImageBoolean(dataObj, 'warehouseCode').name('仓库编号').imgUrl('#icontubiao10');
var button1 = toolbar.addImageBoolean(dataObj, 'temperature').name('温度检测').imgUrl('#icontubiao2');
var button2 = toolbar.addImageBoolean(dataObj, 'humidity').name('湿度检测').imgUrl('#icontubiao5')
var button3 = toolbar.addImageBoolean(dataObj, 'statistics').name('能耗统计').imgUrl('#icontubiao20');
var button4 = toolbar.addImageBoolean(dataObj, 'status').name('保粮状态').imgUrl('#icontubiao');
var button5 = toolbar.addImageBoolean(dataObj, 'insect').name('虫害').imgUrl('#icontubiao11');
var button6 = toolbar.addImageBoolean(dataObj, 'cerealsReserve').name('粮食储存').imgUrl('#icontubiao21');
var button7 = toolbar.addImageBoolean(dataObj, 'video').name('视屏监控').imgUrl('#icontubiao9');
var button8 = toolbar.addImageBoolean(dataObj, 'cloud').name('温度云图').imgUrl('#icontubiao16');
var button9 = toolbar.addImageBoolean(dataObj, 'orientation').name('人车定位').imgUrl('#icontubiao10');

// 绑定回调
button0.onChange(function(a){
    var car = app.query('car01')[0];
    car.visible = !car.visible;
});