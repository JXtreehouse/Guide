var pathname = window.location.pathname;
document.write('<div class="content-nav">'
+'<ul>'
    +'<li><a class="'+ ((pathname.indexOf('demo_') === -1) || (pathname.indexOf('demo') === -1) ? ' active ' : '') +'" href="./demo.html">小白楼</a></li>'
    +'<li><a class="'+ (pathname.indexOf('subway')!==-1 ? ' active ' : '') +'" href="./demo_subway.html">韩国地铁导航</a></li>'
    +'<li><a class="'+ (pathname.indexOf('security')!==-1 ? ' active ' : '') +'" href="./demo_security.html">地铁监控</a></li>'
    +'<li><a class="'+ (pathname.indexOf('silohouse')!==-1 ? ' active ' : '') +'" href="./demo_silohouse.html">粮仓</a></li>'
    +'<li><a class="'+ (pathname.indexOf('document')!==-1 ? ' active ' : '') +'" href="./demo_document.html">档案馆</a></li>'
+'</ul>'
+'</div>')