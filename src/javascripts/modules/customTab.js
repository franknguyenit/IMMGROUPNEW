import $ from 'jquery';
export default class customTab {
    constructor(element) {
        this.element = $(element);
        this.customTab();
        this.firstLoadMap();
    }
    customTab() {
        $('ul.tabs li').click(function() {
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
            if ($(window).innerWidth() < 767) {
                $(this).next('.content-mb').toggleClass('open-map').html($("#" + tab_id).addClass('current'));
                $(this).next('.content-mb').siblings.removeClass('open-map')
            }
        })
    }
    firstLoadMap() {
        if ($(window).innerWidth() < 767) {
            $('ul.tabs li.current').next('.content-mb').toggleClass('open-map').html($("#tab-1").addClass('current'))
        }
    }
}