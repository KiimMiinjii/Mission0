jQuery(document).ready(function(){
    // .navi 의 li 태그에 mouseover 이벤트 설정
    $('.navi > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });
    
});