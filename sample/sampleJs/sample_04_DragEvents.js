// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 加载场景后执行
app.on('load', function () {
    // 查找所有物体
    var objs = app.query('.Thing');

    // 当前拖拽的物体
    var dragObj = null;

    // 拖拽开始
    objs.on('dragstart', function(event) {
        if (event.pickedObj) {
            dragObj = event.pickedObj;
            dragObj.pickable = false; // 拖拽时候自身物体不能被拾取到
            app.camera.enableRotate = false; // 拖拽时候关闭摄影机的旋转
        }
    });

    // 拖拽中
    objs.on('drag', function(event) {
        if (event.pickedObj)
            dragObj.position = event.getPickedPos();
    });

    // 拖拽结束
    objs.on('dragend', function(event) {
        if (dragObj) {
            dragObj.pickable = true;
            dragObj = null;
            app.camera.enableRotate = true;
        }
    });
})