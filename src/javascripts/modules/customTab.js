import $ from 'jquery';
export default class customTab {
    constructor(element) {
        this.element = $(element);
        this.customTab();
    }
    customTab() {
        $('ul.tabs li').click(function() {
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
            if ($(window).innerWidth() < 767) {
                $("html, body").animate({
                    scrollTop: $('.map__wrap').offset().top - 75
                }, 1000);
            }
        })
    }
}