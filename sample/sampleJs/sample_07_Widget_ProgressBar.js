// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 创建进度条
var bar = t3d.widget.ProgressBar({ width: '600px' });

// 绑定数据
var dataObj = { progress: 2 };
var progress = bar.addProgress(dataObj, 'progress', [
    {name: '2号楼', describe: '教学楼'},
    {name: '3号楼', describe: '实验楼'},
    {name: '5号楼', describe: '室内篮球场'},
    {name: '餐厅', describe: '五星级'},
    {name: '大讲堂', describe: '开讲了'}
]);

// 进度条变化 
progress.onChange(function(id) {
    console.log(id);
});

// 更新
setInterval(function() {
    if (dataObj.progress >= 4) 
        dataObj.progress = 0;
    else
        dataObj.progress ++;
}, 1000);