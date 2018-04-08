// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 加载场景后执行
var car = null;
app.on('load', function () {
    car = app.query('car01')[0];
    move_to_next();
});

// 移动
function move_to_next() {
    car.moveTo({
        "offset": t3d.math.randomVector3(10, 0, 10),
        "time": 1500,
        // !!!需要支持： "orientToPath": true
        "complete":function() {
            move_to_next();
        }
    });
}