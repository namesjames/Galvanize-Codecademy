$(document).ready(function(){
    $('img').animate({top: '+=100px'}, 1000);
    
    $('div').click(function() {
        $('div').effect('explode');
    })
    
     $('div').click(function() {
        $('div').effect('bounce', {times:3}, 500);
    })
    
        $('div').click(function() {
        $('div').effect('slide');
    })
    
        $("#menu").accordion({collapsible: true, active: false});
        
           $('#car').draggable();
        
           $('div').resizable(); 
           
           $('ol').selectable();
           
           $('ol').sortable()(); 
           
          $('#menu').accordion();
});
