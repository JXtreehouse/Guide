var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    complete: function () {
        // 通过点击场景来更改当前观察物体
        app.query(/car/).on('click', function(){
            var to = this.position;
            to[1] += 10;
            app.camera.flyTo({time: 1500, to: to, target: this.position});
        });
    }
});
