$(".menu > li").mouseenter(function(){
    $(".submenu").stop().slideDown(400);
})
$(".menu> li").mouseleave(function(){
    $(".submenu").stop().slideUp(100);
})
$(window).scroll(function(){
	if ($(this).scrollTop() > 300){
		$('.gototop').addClass('active')
	} else{
		$('.gototop').removeClass('active')
	}
});