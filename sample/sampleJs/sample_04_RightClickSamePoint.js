// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 右键点击往往和平移冲突，所以经常需要判断原地点击
// 左键同上
app.on('load', function() {
    var mouseDownPos = null;
    app.on('mousedown', function(event) {
        if (event.button == 2)
            mouseDownPos = [event.x, event.y];
    });

    app.on('click', function(event) {
        if (event.button == 2) {
            // 小于4像素执行click事件
            if (t3d.math.distance(mouseDownPos, [event.x, event.y]) < 4) {
                console.log('右键原地点击')
            }
        }
    });
});