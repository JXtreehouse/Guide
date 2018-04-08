// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 卡车
var truck = null;

// 创建卡车
function create_truck() {
    if (truck)
        return;
        
    truck = app.create({
        type: 'Thing',
        name: 'truck',
        url: 'https://speech.uinnova.com/static/models/truck/',
        position: [-5, 0, 0],
        complete: function() {
            console.log('truck created!');
        }
    });
}

// 删除卡车
function destroy_truck() {
    if (!truck)
        return;
        
    truck.destroy();
    truck = null;
}
