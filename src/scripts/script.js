$(document).ready(function () {
    new WOW(({
        animateClass: 'animate__animated'
    })).init();

    $('#burger').click(() => {
        $('.menu').addClass('open');
    })

    $('#menu-close').click(() => {
        $('.menu').removeClass('open');
    })

    $('#main-button').click(() => {
        $('#food')[0].scrollIntoView({behavior: "smooth"});
    })

    let modal = $('.modal');
    $('.food__card_img').click((event) => {
        $('.modal__content').attr('src', $(event.target).attr('src'));
        $('.modal__caption').text($(event.target).parent().next().text());
        modal.fadeIn();
    })

    modal.click((event) => {
        if (!$(event.target).is('img')) {
            modal.fadeOut();
        }
    })

    $('.modal__close').click(() => {
        modal.fadeOut();
    })

    $('.food__card_button').click((event) => {
        $('.form__input:nth-child(3)').val($(event.target).prev().prev().prev().text().toUpperCase());
        $('#order')[0].scrollIntoView({behavior: "smooth"});
        $('.form__input:first-child')[0].focus();
    })

    let name = $('#name');
    let phone = $('#phone');
    let position = $('#position');
    let error = $('.form__error')

    phone.inputmask({
        "mask": "+7 (999) 999-99-99"
    });

    $('#order-button').click(() => {
        error.hide();

        console.log(!name.val())
        if(!name.val()) {
            error.fadeIn();
            name.focus()
            return
        }
        if(!phone.val() || !phone.inputmask('isComplete')) {
            error.fadeIn();
            phone.focus();
            return
        }
        if(!position.val()) {
            error.fadeIn();
            position.focus();
            return
        }

        $('#form *').hide();
        $('.order__success').fadeIn();
    })

});