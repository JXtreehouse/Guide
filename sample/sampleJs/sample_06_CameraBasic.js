// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 设置
function set_camera() {
	app.camera.position = [0, 20, 20];
	app.camera.target = [-30, 10, 0];
	app.camera.log();
}

// 聚焦物体
function fit_camera() {
    var car = app.query('car01')[0];
    app.camera.fit(car);
}

// 环绕物体
function rotate_around_obj() {
    var car = app.query('car01')[0];
    app.camera.rotateAround({obj: car, time: 5, angle: 180}); // 围绕car在5秒内旋转180度
}