// $('.gallery__main').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.gallery__thumbnails',
// });

$('.statistics__cards').slick({
    dots: true,
    slidesToShow: 1,
    arrows: false,
    mobileFirst: true,

    responsive: [
        {
            breakpoint: 992,
            settings: "unslick"
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                adaptiveHeight: true,
            }
        },
    ]
});

$('.cases__items').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-right"></i></button>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
            }
        },
    ]
});

$('.clients__list').slick({
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 3,
            }
        },
    ]
});

// $('#productGallery .tabs-triggers__item').click(function() {
//     $('.gallery__main').slick('refresh');
//     $('.gallery__thumbnails').slick('refresh');
// })