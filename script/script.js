$(function() {
    $(".hbg_menu, .menu a").on("click", function(event){
        $(".hbg_menu, .menu").toggleClass("active");
        
        //$(".menu").fadeToggle();
        event.preventDefault(); 
    });
});

$(function(){ //smooth scrolling
    $('a[href^="#"]').on("click", function(){
      let adjust = -50;
      let speed = 400;
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top + adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });

/*$(function() {
    $(".menu a").on("click", function(){
        location.href = $(this).attr("href");
    });
});*/