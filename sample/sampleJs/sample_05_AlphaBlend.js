var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    complete: function () {
        // 通过点击车来更改透明度
        app.query(/car/).on('click', function(car){
            car.pickedObj.style.opacity = car.pickedObj.style.opacity == 1.0 ? 0.5 : 1.0;
        });
   }
});
