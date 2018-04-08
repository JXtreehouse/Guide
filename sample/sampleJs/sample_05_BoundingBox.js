// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 加载场景后执行
app.on('load', function() {
    // 显示包围盒
    app.query('.Thing').showBoundingBox(true);

    // 点击 显示/隐藏 包围盒 (!!!包围盒代码有待改进)
    app.query('.Thing').on('click', function() {
        this.showBoundingBox(!this.isShowBoundingBox);
    });
});