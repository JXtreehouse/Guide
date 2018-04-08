// 创建App
var app = new t3d.App({container: "div3d", appKey: "app_test_key" });

// 创建平面
var plane = app.create({ 
    type: 'Plane',
    width: 8,
    height: 8,
    position: [0, 0, 0]
});
// 平面旋转90度
plane.rotateX(-90);

// 创建箱子
var box = app.create({ 
    type: 'Box', 
    position: [2, 2, 0], // 箱子坐标
});

// 创建球体
var sphere = app.create({ 
    type: 'Sphere',
    radius: 0.5, // 半径
    position: [4, 4, 0], // 球体坐标
});

// 创建圆柱体
var cylinder = app.create({ 
    type: 'Cylinder',
    radius: 0.3,
    height: 1.6,
    position: [0, 2, 2]
});

// update事件
app.on('update', function() {
    // 箱子自转
    box.rotateY(app.deltaTime * 30); 
    
    // 移动球体（上下移动）
    sphere.setY( Math.cos(app.elapsedTime) * 2 ); 
    
    // 移动圆柱体(左右移动)
    cylinder.setX( Math.cos(app.elapsedTime) * 2 ); 
});
                
// 设置最佳观看位置
app.camera.fit();