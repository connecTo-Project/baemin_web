// 메뉴페이지 이미지 슬라이드 
$(document).ready(function(){
    var num = 0;

    setInterval(function(){
        if(num < 2){
            num++;
            $('.banner .banner__list').animate({
                left: '-=428'
            },'slow')
        }else{
            num = 0;
            $('.banner .banner__list').animate({
                left: 0
            },'slow')
        }
    },3000)
});