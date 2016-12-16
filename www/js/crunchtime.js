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

function addUser()     {
    var name = document.getElementById("firstname").value;
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("pwd").value;

    if(name == "")
    {
        alert("Please enter your name");
        return;
    }

    if(email == "")
    {
        alert("Please enter your email");
        return;
    }
    if(pwd == "")
    {
        alert("Please enter your password");
        return;
    }

    db.transaction(function(tx) {
        tx.executeSql("INSERT INTO User VALUES (?,?,?,?)", [2, name, email, pwd], function(tx,res){
            alert("User Registered");
        });
    }, function(err){
        alert("An error occured while registering the user");
    });
}

function login() {
    var email = $("#email").val();
    var password = $("#pswd").val();

    if (email.length === 0 || password.length === 0) {
        alert("Both fields are required.");
    } else {
        db.transaction(function (transaction) {
            transaction.executeSql('SELECT * FROM User WHERE email = "' + email + '" and password = "' + password + '"', [],
                function (transaction, results) {
                    alert("Successful");

                },
                function (transaction, error) {
                    alert("Login Error");
                }
            );

        });
    }
}



