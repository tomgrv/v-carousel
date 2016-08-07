
$(document).ready(function () {

    $('.v-carousel').each(function (index, element)
    {
        element = $(element);
        element.css({
            'display': 'inline-block',
            'vertical-align': 'bottom',
            'position': 'relative',
            'overflow': 'hidden'});

        var list = element.children().first();

        ul = $(list);
        ul.index = 0;
        ul.css({
            'display': 'block',
            'margin': '0',
            'padding': '0',
            'position': 'relative',
            'top': '0'});

        var maxHeight = 0;

        ul.children().each(function (index, li)
        {
            li = $(li);
            li.css({
                'display': 'block',
                'list-style-type': 'none',
                'margin': '0',
                'padding': '0'});

            if (li.height() > maxHeight)
                maxHeight = li.height();
        }).css('height', maxHeight + 'px');

        element.css('height', maxHeight + 'px');

        startTimer(ul);
    });

    function animate(ul) {

        if (ul.timeout) {
            clearTimeout(ul.timeout);
        }

        var li = ul.children();

        ul.index = ul.index === li.length - 1 ? 0 : ul.index + 1;

        ul.stop(true).animate({
            'top': -li.eq(ul.index).position().top
        }, 'slow', function () {
            startTimer(ul);
        });
    }

    function startTimer(ul) {

        if (ul.timeout) {
            clearTimeout(ul.timeout);
        }

        ul.timeout = setTimeout(function () {

            animate(ul);

        }, 5000);
    }
});