$(document).ready(function() {
    $('.navbar-nav li a').click(function() {
        var dest_element = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(dest_element).offset().top
        }, 500, 'easeInOutExpo');
    });

    $(window).scroll(function() {
        CheckHiddenElements();
    });

    CheckHiddenElements();
    AnimateBannerText(false);
});

function CountElementsHasClass(parent_class, check_class) {
    var total_showing_text_elems = 0;

    $(parent_class).each(function(index) {
        if ($(this).hasClass(check_class)) {
            total_showing_text_elems++;
        }
    });

    return total_showing_text_elems;
}

function AnimateBannerText(reset) {

    if (reset) {
        $('.banner-ani-text').each(function(index) {
            $(this).removeClass('visible-class');
        });

        setTimeout(function() {
            AnimateBannerText(false);
        }, 1500);

        return;
    }

    if (CountElementsHasClass('.banner-ani-text', 'visible-class') == $('.banner-ani-text').length) {
        setTimeout(function() {
            AnimateBannerText(true);
        }, 4000);

        return;
    }

    $('.banner-ani-text').each(function(index) {
        var current_element = $(this);

        if (!current_element.hasClass('visible-class')) {
            current_element.addClass('visible-class');
            // Break iteration
            return false;
        }
    });

    setTimeout(function() {
        AnimateBannerText(0);
    }, 1500);
}

function CheckHiddenElements() {
    $('.show-on-scroll').each(function(index) {
        var element_top = $(this).offset().top;
        var window_bottom = $(window).scrollTop() + $(window).height();

        if (window_bottom > element_top) {
            $(this).addClass('visible-class');
        }
    });
}