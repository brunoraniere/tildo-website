$(document).ready(function() {
    $('.hero .button--header').click(function() {
        const dest = $('.sign');

        $('html').animate({
            scrollTop: dest.offset().top
        }, 700);
    });

    $('.hero .button--main').click(function() {
        const dest = $('.info');

        $('html').animate({
            scrollTop: dest.offset().top
        }, 1500);
    });
});