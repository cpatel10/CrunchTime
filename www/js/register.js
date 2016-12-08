// /**
//  * Created by Chingari on 12/7/2016.
//  */
//
// var db;
// var dbCreated = false;
//
// document.addEventListener("deviceReady", onDeviceReady, false);
//
// function onDeviceReady() {
//
//     var firstname = document.getElementById("firstname").value;
//     var email = document.getElementById("email").value;
//     var pwd = document.getElementById("pwd").value;
//
//     db = window.sqlitePlugin.openDatabase({name: 'mydb7.db', location: 'default'});
//     if (dbCreated){alert("Problem creating DB")}
//     else
//     db.transaction(populateDB, transaction_error, populateDB_success);
// }
//
// function populateDB(tx) {
//     tx.executeSql('DROP TABLE IF EXISTS USER');
//     var sql = "CREATE TABLE IF NOT EXISTS USER ( "
//         + "firstName VARCHAR(50), "
//         + "email VARCHAR(50), "
//         + "password VARCHAR(255))";
//     tx.executeSql(sql);
//     var firstname = document.getElementById("fname").value;
//     var email =document.getElementById("email").value;
//     var pwd = document.getElementById("pwd").value;
//     tx.executeSql("INSERT INTO USER (firstname,email,password) VALUES ('"+ firstname +"','"+ email +"','"+ pwd +"' )");
//
// }
//
// function transaction_error(tx, error) {
//     alert("Database Error: " + error);
// }
//
// function populateDB_success() {
//     dbCreated = true;
//
//     // where you want to move
//     alert("Successfully inserted");
//
// }
