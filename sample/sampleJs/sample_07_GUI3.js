// 创建App
var app = new t3d.App({
    container: 'div3d',
    appKey: "app_test_key",
    url: 'https://speech.uinnova.com/static/models/building'
});

// 加载场景后执行
app.on('load', function() {
    ui = app.create({
        type: 'UI',
        template: 'progress2',
        domWidth: '800px',
    });
    
    var obj = {
        progress: 3
    };
    
    var proObj = [
        {name: '2号楼', describe: '教学楼'},
        {name: '3号楼', describe: '实验楼'},
        {name: '5号楼', describe: '室内篮球场'},
        {name: '餐厅', describe: '五星级'},
        {name: '大讲堂', describe: '开讲了'}
    ];

    var prog = ui.addProgress(obj, 'progress', proObj);
    
    prog.onChange(function(id) {
        console.log(id);
    });
    
    prog.startCallback(function(state, id) {
        console.log(state);
        console.log(id);
    });

});