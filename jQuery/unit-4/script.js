$(document).ready( function() {
   
    $('div').click( function() {
        $('div').fadeOut('fast');
    }); 
    
    $('div').hover(function(){
    $('div').addClass('red');
    });

   $('div').hover(
    function(){
    $(this).addClass('active');
    },
    function(){
    $(this).removeClass('active');    
    }
  );

$('input').focus(function() {
$(this).css('outline-color','#FF0000');
})

});
