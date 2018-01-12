var tree, buildings, floors, things, outdoor, outdoorThings;
// 3D加载显示
var app = new t3d.App({
    el: 'div3d',  // 渲染到dom
    ak: 'app_test_key',      // 密钥
    url: 'https://speech.uinnova.com/static/models/building', // 所渲染的3D模型
    complete: function () { // 加载完成回调    
        console.log("app scene loaded");
        // 注：加载完成后才可操作3D对象
        // 3D场景树
        tree = app.tree;
        // 3D场景树-建筑
        buildings = tree.buildings;
        // 3D场景树-建筑-层
        floors = tree.buildings[0].floors;
        // 3D场景树-建筑-层-物体
        things = tree.buildings[0].floors[0].things;
        // 3D场景树-园区
        outdoor = tree.outdoor;
        // 3D场景树-园区-物体
        outdoorThings = tree.outdoor.things;
    }
});