$(window).scroll(function(){
	var $scrollTop = $(window).scrollTop()
	if($scrollTop>0)
		$("#header").addClass("bg-dark")
	else
		$("#header").removeClass("bg-dark")
})