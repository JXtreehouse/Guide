var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    complete: function () {
        // 通过点击车来进行移动
        app.query(/car/).on('click', function(car){
            car.pickedObj.moveTo({time: 200, offset: [0, 0, 0.5]});
        });
    }
});