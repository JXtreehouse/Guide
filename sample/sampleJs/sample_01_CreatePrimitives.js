// 创建App
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
plane.rotateX(90);

// 创建箱子
var box = app.create({ 
    type: 'Box', 
    position: [2, 2, 0], // 箱子坐标
});

// 创建球体
var baseSpherePos = [4, 4, 0];
var sphere = app.create({ 
    type: 'Sphere',
    radius: 0.5, // 半径
    position: baseSpherePos, // 球体坐标
});

// 创建圆柱体
var baseCylinderPos = [0, 2, 2];
var cylinder = app.create({ 
    type: 'Cylinder',
    radius: 0.3,
    height: 1.6,
    position: baseCylinderPos
});

// update事件
app.on('update', function() {
    var ratio = 2;
    
    // 箱子自转
    box.rotateY(30*app.deltaTime); 
    
    // 移动球体（上下移动）
    var spherePos = sphere.position;
    spherePos[1] = baseSpherePos[1] + Math.cos(app.elapsedTime) * ratio; 
    sphere.position = spherePos;
    
    // 移动圆柱体(左右移动)
    var cylinderPos = cylinder.position;
    cylinderPos[0] = baseCylinderPos[0] + Math.cos(app.elapsedTime) * ratio; 
    cylinder.position = cylinderPos;
});
                
// 设置最佳观看位置
app.camera.fit();