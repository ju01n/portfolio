$(function(){
//헤더 스크롤 효과 
var Scroll = 0;
var prevScrollTop = $(window).scrollTop(),
  curr = $(window).scrollTop();
$(window).scroll(function(e){
  e.preventDefault();
  curr = $(this).scrollTop();

  if (curr > prevScrollTop ){
    $(".header-top").addClass('active'); 
    $(".header-top").removeClass('hide'); 

  } else if( curr < prevScrollTop ) {
    $(".header-top").removeClass('active'); 
    $(".header-top").addClass('hide'); 
  }
  prevScrollTop = curr;
});



//sc-new 배너
var swiper = new Swiper(".new-area", {
  slidesPerView: "1.1",
  spaceBetween: 30,
});

//연령별 탭 스와이퍼 
var menu = ['10대여자','10대남자','20대여자','20대남자','30대여자','30대남자']
var swiper = new Swiper(".swiper.rank", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + "</span>";},
  },
});



// layout03 슬라이드
var swiper = new Swiper(".preview-area", {
  slidesPerView: "1",
  spaceBetween: 0,
  pagination: {
    el: ".pagination",
    type: "fraction",
  }
  });

//layout02 스와이퍼
var swiper = new Swiper(".swiper.season", {
  slidesPerView: "4",
  spaceBetween: 8,
  freeMode: true,
});
  



//index - footer 사업자정보
$('.business-title a').click(function(e){
    e.preventDefault();
    $('.business-info .detail').toggleClass('active')
})

})