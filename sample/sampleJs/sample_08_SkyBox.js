// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    skyBox: 'Night'
});

// 天空盒
var baseURL = 'https://speech.uinnova.com/static/skyboxes/';
var skyBoxes = ['SunCloud', 'BlueSky', 'MilkyWay', 'Night'];
var idx = 0;

// 切换天空盒
function set_skybox() {
    url = baseURL + skyBoxes[(idx ++) % skyBoxes.length];
    app.setSkyBox(url);
}

// 设置背景色
function set_bgColor() {
    app.background = 0xff8844;
}