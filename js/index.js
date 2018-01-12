// 初始化Ting3d实例
var app = new t3d.App({ el: "div3d" });
// 创建物体
var box = app.create({ type: 'Box' });
// 物体添加update事件
app.on('update', function() {
    box.rotateY(60*app.deltaTime);
});
// 相机朝向
app.camera.lookAt(box);