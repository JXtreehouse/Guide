// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 生成一个新面板
function create_element() {
	var srcElem = document.getElementById('board');
	var newElem = srcElem.cloneNode(true);
	newElem.style.display = "block";
	app.domElement.insertBefore(newElem, srcElem); 
	return newElem;
}

// 物体顶界面
var ui = null;
function test_create_ui() {
	ui = app.create({
		type: 'UI',
		parent: app.query('car02')[0],
		el: create_element(),
		offset: [0,2,0],
		pivot: [0.5,1]
	});
}

// 位置界面
var ui2 = null;
function test_create_ui_at_point() {
	ui2 = app.create({
		type: 'UI',
		el: create_element(),
		position: [0, 1, 0]
	});
}

// 删除界面
function test_destroy_ui() {
	if (ui && ui2) {
		ui.destroy(); ui = null;
		ui2.destroy(); ui2 = null;
	}
}	