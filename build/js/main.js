$(document).ready(function() {
    $('.js-objects-popup-toggle').click(function(){
        var thisBlock = $(this).closest('.objects'),
            ofl = $(this).offset().left;

        if ($(window).outerWidth() > 992) {
            thisBlock.find('.objects__popup').css('width', ofl + 270);
        } else {
            thisBlock.find('.objects__popup').stop().slideToggle(400);
        }

        thisBlock.toggleClass('popup-opened');
    });

    $('.js-page-menu-open').click(function () {
        $('.js-page-menu').addClass("opened");
    });


    $('.js-page-menu-close').click(function () {
        $('.js-page-menu').removeClass("opened");
    });

    $(".js-dropmenu-toggle").click(function (e) {
        e.preventDefault();
        $(this).closest(".js-dropmenu").toggleClass('opened');
        $(this).closest(".js-dropmenu").find(".main-nav-item__dropmenu").slideToggle('400');
    });

    $("[data-fancybox]").fancybox({
        buttons: [
            'close'
        ]
    });

    $(".js-slider-button").click(function () {
        var itemNumber = $(this).data('item'),
            textTitle = $(this).text();

        $('.js-slider-title').text(textTitle);
        $(".js-slider-button").removeClass('active');
        $('.js-slider-item').removeClass('active');
        $('.js-slider-item[data-item="' + itemNumber + '"]').addClass("active");
        $(this).addClass("active");
    });


    $('.js-open-popup').click(function (e) {
        e.preventDefault();
        $('body').addClass('ovh');

        var targetPopup = $(this).data('target-popup');


        console.log(targetPopup);
        $('.js-popups-overlay').fadeIn(400);
        $('.js-popups').fadeIn(400);

        $('[data-popup-name='+targetPopup+']').fadeIn(400);
    });

    $(".js-close-popups").click(function () {
        $('body').removeClass('ovh');

        $('.js-popups-overlay').fadeOut(400);
        $('.js-popups').fadeOut(400);

        $('[data-popup-name]').fadeOut(400);
    });

});