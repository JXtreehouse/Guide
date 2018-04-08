// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 加载场景后执行
app.on('load', function () {
    // 获取查询结果的第一个元素
    var obj = app.query('.Thing')[0];
    console.log(obj.name);
    
    // 以数组方式遍历查询结果
    var objs = app.query('.Thing');
    for (var i = 0; i < objs.length; i ++) {
        console.log(objs[i].name);
    }
    
    // 以forEach方式遍历查询结果
    app.query('.Thing').forEach(function(obj) {
        console.log(obj.name);
        // return false 将停止循环
    });
    
    // 给查询结果绑定事件
    app.query('.Thing').on('click', function(evt) {
        console.log(this.name);
    });
});