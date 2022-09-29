$(function() {
    $(".hbg_menu, .menu a").on("click", function(event){
        $(".hbg_menu").toggleClass("active");
        $(".menu").fadeToggle();
        event.preventDefault(); 
    });
});

$(function() {
    $(".menu a").on("click", function(){
        location.href = $(this).attr("href");
    });
});