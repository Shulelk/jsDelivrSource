var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '＞︿＜ 不要离开我!';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = 'ヾ(^▽^*))) 你回来啦!';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});