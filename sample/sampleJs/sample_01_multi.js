// 创建第一个包含背景色的App并且看箱子
var app1 = new t3d.App({container: "div3d", appKey: "app_test_key", background: 0x334455});
var box1 = app1.create({ type: 'Box', position: [0, 0, 3] });
app1.camera.lookAt(box1);

// 创建第二个包含天空盒的App并且看箱子
var app2 = new t3d.App({ container: "div3d2", appKey: "app_test_key", skyBox: 'SunCloud' });
var box2 = app2.create({ type: 'Box', position: [0, 0, 4] });
app2.camera.lookAt(box2);

// 第一个App更新（箱子自转）
app1.on('update', function () {
	box1.rotateY(30*app1.deltaTime);
});

// 第二个App更新（箱子自转）
app2.on('update', function () {
	box2.rotateX(80*app2.deltaTime);
});