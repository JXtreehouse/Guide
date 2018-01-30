var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    complete: function () {
        // 获取第一个元素
        var obj = app.query('.Thing')[0];
        console.log(obj.name);
        
        // 循环选择器对象，数组方式
        var objs = app.query('.Thing');
        for (var i = 0; i < objs.length; i ++) {
            console.log(objs[i].name);
        }
        
        // 循环选择器对象
        app.query('.Thing').forEach(function(obj) {
            console.log(obj.name);
            // return false 将停止循环
        });
        
        // 搜索后注册事件
        app.query('.Thing').onclick = function(obj) {
            console.log(obj.name);
        };
    }
});