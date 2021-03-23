// === FORM INPUT FOCUS CONDITION ===
$('.form__input').focus(function() {
    $(this).closest('.form__item-wrapper').addClass('focus');
})
$('.form__input').focusout(function() {
    $(this).closest('.form__item-wrapper').removeClass('focus');
})
// === FORM INPUT FOCUS CONDITION END ===

// === PHONE INPUT MASK START ===
$('.form__input--phone').mask("+7 (999) 999 99 99");
// === PHONE INPUT MASK END ===