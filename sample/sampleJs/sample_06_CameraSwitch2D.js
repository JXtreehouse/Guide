// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 切换摄影机2D/3D
function switch_camera() {
    app.camera.toggle3D = !app.camera.toggle3D;   // !!!代码需要修改，以及切换平滑需要改进
}