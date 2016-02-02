$(document).ready(function(){
    
$h1 = $("<h1>Hello</h1>")

$("body").append('<p>"I\'m a paragraph!"</p>');

$('#one').after('<p>Div #1.5</p>');

    var $p = $('p');
    $('#two').after($p);    
    
    $('#text').click(function() {
    $(this).addClass('highlighted');
    });

});

