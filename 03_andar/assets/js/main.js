$(function () {

    // top-banner 슬라이드
    var swiper = new Swiper(".swiper.top-banner", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true
        }
    })


    // 스크롤 시 header 변경
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        target = $('.sc-visual').offset().top;
        if(curr >= target){
            $('.header-wrap').addClass('fixed');
        }
        else{
            $('.header-wrap').removeClass('fixed');
        }
    });
    $(window).trigger('scroll')

    $('.btn-open').click(function(e){
        e.preventDefault()
        $('.menu-top').toggleClass('show');
        $('.menu-bottom').slideToggle();
    })


    //전체메뉴아이콘 클릭시 aside-menu 
        $('.btn-menu').click(function(e){
            e.preventDefault();
            $('.aside-area').animate({left:0},300);
            $('body').addClass('overflow-h');
        })

        $('.btn-close, .dimm').click(function(e){
            e.preventDefault();
            $('.aside-area').animate({left:'-100%'},300);
            $('body').removeClass('overflow-h');
        })

    //aside menu 내 서브 메뉴 클릭
    $('.depth1').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active'); 
        $(this).siblings('.sub-list').slideToggle();})


    //search-area 
    $('.btn-search').click(function(e){
        e.preventDefault();
        $('.search-area').addClass('active');
        $('body').addClass('overflow-h');
    })

    $('.btn-back').click(function(e){
        e.preventDefault();
        $('.search-area').removeClass('active');
        $('body').removeClass('overflow-h');
    })

    //sarch-area submit button
    $('.btn-submit').click(function(e){
        e.preventDefault();
        alert('검색어를 입력해주세요');
    })



    // 메인비주얼슬라이드
    var swiper = new Swiper(".sc-visual .swiper ", {
        loop: true,
        pagination: {
            el: ".swiper-pagination"
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        effect: "fade"
    });


    //카테고리 별 슬라이드
    var swiper = new Swiper(".group-flex02 .swiper", {
        slidesPerView: 2.2,
        spaceBetween: 10,
        freeMode: true,
      });

})