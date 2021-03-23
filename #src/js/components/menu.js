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
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight - 30;

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

// Ативное состояние меню при прокрутке страницы 
let section = $('.menu-aim'),
    nav = $('.header__body'),
    navHeight = nav.outerHeight(); // получаем высоту навигации 
// поворот экрана 
window.addEventListener('orientationchange', function () {
    navHeight = nav.outerHeight();
}, false);

$(window).on('scroll', function () {
    const position = $(this).scrollTop();

    navHeight = nav.outerHeight();
    console.log(navHeight);

    section.each(function () {
        const top = $(this).offset().top - navHeight - 40,
            bottom = top + $(this).outerHeight();

        if (position >= top && position <= bottom) {
            nav.find('.header__menu-link').removeClass('active');
            section.removeClass('active');

            $(this).addClass('active');
            nav.find('.header__menu-link[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});