// const
WIDTH = 640;
HEIGHT = 480;
GS = 32;

DOWN = 0;
LEFT = 1;
RIGHT = 2;
UP = 3;

function div(a, b) {
    return Math.round(a / b - 0.5);
}

function DisplayPropertyNames(obj) {
    var names = "";
    for (var name in obj) names += name + " / ";
    alert(names);
}

(function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 125);
        console.log("done");
    };
    
})(jQuery);
