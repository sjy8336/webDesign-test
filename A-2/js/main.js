$('.sub_bg').hide();
$('.sub').hide();
$('.gnb > li').on('mouseover', function(){
    $('.sub_bg').stop().slideDown();
    $('.sub').stop().slideDown();
})
$('.gnb > li').on('mouseout', function(){
    $('.sub_bg').stop().slideUp();
    $('.sub').stop().slideUp();
})
setInterval(function(){
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft: -1200});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft: -2400});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft: 0});
})