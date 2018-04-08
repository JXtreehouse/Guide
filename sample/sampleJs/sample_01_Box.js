// 创建App
var app = new t3d.App({ container: "div3d", appKey: "app_test_key" });

// 创建箱子
var box = app.create({ 
    type: 'Box', 
    position: [-4, 0, 0],
});

// update事件
app.on('update', function() {
    box.rotateY(30*app.deltaTime); // 箱子自转
});

// 看箱子
app.camera.lookAt(box);
