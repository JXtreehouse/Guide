var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    complete: function () {
        app.query(/car/).showBoundingBox(true);
        // 通过点击车来显示/隐藏其包围盒
        app.query(/car/).on('click', function(){
            this.showBoundingBox(!this.isShowBoundingBox);
        });
    }
});