$('.gnb > li').on('mouseover', function(){
    $('.gnb > li').find('.sub').stop().slideUp();
    $(this).find('.sub').stop().slideDown();
});;
$('.gnb > li').on('mouseout', function(){
    $('.gnb > li').find('.sub').stop().slideUp();
});
setInterval(function(){
    $('.slidebox li:first-child').fadeOut()
    .next('li').fadeIn()
    .end().appendTo('.slidebox');
}, 2000);
$('.tab > div p').on('click', function(){
    $(this).parent().addClass('on').siblings().removeClass('on');
});
$('#pop').hide();
$('.notice ul li:first-child').on('click', function(){
    $('#pop').show();
});
$('#pop button').on('click', function(){
    $('#pop').hide();
});