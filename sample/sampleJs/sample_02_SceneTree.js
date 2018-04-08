// 创建App
var app = new t3d.App({
    container: "div3d",
    url: 'https://speech.uinnova.com/static/models/building', 
    appKey: "app_test_key", // 开发者Key
    complete: showObjectsTree
});

// 这里使用了jquery.easyui的tree插件
function showObjectsTree() {
    $('#objectTree').tree({
        data: getRootData(),
        checkbox: true,
        onCheck: function (node, checked) {
            app.query('#'+node.id).visible = checked;
        }
    })
}

// 根节点信息由 建筑 和 室外 组成
function getRootData() {
    var data = [];
    app.buildings.forEach(function(building) {
        data.push( getBuildingData(building) );
    });
    data.push(getFloorData(app.outdoors));
    return data;
}

// 收集 建筑 信息
function getBuildingData(building) {
    var data = { 
        id: building.id, 
        checked: true, 
        state: 'closed',
        text: building.type + ' (' + building.id + ')'
    };
    data["children"] = [];
    building.floors.forEach(function(floor) {
        data["children"].push( getFloorData(floor) );
    });

    return data;
}		

// 收集 楼层 信息
function getFloorData(floor) {
    var data = { 
        id: floor.id, 
        checked: true, 
        state: 'closed',
        text: floor.type + ' (level:' + floor.levelNum + ')'
    };
    data["children"] = [];
    floor.things.forEach(function(thing) {
        data["children"].push( getThingData(thing) );
    });

    return data;
}

// 收集 物 信息
function getThingData(thing) {
    return { 
        id: thing.id, 
        checked: true, 
        text: thing.type + ' (' + thing.name + ')'
    };
}
