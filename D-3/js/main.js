$('.sub').hide();
$('.sub_bg').hide();
$('.gnb > li').on('mouseover', function(){
    $('.sub_bg').stop().fadeIn();
    $('.sub').stop().fadeIn();
})
$('.gnb > li').on('mouseout', function(){
    $('.sub_bg').stop().fadeOut();
    $('.sub').stop().fadeOut();
})