
// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 加载场景后执行
app.on('load', function() {
    var ui = app.create({
        type: 'UI',
        template: 'nav-md1',
    });
    ui.addAppTree('全景图', app);
    ui.addTree('全景图', app, 'outdoors.things', 'name');
});