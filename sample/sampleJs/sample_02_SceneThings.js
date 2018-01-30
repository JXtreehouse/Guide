var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    complete: function () {
        // 获取建筑对象
        var building = app.buildings[0];
        
        // 打印建筑中所有的楼层
        building.floors.forEach(function(floor) {
            console.log(floor.name);
        });
        
        // 获取室外对象
        var outdoors = app.outdoors;
            
        // 打印室外所有物体
        outdoors.things.forEach(function(thing) {
            console.log(thing.name);
        });
     }
});