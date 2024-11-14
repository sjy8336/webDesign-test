$('.sub').hide();
$('.gnb > li').on('mouseover', function(){
    $(this).find('.sub').stop().slideDown();
})
$('.gnb > li').on('mouseout', function(){
    $('.sub').stop().slideUp();
})