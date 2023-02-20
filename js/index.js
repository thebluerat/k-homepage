// header
$(".menu > li").mouseenter(function(){
    $(".submenu").stop().slideDown(400);
})
$(".menu> li").mouseleave(function(){
    $(".submenu").stop().slideUp(100);
})
// header - menu-btn
$('.menu-btn').click(function(){
    $(this).toggleClass('active');
    $('.menu').toggleClass('on');
})
// header - mobile
$("nav > .menu > li > .submenu").hide();
$("nav > .menu > li").click(function(){
    $(".menu > li > .submenu").slideToggle("fast");
})
// gototop
$(window).scroll(function(){
	if ($(this).scrollTop() > 300){
		$('.gototop').addClass('active')
	} else{
		$('.gototop').removeClass('active')
	}
});
// partner - tab
$('.partner-content').hide().eq(0).show();
$('.partner-title span').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.partner-content').fadeOut();
    $('#' + $(this).attr('data-alt')).fadeIn();
});
// service - tab
$('.service-content').hide().eq(0).show();
$('.service-title a').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.service-content').fadeOut();
    $('#' + $(this).attr('data-alt')).fadeIn();
});
// introduce - TypeIt
new TypeIt("#typing", {
    strings: "Kephas!",
    speed: 30,
    loop: false,
    waitUntilVisible: true,
    afterComplete: function (instance) {
        instance.destroy();
    }
  }).go();