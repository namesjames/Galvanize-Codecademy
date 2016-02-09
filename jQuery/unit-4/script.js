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


   $(document).keydown(function(){
   $('div').animate({left: '+=10px'},500);
   });
   
});

$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			case 38:
				$('img').animate({top: "-=10px"}, 'fast');
				break;
			case 39:
				$('img').animate({left: "+=10px"}, 'fast');
				break;
			case 40:
				$('img').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});
