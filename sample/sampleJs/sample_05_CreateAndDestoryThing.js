var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    complete: function() {
        // 创建3辆卡车
        createTruck([0, 0, 0]);
        createTruck([-5, 0, 0]);
        createTruck([-10, 0, 0]);
    }
});

// 创建卡车
function createTruck(pos) {
    var obj = app.create({
        type: 'Thing',
        name: 'truck',
        url: 'https://speech.uinnova.com/static/models/truck/',
        position: pos,
        complete: function() {
            // 通过点击物体来进行删除
            obj.on('click', function(){
                obj.destroy();
            });
        }
    });

    return obj;
}