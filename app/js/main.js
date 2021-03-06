$(document).ready(function() {
    $(".menu-icon i").on("click", function() {
        $("nav ul").toggleClass("showing");
    });

    $('.mySlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $("nav").addClass("black");
    }
    else {
        $("nav").removeClass("black");
    }
});

$('.scroll-btn').click(function(){
    $("html, body").animate({ scrollTop: $(window).height()}, 800);
    return false;
});