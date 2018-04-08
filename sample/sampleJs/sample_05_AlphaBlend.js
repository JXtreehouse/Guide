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

// 设置透明
function set_alpha() {
    var alpha = car.style.opacity;
    car.style.opacity = (alpha > 0.8) ? 0.5 : 1.0;
}

// 设置颜色
function set_color() {
    var color = car.style.color;
    car.style.color = (color != 0xff0000) ? 0xff0000 : 0x00ff00;
}

// 设置闪烁
function set_flash() {
	car.on('update', function() {
		car.style.opacity = 0.5 + 0.5 * Math.sin( 2 * app.elapsedTime );
	});
}

// 恢复设置
function reset() {
    car.style.opacity = 1.0;
    car.style.color = null;
    car.off('update');
}


