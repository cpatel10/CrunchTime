/**
 * Created by Chingari on 10/11/2016.
 */
'use strict'


function menuContentShow(){
     $(".one").show(350)
     //css({"display":"block"});
 }


$(document).mouseup(function (e)
{
    var container = $(".one");

    if (!container.is(e.target)) // if the target of the click isn't the container...
        // && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide(350);
    }
});


