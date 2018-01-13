/**
 * Created by hzy on 2016/12/29 0029.
 */
function initScriptEditor() {
    var editor = ace.edit("editor");
    editor.getSession().setUseWorker(true);
    editor.setTheme("ace/theme/monokai");
    editor.setFontSize(16);
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
};

function loadScript(){
    var code = nodeJS.readFile(config.currentFile);
    var el = document.getElementById("editor");
    el.env.editor.setValue(code, 1);
}

function saveScript(){
    var el = document.getElementById("editor");
    var code = el.env.editor.getValue();
    nodeJS.writeFile(config.currentFile, code);
}

$(document).bind("keydown", false, function(event){
    if(event.keyCode == 83 && event.ctrlKey){
        event.preventDefault();
        event.stopPropagation();
        saveScript();
    }
})

var config = {
    currentFile: "./ScriptEditor/demos/test_gui.txt"
};

$(function(){
    initScriptEditor();
    loadScript();

    setInterval(function(){
        saveScript();
    }, 1000);
});