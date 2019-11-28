import bowser from 'bowser';
import slick from 'slick-carousel';
import matchHeight from 'jquery-match-height';
class globalSite {
    static showContentWhenPageLoadFinish() {
        setTimeout(function() {
            $('.over-loader').fadeOut('slow');
        }, 500);
    }

    static checkDevice() {
        let html = $('html');
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            html.addClass('touch');
        } else {
            html.addClass('no-touch');
        }
    }
    static detectBrowser() {
        var browserName = bowser.name;
        var browserVersion = bowser.version;
        var $body = $('html')
        if (browserName === 'Chrome') {
            $body.addClass('chrome');
        }
        if (browserName === 'Firefox') {
            $body.addClass('firefox');
        }
        if (browserName === 'Internet Explorer') {
            $body.addClass('ie');
        }
        if (browserName === 'Microsoft Edge') {
            $body.addClass('edge');
        }
        if (browserName === 'Safari') {
            $body.addClass('safari');
        }
    }
    static openMenu() {
        $('.dl-trigger').click(function() {
            $('.overlay-layer').toggleClass('d-block').css('z-index', '999');
            $('.header__toggle-menu').toggleClass('open-menu')
        });
    }
    static openSearchBox() {
        $('#btnSearch').click(function() {
            $('.header__search-overlay').toggleClass('d-flex');
            $(this).toggleClass('search-open');
        });
    }
    static selectCustom() {
        $('select').each(function() {
            var $this = $(this),
                numberOfOptions = $(this).children('option').length;

            $this.addClass('select-hidden');
            $this.wrap('<div class="select"></div>');
            $this.after('<div class="select-styled"></div>');

            var $styledSelect = $this.next('div.select-styled');
            $styledSelect.text($this.children('option').eq(0).text());

            var $list = $('<ul />', {
                'class': 'select-options'
            }).insertAfter($styledSelect);

            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }

            var $listItems = $list.children('li');

            $styledSelect.click(function(e) {
                e.stopPropagation();
                $('div.select-styled.active').not(this).each(function() {
                    $(this).removeClass('active').next('ul.select-options').hide();
                });
                $(this).toggleClass('active').next('ul.select-options').toggle();
            });

            $listItems.click(function(e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
                $list.hide();
            });

            $(document).click(function() {
                $styledSelect.removeClass('active');
                $list.hide();
            });

        });
    }
    static scrollTop() {
        $(document).ready(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('#to_top').fadeIn();
                } else {
                    $('#to_top').fadeOut();
                }
            });
            $('#to_top').click(function() {
                $('body,html').animate({
                    scrollTop: 0
                }, 600);
                return false;
            });
        })
    }
    static showStickyRegister() {
        $('#registerSticky').click(function() {
            $(this).find('.register__sticky-btn').toggleClass('open');
            $(this).find('.register__sticky-form ').toggleClass('d-none');
        });
    }
    static compareSameHeight() {
        function setSameHeight(e) {
            if ($(window).innerWidth() > 767) {
                $('.content-row').each(function() {
                    var highestBox = 0;
                    $(this).find(e).each(function() {
                        if ($(this).height() > highestBox) {
                            highestBox = $(this).height();
                        }
                    });
                    $(this).find(e).height(highestBox);
                })
            }
        }
        setSameHeight($('.content_1'));
        setSameHeight($('.content_2'));
        setSameHeight($('.content_3'));
        setSameHeight($('.content_4'));
        setSameHeight($('.content_5'));
        setSameHeight($('.content_6'));
        setSameHeight($('.content_7'));
        setSameHeight($('.content_8'));
    }
    static blogDetailsCustom() {
        var getImg = $('.blog-details__main-wrap p img');
        getImg.css("margin", "auto");
        getImg.each(function() {
            var imgW = $(this).width();
            if ($(this).parent('p').next().children().is('em')) {
                $(this).parent('p').next().width(imgW).css({ 'margin': '0 auto 1rem', 'font-size': '14px', 'background-color': '#ededed', "padding": '.7rem', "text-align": 'center' });
                $(this).parent('p').css({ "margin-bottom": "0", "text-align": "center" });
            }
        });
    }
    static slickCustom() {
        $('.img__slide-bottom4').slick({
            dots: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                },
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }]
        });
        $('.project__slider-img').slick({
            dots: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [{
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }]
        });
    }
}
export default globalSite;