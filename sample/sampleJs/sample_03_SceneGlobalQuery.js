var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building',
    complete: function () {
        // 搜索名字为'car01'的物体
        var car = app.query('car01')[0];
        console.log(car.name);

        // 搜索类型是'.Thing'的物体
        var things = app.query('.Thing');
        for (var i = 0; i < things.length; i ++) {
            console.log(things[i].name);
        }

        // 搜索名字中包含'car'、并且马力大于50的物体
        app.query(/car/).query('[power>50]').forEach(function(obj) {
            console.log(obj.name);
        });
    }
});