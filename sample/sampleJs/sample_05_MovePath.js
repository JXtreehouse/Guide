// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 加载场景后执行
var car = null;
app.on('load', function () {
    // 创建一个圆形路径
    var radius = 10;
	var path = [];
    for (var degree = 0; degree < 360; degree += 10) {
        var x = Math.cos(degree * 2 * Math.PI / 360) * radius;
        var z = Math.sin(degree * 2 * Math.PI / 360) * radius;
        path.push([x, z]);
    }

    // 让车沿圆形路径运动
    var car = app.query('car01')[0];
    car.movePath({
        'position': path[0],
        'orientToPath' : true,
        'orientToPathDegree': 90, 
        'path': path,
        'time': 12000,
        'delayTime': 500,
        'loop': true,
        'complete': function () {
            console.log('move completed');
        }
    });
});
