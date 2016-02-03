$(document).on('click', '.item', function() {
    
$h1 = $("<h1>Hello</h1>")

$("body").append('<p>"I\'m a paragraph!"</p>');

$('#one').after('<p>Div #1.5</p>');

    var $p = $('p');
    $('#two').after($p);    
    
    $('#text').click(function() {
    $(this).addClass('highlighted');
    });

    $("div").height("200px");
    $("div").width("200px");
    $("div").css("border-radius","10px");
    
    $('p').html("jQuery magic in action!");
    
    
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class="item">' + toAdd + '</div>';
    });
});

