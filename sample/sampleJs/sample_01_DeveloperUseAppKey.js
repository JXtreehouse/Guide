// 创建App
app = new t3d.App({
    container: "div3d",
    appKey: "app_test_key", // 开发者Key
    complete: function() {
        console.log("创建成功");
    },
    error: function() {
        console.log("创建失败，请检查AppKey"); 
    }
});
