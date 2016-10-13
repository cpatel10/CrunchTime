/**
 * Created by Chingari on 10/11/2016.
 */
'use strict'

//
// function menuContentShow(){
//     $(".one").css({"display":"block"});


$(document).mouseup(function (e)
{
    var container = $(".one");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});


function menuContentShow(){
    $(".one").css({"display":"block"});
}

$( "#loginPage" ).on( "popupbeforeposition", function () {
    $.mobile.pageContainer.pagecontainer( "getActivePage" )
        .not(this) /* exclude popup */
        .addClass( "blur-filter" );
}).on( "popupafterclose", function () {
    $( ".blur-filter" )
        .removeClass( "blur-filter" );
});


