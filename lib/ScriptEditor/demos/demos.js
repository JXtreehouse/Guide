/**
 * Created by hzy on 2016/12/24 0024.
 */
var scriptVersion = "0.0.0.1";

var exampleLib = {
    "基本测试": [
        {"name": "创建物体",    "file": "./demos/test_hello.txt",
            "sceneId": "20161226110228211818003", action: "view"},
        {"name": "摄影机跳转",  "file": "./demos/test_flyto.txt",
            "sceneId": "20161226110228211818003", action: "view"},
        {"name": "创建界面",    "file": "./demos/test_gui.txt",
            "sceneId": "20161226110228211818003", action: "view"},
        {"name": "创建曲线",    "file": "./demos/test_curve_line.txt",
            "sceneId": "20161226110228211818003", action: "view"}
    ]
}

var exampleInterface = [
    {"name": "help.js",      "file": "../lib/ScriptEditor/demos/interface/help.js"}
];

//momoda plugin callback
function external_function(param){
    setTimeout(function(){
        alert(param);
    }, 100);
}