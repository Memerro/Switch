$(document).ready(function() {
    $(".menu-icon i").on("click", function() {
        $("nav ul").toggleClass("showing");
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

$(document).ready(function() {
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