// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 加载场景后执行
app.on('load', function () {
    var objs = app.outdoors.query('*').add(app.query('.Building'));

    // 改变颜色
    objs.on('hoveron', function () {
        this.style.color = 0xff0000;
    });

    // 还原颜色
    objs.on('hoveroff', function () {
        this.style.color = null;
    });
});

