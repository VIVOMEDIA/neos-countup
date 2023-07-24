/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

$( document ).ready(function() {
    $( document ).scroll(checkVisibility).resize(checkVisibility);
    $('.countup').css('visibility', 'hidden');
    checkVisibility();

    function checkVisibility() {
        $('.countup:not(.started)').each(function (index, el) {
            if (isInViewport(el)) {
                let $el = $(el);
                let demo = new CountUp(el, $el.data('end'),  {
                    startVal: $el.data('start'),
                    prefix: $el.data('prefix'),
                    suffix: $el.data('suffix'),
                    duration: $el.data('duration') ? $el.data('duration') / 1000 : 2,
                    separator: $el.data('separator') ? $el.data('separator') : '',
                    decimal: $el.data('decimal') ? $el.data('decimal') : '',
                    decimalPlaces: $el.data('decimal-places') ? $el.data('decimal-places') : 0,
                });
                $(el).addClass('started').css('visibility', 'visible');
                demo.start();
            }
        });
    }
});
