app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    complete: function () {
        // 创建一辆卡车
        var obj = app.create({
            type: 'Thing',
            name: 'forklift',
            url: 'https://speech.uinnova.com/static/models/truck/',
            position: [0, 0, 0],
            style : {
                color : 0xFFFFFF
            },
            complete: function () {
                // 通过点击车来更改颜色
                var index = 0;
                obj.on('click', function(){
                    var colorMasks = [0xFF0000, 0x00FF00, 0x0000FF];
                    obj.style.color = colorMasks[(index ++) % 3];
                });
            }
        });					
    }
});