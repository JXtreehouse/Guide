// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});
            
// 绑定App点击事件
var clickCount = 0;
app.on('click', function(){
    clickCount ++;
    console.log('click time: ' + clickCount);
    
    // 点击大于 5 次解除事件
    if (clickCount >= 5)
       app.off('click');
});