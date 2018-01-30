// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    // 场景加载完成
    complete: function () {
        // 绑定更新事件
        app.outdoors.query('.Thing').on('update', function() {
            if (enableRotation)
                this.rotateY(20 * app.deltaTime);
        });
    }
});

// 场景点击后取消旋转（通过解除事件绑定操作）
var enableRotation = true;
app.on('click', function(){
    enableRotation = !enableRotation;
});