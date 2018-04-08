// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 目标对象
var car = null;
var originImage = null;
app.on('load', function() {
    car = app.query('car01')[0];
    originImage = car.style.image;
});

// 设置
function set_map() {
    car.style.image = 'https://speech.uinnova.com/static/images/uv.jpg';
}

// 恢复 (!!!恢复有些问题)
function reset() {
    car.style.image = originImage;
}


