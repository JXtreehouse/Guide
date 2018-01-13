// 设置js编辑器
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

// 设置html编辑器
var editorHtml = ace.edit('editor_html');
editorHtml.setTheme("ace/theme/monokai");
editorHtml.session.setMode("ace/mode/html");

// 设置css编辑器
var editorCss = ace.edit('editor_css');
editorCss.setTheme("ace/theme/monokai");
editorCss.session.setMode("ace/mode/css");

// 获取标签
var btn = document.getElementById('btn');
var iframe = document.getElementById('ifId');

// 获取代码添加到iframe页面中
function f1() {
    var textCss = editorCss.getValue();
    var style = iframe.contentWindow.document.getElementsByTagName('style')[1];
    style.innerHTML = textCss;
    var textHtml = editorHtml.getValue();
    var content = iframe.contentWindow.document.getElementById('content');
    content.innerHTML = textHtml;
    var text = editor.getValue();
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