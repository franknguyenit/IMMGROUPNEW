import $ from 'jquery';
export default class header {
    constructor(element) {
        this.html = $('html');
        this.header = $(element);
        $(window).resize(this.onResizeWindow.bind(this));
        this.pinHeader();
        this.element = element;
    }

    onResizeWindow() {
        this.pinHeader();
    }

    pinHeader() {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > 0) {
            this.header.addClass('fixed-menu');
        }
        $(window).scroll(function() {
            let scrollTop = $(window).scrollTop();
            if (scrollTop > 0) {
                this.header.addClass('fixed-menu');
            } else {
                this.header.removeClass('fixed-menu');
            }
        }.bind(this));
    }
}