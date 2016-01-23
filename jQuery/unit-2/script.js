$(document).ready(Function() {
$(document).hide();
};

$(document).ready(function() {
    $('div').click(function() {
        $('div').fadeOut('slow');
    });
});

$(document).ready(function() {
var $target = $('li:nth-child(4)');
    $target.fadeOut('fast');
});
