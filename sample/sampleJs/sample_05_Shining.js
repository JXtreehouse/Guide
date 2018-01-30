app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    complete: function () {
        // 创建一辆卡车
        var obj = app.create({
            type: 'Thing',
            name: 'truck',
            url: 'https://speech.uinnova.com/static/models/truck/',
            position: [0, 0, 0],
            style : {
                color : 0xFFFFFF
            },
           complete: function () {
                // 卡车开始变换颜色
                obj.style.color = 0xF4F4F4;
                var sign = 1;
                app.on('update', function(){
                    if (obj.style.color == 0xF4F4F4 || obj.style.color == 0x404040) {
                        sign *= -1;
                    }

                    obj.style.color += 0x040404 * sign;
                });
            }
        });					
   }
});
