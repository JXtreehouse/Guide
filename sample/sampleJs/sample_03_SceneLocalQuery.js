var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
     complete: function () {
        // 获取建筑
        var building = app.buildings[0];

        // 获取建筑中大于2层的楼层
        building.query('[levelNum>2]').forEach(function(obj) {
            console.log(obj.name);
        });
                
        // 获取1层内，所有品牌为IBM的物体
        building.floors[0].query('[品牌=IBM]').forEach(function(obj) {
            console.log(obj.name);
        });
        
        // 获取室外的所有的物
        app.outdoors.query('.Thing').forEach(function(obj) {
            console.log(obj.name);
        });
    }
});