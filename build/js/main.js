$(document).ready(function() {
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

});