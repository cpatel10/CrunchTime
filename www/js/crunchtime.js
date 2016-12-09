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
$("#loginButton").click(function() {
    var email = $("#email").val();
    var password = $("#pswd").val();

    if (userName.length === 0 || password.length === 0) {
        alert("Both fields are required.");
    } else {
        myDB.transaction(function(transaction) {
            transaction.executeSql('SELECT * FROM User WHERE email = "' + email + '" and password = "' + password + '"', [],
                function(transaction, results) {
                    alert("Successful");
                },
                function(transaction, error) {
                    alert("Login Error");
                }
            );

        });
    }
});



