$('.sub').stop(true).hide()
$('.gnb > li').on('mouseover',function(){
    $('.sub').stop(true).show();
});
$('.gnb > li').on('mouseout',function(){
    $('.sub').stop(true).hide();
});
setInterval(function(){
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft: -1200})
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft: -2400})
    $('.slidebox').delay(2000);
    $('.slidebox').animate({marginLeft: 0})
})
$('.tab div p').on('click', function(){
    $(this).parents().addClass('on').siblings().removeClass('on')
    return false
});
$('#popup').hide()
$('.notice ul li:first-child').on('click', function(){
    $('#popup').stop().show()
    $('#popup button').on('click', function(){
        $('#popup').stop().hide()
    })
})