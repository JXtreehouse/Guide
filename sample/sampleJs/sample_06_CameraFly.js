// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 加载场景后执行
var objs = null;
app.on('load', function() {
    objs = app.outdoors.query('.Thing');
    fly_to_next();
});

// 飞行
var idx = 0;
function fly_to_next() {
    var obj = objs[idx ++];
    
    // 调用摄影机飞行
    app.camera.flyTo({
        'time': 1500, 
        'target': obj,
        'complete': function() {
            setTimeout(function() {
                fly_to_next();
            }, 300);
        }
    });
    
    if (idx >= objs.length)
        idx = 0;
}