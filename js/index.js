// 3D加载显示
var app = new t3d.App({
    el: 'div3d',  // 渲染到dom
    ak: 'app_test_key',      // 密钥
    url: 'https://speech.uinnova.com/static/models/hw2', // 所渲染的3D模型
    complete: function () { // 加载完成回调    
        console.log("app scene loaded");
    }
});