$(document).ready(function () {

    $('header a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var anchor = this.hash;
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 77
        }, 1500);
    });//scroll якорів

    // Header Scroll
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 250) {
            $('.navbar').addClass('fixed');
        } else {
            $('.navbar').removeClass('fixed');
        }
    });
});