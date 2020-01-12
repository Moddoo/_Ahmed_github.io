let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()=+-_}{][\|/.,><?`~0123456789";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()=+-_}{][\|/.,><?`~";


function randompassword() {
    var passGenString = "";
    if (document.getElementById("upper").checked){
        passGenString = passGenString + upperCase
    }
    if (document.getElementById("lower").checked){
        passGenString = passGenString + lowerCase
    }
    if (document.getElementById("num").checked){
        passGenString = passGenString + numbers
    }
    if (document.getElementById("symbol").checked){
        passGenString = passGenString + symbols
    } 
    if (!document.getElementById("upper").checked &&
        !document.getElementById("lower").checked &&
        !document.getElementById("num").checked &&
        !document.getElementById("symbol").checked) {
            return;
        }
    console.log(passGenString);
    let password = "";
    for(i=0; i<12; i++) {
        password += passGenString[Math.floor(Math.random() * passGenString.length)]
    }
    console.log(password)
    document.getElementById("text").innerHTML= password;
}
    
function copypwd() {
    document.getElementById("text").select();
    document.getElementById("text").setSelectionRange(0, 99999);
    document.execCommand("copy");
}