function random_color() {
    var rgb = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    color = '#'
    for (var i = 0; i < 6; i++) {
        x = Math.floor((Math.random() * 16))
        color += rgb[x];
    }
    return color;
}
function middleStopProp(event) {
    if (event.isPropagationStopped()) {
        $('.middle_box').parent().css('background-color', random_color());
    }
}
function sideStopProp(event) {
    if (event.isPropagationStopped()) {
        $('.side_box').siblings().css('background-color', random_color());
    }
}
function largeStopProp(event) {
    if (event.isPropagationStopped()) {
        $('body').children('div').css('background-color', random_color());
        $('body').children('div').children().css('background-color', random_color());
    }
}

$(document).ready(function () {
    $('#large_box').click(function (event) {
        largeStopProp(event);
        event.stopPropagation();
        largeStopProp(event);
    })
    $('.side_box').click(function (event) {
        sideStopProp(event);
        event.stopPropagation();
        sideStopProp(event);
    })
    $('.middle_box').click(function (event) {
        middleStopProp(event);
        event.stopPropagation();
        middleStopProp(event);
    })
});