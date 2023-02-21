//Codigo JQuery

$(document).ready(function() {

    //Selector mediante id
    $('#vg').hide(3000);
    //Selector mediante clase
    $('.escritores').css('font-size', '24px');
    //Selector mediante clase y posicion (desde 0)
    $('.escritores:eq(2)').css('color', 'violet');

    //Selector mediante una combinacion de selectores
    $('#directores li').addClass('cine')
})