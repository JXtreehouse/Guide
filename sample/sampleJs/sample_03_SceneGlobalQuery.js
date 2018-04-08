// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 搜索名字为'car01'的物体
function query_car() {
    var car = app.query('car01')[0];
    car.visible = !car.visible;
}

// 搜索类型是'Thing'的物体
function query_things() {
    var things = app.query('.Thing');
    for (var i = 0; i < things.length; i ++) {
        things[i].visible = !things[i].visible;
    }
}

// 搜索名字中包含'car'、并且马力大于50的物体
function query_car_power() {
    app.query(/car/).query('[power>50]').forEach(function(obj) {
        obj.visible = !obj.visible;
    });
}