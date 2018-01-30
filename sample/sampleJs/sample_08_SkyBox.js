var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    skyBox: 'BlueSky',
    complete: function () {
        var index = 0;
        // 通过点击来进行切换天空盒
        app.on('click', function(){
            var skyBoxNames = ['SunCloud', 'BlueSky'];
            app.setSkyBox(skyBoxNames[(index ++) % skyBoxNames.length]);
        });
    }
});