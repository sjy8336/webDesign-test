$('.gnb > li .sub').hide();
$('.gnb > li').on('mouseover', function(){
    $(this).find('.sub').stop().slideDown();
});
$('.gnb > li').on('mouseout', function(){
    $(this).find('.sub').stop().slideUp();
});
setInterval(function(){
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginTop: -400})
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginTop: -800})
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginTop: 0})
})
$('.tab > div p').on('click', function(){
    $(this).parents().addClass('on').siblings().removeClass('on')
})
$('#pop').hide();
$('.notice ul li:first-child').on('click', function(){
    $('#pop').stop().show();
})
$('#pop button').on('click', function(){
    $('#pop').stop().hide();
})