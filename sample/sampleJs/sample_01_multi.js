// App1
var app1 = new t3d.App({ 
	container: "div3d", 
	appKey: "app_test_key", 
	background: 0x334455 
});

var box1 = app1.create({ 
	type: 'Box', 
	position: [0, 0, 3] 
});

app1.camera.lookAt(box1);

app1.on('update', function () {
	box1.rotateY(30*app1.deltaTime);
});

// App2
var app2 = new t3d.App({ 
	container: "div3d2", 
	appKey: "app_test_key", 
	skyBox: 'SunCloud' 
});

var box2 = app2.create({ 
	type: 'Box', 
	position: [0, 0, 4] 
});

app2.camera.lookAt(box2);

app2.on('update', function () {
	box2.rotateX(80*app2.deltaTime);
});