$('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
})

var scroll = $(window).scrollTop();
if (scroll > 0) {
    $('.header').addClass('bg');
}

$(window).on('scroll', function () {
    scroll = $(window).scrollTop();
    if (scroll > 0) {
        $('.header').addClass('bg');
    } else {
        $('.header').removeClass('bg');
    }
});