;
(function (win) {
    let doc = win.document;
    let docEl = doc.documentElement;
    let _meta = docEl.querySelector("meta[name='viewport']");
    // viewport-fit=cover，设置页面占满整个屏幕
    _meta.setAttribute("content", "initial-scale=.5, maximum-scale=.5, minimum-scale=.5, user-scalable=no,viewport-fit=cover");
    function refreshRem() {
        let _width = docEl.getBoundingClientRect().width;
        let _rem = _width / 10;
        docEl.style.fontSize=_rem+'px';
    }
    refreshRem();
    // 监听页面缩放事件
    win.addEventListener('resize',()=>{
        refreshRem();
    });
})(window)