$('.sub').hide();
$('.gnb > li').on('mouseover', function(){
    $(this).find('.sub').stop().slideDown();
})
$('.gnb > li').on('mouseout', function(){
    $('.sub').stop().slideUp();
})
setInterval(function(){
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft: -1320});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft: -2640});
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft: 0});
})
$('#pop').hide();
$('.notice ul li:first-child').on('click', function(){
    $('#pop').stop().show();
})
$('#pop button').on('click', function(){
    $('#pop').stop().hide();
})