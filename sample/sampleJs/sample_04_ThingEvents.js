// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 加载场景后执行
app.on('load', function () {
    var objs = app.outdoors.query('*');
    
    // 绑定更新事件
    objs.on('update', function() {
        this.rotateY(20 * app.deltaTime);
    });
    
    // 绑定click事件 (原地点击有bug!!!)
    objs.on('click', function() {
        this.moveY(1.0);
    });
});

