let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()=+-_}{][\|/.,><?`~"

function randompassword() {
        let password = "";
        for(i=0; i<12; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        console.log(password)
        document.getElementById("text").innerHTML= password;
}

function copypwd() {
    document.getElementById("text").select();
    document.getElementById("text").setSelectionRange(0, 99999);
    document.execCommand("copy");
}