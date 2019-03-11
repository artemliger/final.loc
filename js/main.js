$(document).ready(function() {
    $('.menu_trigger').on("click", function() {
        $('.nav').slideToggle('slow');
    });

    $('.carusel').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    });

});