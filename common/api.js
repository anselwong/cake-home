(function() {
    const protocolStr = document.location.protocol
    switch (protocolStr) {
        case 'https:':
            // 指定https访问类型，具体见百度地图API加载方式：http://www.jiazhengblog.com/blog/2011/06/28/284/
            window.HOST_TYPE = '2'
            break
        default:
            break
    }

    window.BMap_loadScriptTime = (new Date).getTime();
    document.write('<script type="text/javascript" src="https://api.map.baidu.com/getscript?v=2.0&ak=aMA3Gfot3Hi3L6xQqyvd4qnEYShRhDxQ&s=1&services=&t=20190511111209"></script>');
})();