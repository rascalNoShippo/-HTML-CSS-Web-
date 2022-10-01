$(function() {
	$(".hbg_menu, .menu a").on("click", function(event){
		$(".hbg_menu, .menu").toggleClass("active");
		event.preventDefault(); 
	});
});

$(function() {
	$(".logo, main").on("click", function(){
  	$(".hbg_menu, .menu").removeClass("active");
	});
});


$(function(){ //smooth scrolling
	$('a[href^="#"]').on("click", function(){
		let adjust = 0;
		let speed = 400;
		let href= $(this).attr("href");
		let target = (href == "#" || href == "" ? 0 : $(href).offset().top - $("#main_top").offset().top);
		let position = target + adjust;
		$('main').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});

let appear = false;

$(function(){
	if($("main").scrollTop() > 100){
		$("#top_btn").css({"bottom":"10px"});
		appear = true;
	}
});

$(function(){
	$("main").scroll(function(){
		if($("main").scrollTop() > 100){
			appear = true;
			$("#top_btn").css({"bottom":"10px"});
		}else{
			appear = false;
			$("#top_btn").css({"bottom":"-60px"});
		}
	});
});

$(function(){ // go top button action
	$("#top_btn").on("click", function(){
		let speed = 400;
		$('main').animate({scrollTop:0}, speed, 'swing');
	})
});

/*$(function() {
	$(".menu a").on("click", function(){
		location.href = $(this).attr("href");
	});
});*/