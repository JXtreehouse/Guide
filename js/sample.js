var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/javascript");

var btn = document.getElementById('btn');
var iframe = document.getElementById('ifId');

function f1() {
    var text = editor.getValue();
    var scripts = iframe.contentWindow.document.getElementsByTagName('script');
    var script = scripts[scripts.length-1];
    script.innerHTML = text;
}
btn.onclick = function() {
    document.getElementById('ifId').contentWindow.location.reload(true); 
    if (iframe.attachEvent){  // IE 
        iframe.attachEvent("onload", f1);  
    } else {  // 非IE  
        iframe.onload = f1;
    }  
}