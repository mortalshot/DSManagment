const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');


if (iconMenu) {
    iconMenu.addEventListener('click', function () {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    })
}

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

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;

        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('active')) {
                removeActive();
            }

            $('body,html').animate({ scrollTop: gotoBlockValue }, 1000);
            e.preventDefault();
        }
    }

    function removeActive() {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
    }
}