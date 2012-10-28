/*
	jResize v1.0.0
	by Todd Motto: http://www.toddmotto.com
	Latest version: https://github.com/toddmotto/jResize

	Responsive development plugin for resizing the content within one window
*/

(function ($) {

    $.jResize = function () {

        var resizer = '<div class="viewports" style="overflow:auto;background:#444;color:#FFF;border-bottom:2px solid #FFF;"><ul class="viewlist"></ul></div>';
        var viewPortWidths = ["320px", "480px", "540px", "600px", "768px", "960px", "1024px", "1280px"];
        var viewPortList = 'display:inline-block;cursor:pointer;text-align:center;width:100px;border-right:1px solid #555;padding:10px 5px;'
        var credit = '<div style="float:right;padding: 10px 25px;;">jResize Plugin by <a href="http://toddmotto.com" style="color:#FFF;text-decoration:underline;">Todd Motto</a></div>'

        // Wrap all HTML inside the <body>
        $('body').wrapInner('<div id="resizer" />');

        // Insert our resizing plugin
        $('#resizer').css({
            margin: '0 auto'
        }).before(resizer);

        // Loop through the array, using the each to dynamically generate our ViewPort lists
        $.each(viewPortWidths, function (go, className) {
            $('.viewlist').append($('<li class="' + className + '"' + ' style="' + viewPortList + '">' + className + '</li>'));
            $('.' + className + '').click(function () {
                $('#resizer').animate({
                    width: '' + className + ''
                }, 300);
            });
        });

        $('.viewlist').prepend('<li class="reset" style="' + viewPortList + '">Reset</li>');
        $('.viewlist').prepend(credit);

        // Allow for Reset
        $('.reset').click(function () {
            $('#resizer').css({
                width: 'auto'
            });
        });

    };

})(jQuery);