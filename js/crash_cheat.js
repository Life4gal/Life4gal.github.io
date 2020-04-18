$(window).load(function () {
//整合页面欺骗特效 window.onload有冲突
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            document.title = '呜呜呜，你不要我了～';
            clearTimeout(titleTime);
        } else {
            $('[rel="icon"]').attr('href', "../../images/favicon.png");
            $('[rel="shortcut icon"]').attr('href', "../../images/favicon.png");
            document.title = '我就知道你会回来啦～';
            titleTime = setTimeout(function () {
                document.title = OriginTitile;
            }, 2000);
        }
    });
});
