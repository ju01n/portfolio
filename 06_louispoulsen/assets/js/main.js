$(function () {
    //헤더 스크롤 효과
    var Scroll = 0;
    var prevScrollTop = $(window).scrollTop(),
        curr = $(window).scrollTop();
    $(window).scroll(function (e) {
        e.preventDefault();
        curr = $(this).scrollTop();

        if (curr < prevScrollTop) {
            $(".header-wrap").addClass('active');
            $(".header-wrap").removeClass('hide');

            if (curr >= 100) {
                $('.header-wrap').addClass('active');
            } else {
                $('.header-wrap').removeClass('active');
            }
        } else if (curr > prevScrollTop) {
            $(".header-wrap").removeClass('active');
            $(".header-wrap").addClass('hide');
        }
        prevScrollTop = curr;
    });

    //전체메뉴아이콘 클릭시 tab-menu
    $('.tab-menu').click(function (e) {
        e.preventDefault();
        $('.tab-area').animate({top: 0}, 100);
    })

    //로딩페이지
    gsap.to('.loading', {
        delay: .5,
        opacity: 0,
        display: 'none',
        onComplete: function () {
            instro.play
        }
    })

    //인트로 텍스트
    introTxt = gsap.timeline({}),
    introTxt
        .to('.sc-intro .intro-txt', {yPercent: 100})
        .addLabel('a')
        .to('.sc-intro .intro-txt', {
            yPercent: 0,
            duration: 0.7
        }, 'a')

    //탭메뉴 클릭
    $('.btn-menu').click(function (e) {
        e.preventDefault();
        $('.tab-area').animate({
            top: 0
        }, 1000)
    })
    $('.btn-close').click(function (e) {
        e.preventDefault();
        $('.tab-area').animate({
            top: '-100%'
        }, 1000)
    })


    //sc-sns 이미지 스케일링
    const snsImg = gsap
        .timeline({
            scrollTrigger: {
                trigger: ".sc-service",
                start: "bottom 60%"
            }
        })
        .addLabel('c')
    snsImg
        .to('.sc-sns .img-box.bg01', {
            scale: 2,
            opacity: 1,
            duration: 1
        }, 'c')
        .to('.sc-sns .img-box.bg02', {
            scale: 2,
            opacity: 1,
            duration: 1
        }, 'c')
        .to('.sc-sns .img-box.bg03', {
            scale: 2,
            opacity: 1,
            duration: 1
        }, 'c')
//sc-sns account text 스크롤효과
let accTxt = gsap.timeline();
accTxt.to(".account-text", {
  x:-3000,
  duration:50,
  repeat:Infinity,
  ease:'linear'
})
let acc01= gsap.timeline();
acc01.to('.account-text', {
  xPercent:40,
  scrollTrigger:{
    trigger:".sc-sns",
    top:"top 30%",
    end:"bottom",
    scrub:2
  }
})

    //sc-proejct group-right 데스크탑에서만 적용하기 
    ScrollTrigger.matchMedia({
        "(min-width: 1024px)": function () {
            $('.scroll').each(function (i, el) {
                child = $(this).find('img')
                scroll = gsap.timeline({
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        end: "bottom top",
                        scrub: 1
                    }
                })
                scroll
                    .addLabel('a')
                    .to(el, {
                        yPercent: -10
                    }, 'a')
                    .to(child, {
                        'object-position': '0 -50px'
                    }, 'a')
            })
        }
    })

    $('.sc-projects .img-box img').each(function (i, el) {
        gsap.to(el, {
            duration: 1.8,
            scale: 1,
            ease: "power4.easeIn-out",
            scrollTrigger: {
                trigger: el,
                start: "top 70%"
            }
        })
    })

    //sc-product gorup-left 스크롤효과
    $('.project-item.scroll2 img').each(function (i, el) {
        gsap.to(el, { //개개인이 모두 선택되어 쓸 수 있음
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "bottom top",
                scrub: 1
            },
            yPercent: -10
        })
    })
    //sc-product group-rigt
            $('.project-item.scroll img').each(function (i, el) {
                gsap.to(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        end: "bottom top",
                        scrub: 1
                    },
                    yPercent: -10
                })
            })


    //sc-introduce 이미지 스케일링
    const imgScale = gsap.timeline({
            scrollTrigger: {
                trigger: ".sc-visual .visual-txt",
                start: "top"
            }
        })
        .addLabel('b')
        imgScale.to('.sc-introduce .img-thumb.img1', {scale: 2,opacity: 1,duration: .9}, 'b')
        .to('.sc-introduce .img-thumb.img2', {scale: 2,opacity: 1,duration: .9}, 'b')

    //sc-introduce 이미지 스크롤효과
    const imgScroll = document.querySelectorAll('.img-thumb img');
    imgScroll.forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element.parentElement,
                start: "0% 100%",
                end: "bottom top",
                scrub: 1
            },
            y: -30
        })
    });

    //line-show
    $('.sc-service .line.line1').each(function (i, el) {
        gsap.to(el, { //개개인이 모두 선택되어 쓸 수 있음
            scrollTrigger: {
                trigger: el,
                start: "top 50%",
                end: "top"
            },
            width: '100%'
        })
    })
    const lineshow = document.querySelectorAll('.line.line2');
    lineshow.forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "bottom 70%",
                end: "top"
            },
            width: '100%'
        })
    });

    //word text reveal
    $('.word').each(function (i, el) {
        gsap.from(el, {
            yPercent: 100,
            scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "top",
                stagger: 0.5
            }
        })
    })

    // sc-sns 스크롤시 텍스트효과 const snsScroll = gsap.timeline({     scrollTrigger:{
    // trigger:".sc-sns",         start:"-50%",         end:"bottom",
    // scrub:4     },xPercent:10   }) 새로고침 시 현재페이지 유지
    history.scrollRestoration = "auto";

}) //지우지말기