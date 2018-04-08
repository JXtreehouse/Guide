// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 查询建筑中大于2层的楼层
function building_query() {
    app.buildings[0].query('[levelNum>2]').forEach(function(obj) {
        obj.visible = !obj.visible;
    });
}
                
// 查询一层内，所有品牌为IBM的物体
function floor_query() {
    app.buildings[0].floors[0].query(/cabinet/).forEach(function(obj) {
        obj.visible = !obj.visible;
        obj.setY(20);
    });
}
        
// 查询室外的所有的物
function outdoors_query() {
    app.outdoors.query('.Thing').forEach(function(obj) {
        obj.visible = !obj.visible;
    });
}