$(function(){
//eng클릭
$('.eng').click(function(e){
    e.preventDefault();
    alert("준비중입니다.");
});

//sc-slide 스크롤효과
const visual2 = gsap.timeline({
    scrollTrigger:{
        trigger:".visual02",
        start : "0% 0%",
        end:"+=800%",
        scrub:5,
        pin:true
    },
})
visual2.to('.visual02 .text-box01 .text1',{opacity:1,left:'8%',color:'#fff'})
.to('.visual02 .text-box01 .text2',{opacity:1,left:'-12%',color:'#fff',delay:1})
.to('.visual02 .text-bg img',{left:'60%'})
.to('.sc-slide .visual02 .text-box01',{opacity:0,})
.to('.visual02 .text-bg img',{left:'50%',top:'50%'})
.to('.visual02 .text-bg img',{scale:6,opacity:0})
.to('.visual02 .dimmed',{opacity:1,visibility:'visible'})
.to('.visual02 .bg-box',{top:0,})
.addLabel('a')
.to('.visual02 .text-box2',{opacity:1,visibility:'visible'},'a')
.to('.visual02 .text-box2 .title',{opacity:1},'a')
.to('.visual02 .text-box2 .title',{opacity:0,top:'40%'})
.to('.visual02 .text-box2 .desc',{opacity:1,top:'50%'},)




//로고 색상 스크롤 시 색상 변경
$(window).scroll(function(event){
	var scTop = $(this).scrollTop();
	var current_top = $(document).scrollTop();
	//console.log(scTop);
	if(current_top >= $('.sc-slogan').offset().top - 500 && current_top < $('.sc-business').offset().top){
		$('.header .inner').addClass('active');
		$('.footer').addClass('active');
	} else {
		$('.header .inner').removeClass('active');
        $('.footer').removeClass('active');
	}

});






//sc-business
const abc = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-business", 
        start:"0% 0%",
        end:"+=500%",
        scrub: 2,
        pin : true
    },
})
abc.addLabel('a')
.to('.scroll01 .sub-text',{ xPercent: 0},'a')
// .to('.scroll02',{ left:0,},'a+=0.1')
.to('.scroll01 .sub-text',{ xPercent: -50},'a')

gsap.to('.sc-business .scroll02',{
    scrollTrigger:{
        trigger:".sub-text",
        start:"40%",
        end:"bottom",
        scrub:5,
    },
    left:'0%'
})





//back-to-top 
$('.btn-top').click(function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop : 0}, 400);
    return false;
})


//sc-visual 스크롤 시 효과 
const dark = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-visual", 
        start:"70%",
        end:"+=100",
        scrub:0,
    },
})
.to('.sc-visual img',{opacity:0})

//sc-slogan 화면 전환
const bright = gsap.timeline({
    scrollTrigger:{
        trigger:".visual02", 
        start:"40%",
        end:"+=50",
        scrub: 1
    },
})
.to('.sc-slogan',{'background':'#fff'})



// const scslogan = gsap.timeline({
//     scrollTrigger:{
//         trigger:".sc-slogan", 
//         start:"70%",
//         end:"+=100",
//         markers:true,
//         scrub: 1
//     },
// })
// .to('.sc-business',{'background-color':'#000'})




// sc-brand text
scrollMoInfo = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc-business',
      start:'30%',
      },
  })
  scrollMoInfo.to('.text-top',.5,{y:0,opacity:1})


// footer text
footertxt = gsap.timeline({
  scrollTrigger:{
    trigger:'.sc-brand',
    start:'40%',
    },
})
footertxt.to('.footer-text',.6,{y:0,opacity:1,stagger:1})



});