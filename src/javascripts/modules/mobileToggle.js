import $ from 'jquery';
export default class mobileToggle {
    constructor(element) {
        this.footerToggle();
    }
    footerToggle() {
        if ($(window).innerWidth() < 767) {
            var e = $('.footer__title.has-drop');
            e.append("<span class='arrow_carrot-down'></span>");
            $('.footer__text-wrap').click(function() {
                $(this).find('.footer__link').toggleClass('d-none');
                $(this).find(e).toggleClass('show');
            });
        }
    }
}