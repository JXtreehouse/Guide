// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 目标对象
var car = null;
app.on('load', function() {
    car = app.query('car01')[0];
});

// 位置
app.on('click', function(event) {
    if (event.pickedObj)
        car.position = event.getPickedPos(); // !!!修改为属性
});

// 移动，z轴方向
function obj_move() {
    car.moveZ(-1);
}

// 旋转，y轴方向
function obj_rotate() {
    car.rotateY(45.0);
}

// 缩放
function obj_scale() {
    car.scale = [1, 2, 1];
}
