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

// $('#productGallery .tabs-triggers__item').click(function() {
//     $('.gallery__main').slick('refresh');
//     $('.gallery__thumbnails').slick('refresh');
// })