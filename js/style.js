/**
 * Created by Administrator on 2017/1/4.
 */

new IScroll("#wrapper", {
    probeType: 2
});
new IScroll("#wrappe", {
    probeType: 2
});
//tab�л�
swiper(".swiper-o",".section-nav","nav-bg","click");

function swiper(clas,tab,tabs,onli){
    //tab�л�
    var mySwiper=new Swiper(clas,{
        /*Բ��ɵ��*/
        paginationClickable :true,
        /*�Ƿ���ָ����Ч��*/
        touchRatio: 1,
        /*�ڼ���swiper��λ��*/
        initialSlide: 0,
        onSlideChangeStart: function (swiper) {
            //��ǰ���±�
            var idx = swiper.activeIndex;
            //��ҳ4��tab����
            showCurr(idx)
        }
    });
    //��ҳ4��tab����
    function showCurr(id) {
        $(tab).children().eq(id).addClass(tabs).siblings().removeClass();
    }

    //��ҳ4��tab�л�
    var mls = $(tab).children("span");
    mls.on(onli, function () {
        //����ĵڼ����±�
        var index = $(this).index();
        mls.eq(index).addClass(tabs).siblings().removeClass();
        mySwiper.slideTo(index);
    });
}


document.touchmove=function(e){
    e.preventDefault();
};
