var pathname = window.location.pathname;
document.write('<div class="header">'
+'<div class="title">'
    +'<div class="wrapper">'
        +'<h1 class="h1">Thing3d JavaScript API</h1>'
    +'</div>'
+'</div>'
+'<div class="nav">'
    +'<div class="wrapper">'
        +'<ul id="ul1">'
            +'<li><a id="index" class="nav-a' + ((pathname.indexOf('index')!==-1) || (pathname.indexOf('.') === -1) ? ' active ' : '') + '" href="./index.html">快速入门</a></li>'
            +'<li><a id="notebook" class="nav-a' + (pathname.indexOf('notebook')!==-1 ? ' active ' : '') + '" href="./notebook.html">开发手册</a></li>'
            +'<li><a id="sample" class="nav-a' + (pathname.indexOf('sample')!==-1 ? ' active ' : '') + '" href="./sample.html">功能示例</a></li>'
            +'<li><a id="sample" class="nav-a' + (pathname.indexOf('demo')!==-1 ? ' active ' : '') + '" href="./demo.html">demo</a></li>'
        +'</ul>'
    +'</div>'
+'</div>'
+'</div>');

