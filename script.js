// function register() {
//     document.getElementById("login-form").style.left="-400px";
//     document.getElementById("register-form").style.left="50px";
//     document.getElementById("btn").style.left="100px";
// }

var l= document.getElementById("login-form");
var r= document.getElementById("register-form");
var butLog= document.getElementById("login");
var butReg= document.getElementById("register");

function register(){
    l.style.left="-400px";
    r.style.left="-365px";
    butReg.style.background= "linear-gradient(to left, rgb(127 167 174), rgb(243 243 237))";
    butLog.style.background= "white";
    l.style.visibility="0";
}
function login(){
    l.style.left="0px";
    r.style.left="50px";
    butLog.style.background= "linear-gradient(to left, rgb(127 167 174), rgb(243 243 237))";
    butReg.style.background= "white";
}