/**
 * Created by Administrator on 2017/1/4.
 */

new IScroll("#wrapper", {
    probeType: 2
});
new IScroll("#wrappe", {
    probeType: 2
});
//tab切换
swiper(".swiper-o",".section-nav","nav-bg","click");

function swiper(clas,tab,tabs,onli){
    //tab切换
    var mySwiper=new Swiper(clas,{
        /*圆点可点击*/
        paginationClickable :true,
        /*是否手指滑动效果*/
        touchRatio: 1,
        /*第几个swiper的位置*/
        initialSlide: 0,
        onSlideChangeStart: function (swiper) {
            //当前的下标
            var idx = swiper.activeIndex;
            //主页4项tab滑动
            showCurr(idx)
        }
    });
    //主页4项tab滑动
    function showCurr(id) {
        $(tab).children().eq(id).addClass(tabs).siblings().removeClass();
    }

    //主页4项tab切换
    var mls = $(tab).children("span");
    mls.on(onli, function () {
        //点击的第几个下标
        var index = $(this).index();
        mls.eq(index).addClass(tabs).siblings().removeClass();
        mySwiper.slideTo(index);
    });
}


document.touchmove=function(e){
    e.preventDefault();
};
