var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    complete: function () {
        // 通过点击车来显示/隐藏其包围盒
        app.query(/car/).on('update', function(car){
            var time = app.elapsedTime;
            var radian = Math.cos(time);
            var scale = Math.max(0.5, Math.sin(time));
            car.position = [car.position[0] + radian * 0.05, car.position[1], car.position[2]];
            car.scale = [scale, scale, scale];
            car.rotateY(30 * app.deltaTime);
        });
    }
});