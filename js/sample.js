// 设置js编辑器
var editor = ace.edit("editor");
editor.getSession().setUseWorker(true);
editor.setTheme("ace/theme/monokai");
// editor.setFontSize(16);
//editor.setTheme("ace/theme/tomorrow");
editor.getSession().setMode("ace/mode/javascript");
editor.getSession().setUseWrapMode(true);
editor.getSession().setWrapLimitRange(null, null);
editor.setShowPrintMargin(false);
editor.$blockScrolling = Infinity;

ace.config.loadModule('ace/ext/tern', function () {
    editor.setOptions({
        /**
         * Either `true` or `false` or to enable with custom options pass object that
         * has options for tern server: http://ternjs.net/doc/manual.html#server_api
         * If `true`, then default options will be used
         */
        enableTern: {
            /* http://ternjs.net/doc/manual.html#option_defs */
            defs: [],
            /* http://ternjs.net/doc/manual.html#plugins */
            plugins: {
                doc_comment: {
                    fullDocs: true
                }
            },
            /**
             * (default is true) If web worker is used for tern server.
             * This is recommended as it offers better performance, but prevents this from working in a local html file due to browser security restrictions
             */
            useWorker: true,
            /* if your editor supports switching between different files (such as tabbed interface) then tern can do this when jump to defnition of function in another file is called, but you must tell tern what to execute in order to jump to the specified file */
            switchToDoc: function (name, start) {
                console.log('switchToDoc called but not defined. name=' + name + '; start=', start);
            },
            /**
             * if passed, this function will be called once ternServer is started.
             * This is needed when useWorker=false because the tern source files are loaded asynchronously before the server is started.
             */
            startedCb: function () {
                //once tern is enabled, it can be accessed via editor.ternServer
                console.log('editor.ternServer:', editor.ternServer);
            },
        },
        /**
         * when using tern, it takes over Ace's built in snippets support.
         * this setting affects all modes when using tern, not just javascript.
         */
        enableSnippets: true,
        /**
         * when using tern, Ace's basic text auto completion is enabled still by deafult.
         * This settings affects all modes when using tern, not just javascript.
         * For javascript mode the basic auto completion will be added to completion results if tern fails to find completions or if you double tab the hotkey for get completion (default is ctrl+space, so hit ctrl+space twice rapidly to include basic text completions in the result)
         */
        enableBasicAutocompletion: false,

    });


    function load(file, c) {
        var xhr = new XMLHttpRequest();
        xhr.open("get", file, true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) c(xhr.responseText, xhr.status);
        };
    }

    function newAceDoc(documentText) {
        var EditSession = ace.require("ace/edit_session").EditSession;
        return new EditSession(documentText, "ace/mode/javascript");
    }

    function loadInterface(file, name){
        load(file, function(body) {
            server.addDoc(name, newAceDoc(body));
        });
    }

    var server = editor.ternServer;

    for(var i in exampleInterface){
        loadInterface(exampleInterface[i].file, exampleInterface[i].name);
    }
});

// var code = "var app = new t3d.App({\n\
//     el: 'div3d',  // 渲染到dom \n\
//     ak: 'app_test_key',      // 密钥 \n\
//     url: 'https://speech.uinnova.com/static/models/hw2', // 所渲染的3D模型\n\
//     complete: function () { // 加载完成回调    \n\
//         console.log('app scene loaded');\n\
//         app.buildings[0].floors[0].roofNode.visible = false;\n\
//     }\
// }); "

// setTimeout(function(){
    // var el = document.getElementById("editor");
    // el.env.editor.setValue(code, 1);
// }, 1000);


// 设置html编辑器
var editorHtml = ace.edit('editor_html');
editorHtml.setTheme("ace/theme/monokai");
editorHtml.getSession().setMode("ace/mode/html");

// 设置css编辑器
var editorCss = ace.edit('editor_css');
editorCss.setTheme("ace/theme/monokai");
editorCss.getSession().setMode("ace/mode/css");

// 获取标签
var btn = document.getElementById('btn');
var iframe = document.getElementById('ifId');

// 获取代码添加到iframe页面中
function f1() {
    var textCss = editorCss.getValue();
    var textHtml = editorHtml.getValue();
    var text = editor.getValue();
    // 浏览器
    var style = iframe.contentWindow.document.getElementsByTagName('style')[1];
    style.innerHTML = textCss;
    var content = iframe.contentWindow.document.getElementById('content');
    content.innerHTML = textHtml;
    var scripts = iframe.contentWindow.document.getElementsByTagName('script');
    var script = scripts[scripts.length-1];
    script.innerHTML = text;
}
// 注册提交代码事件
btn.onclick = function() {
    document.getElementById('ifId').contentWindow.location.reload(true); 
    if (iframe.attachEvent){  // IE 
        iframe.attachEvent("onload", f1);  
    } else {  // 非IE  
        iframe.onload = f1;
    }  
}

// 编辑器切换
var btnObjes = document.getElementsByClassName('btn-p');
var editorObjes = document.getElementsByClassName('editor');
var l = btnObjes.length;
for(var i = 0; i < l; i++) {
    btnObjes[i].setAttribute('index', i);
    btnObjes[i].onclick = function() {
        for(var j = 0; j < l; j++) {
            btnObjes[j].className = 'btn-p';
            editorObjes[j].className = 'editor';
        }
        this.className = 'btn-p active';
        editorObjes[this.getAttribute('index')].className = 'editor active';
        editor.setTheme("ace/theme/monokai");
        editorHtml.setTheme("ace/theme/monokai");
        editorCss.setTheme("ace/theme/monokai");
    }
}