$('.sub').hide();
$('.gnb > li').on('mouseover', function(){
    $(this).find('.sub').stop().slideDown();
})
$('.gnb > li').on('mouseout', function(){
    $('.sub').stop().slideUp();
})
$('.slidebox a:gt(0)').hide();
setInterval(function(){
    $('.slidebox a:first-child').fadeOut()
    .next('a').fadeIn()
    .end().appendTo('.slidebox');
}, 2000)
$('.tab > div h2').on('click', function(){
    $(this).parent().addClass('on').siblings().removeClass('on');
})
$('#pop').hide();
$('.notice ul li:first-child').on('click', function(){
    $('#pop').stop().show();
})
$('#pop button').on('click', function(){
    $('#pop').stop().hide();
})