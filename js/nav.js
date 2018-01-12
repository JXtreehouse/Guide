var pathname = window.location.pathname;

document.write('<div class="content-nav">'
+'<ul>'
    +'<li><a id="start" class="'+ ((pathname.indexOf('index_') === -1) || (pathname.indexOf('.') === -1) ? ' active ' : '') +'" href="./index.html">快速开始</a></li>'
    +'<li><a id="index-load" class="'+ (pathname.indexOf('load')!==-1 ? ' active ' : '') +'" href="./index_load.html">加载3D场景</a></li>'
    +'<li><a href="">场景对象</a></li>'
    +'<li><a href="">3D与事件</a></li>'
    +'<li><a href="">3D选择器</a></li>'
    +'<li><a href="">3D控件</a></li>'
    +'<li><a href="">面板UI</a></li>'
    +'<li><a href="">3D动画</a></li>'
+'</ul>'
+'</div>');