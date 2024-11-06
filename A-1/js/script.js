$('.sub').hide();
$('.gnb > li').on('mouseover', function(){
    $('.sub').stop(true).slideDown();
});
$('.gnb > li').on('mouseout', function(){
    $('.sub').stop(true).slideUp();
});
setInterval(function(){
    $('.s_box').delay(2000);
    $('.s_box').animate({marginTop: -300})
    $('.s_box').delay(2000);
    $('.s_box').animate({marginTop: -600})
    $('.s_box').delay(2000);
    $('.s_box').animate({marginTop: 0})
});
$('.tab p').on('click', function(){
    $(this).parent().addClass('active')
    .siblings().removeClass('active')
    return false;
});
$('.notice li:first-child').on('click', function(){
    $('.pop').addClass('active')
});
$('.btn').on('click', function(){
    $('.pop').removeClass('active')
});