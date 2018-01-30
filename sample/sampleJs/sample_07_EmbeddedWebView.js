var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building', 
    complete: function () {
        // 创建内嵌页面显示
        var URLs = [
            'http://www.3dmomoda.com/',
            'http://www.bongiovi.tw/experiments/webgl/blossom/',
            'https://www.baidu.com/',
        ];
        for(var i = 0; i < URLs.length; i ++) {
            var webView = app.create({
                type: 'WebView',
                url: URLs[i],
                position: [20*i-20, 15, 0],
                width: 16,
                height: 16
           });
        }
    }
});