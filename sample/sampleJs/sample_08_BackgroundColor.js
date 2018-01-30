app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    complete: function () {
        // 不断的改变背景颜色
        var color = 0x000000;
        app.on('update', function(){
            if (color == 0xFFFFFF) {
                color = 0; 
            }
            app.background = color;
            color += 0x020202;
        });
    }
});