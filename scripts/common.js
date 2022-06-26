// login function 
let loginn = document.getElementById("loginbox");
let logout = document.getElementById("loginbtn");
var count =0;

function login() {
    if (loginn.style.display == "block") {
        loginn.style.display = "none";
        let username1 = document.getElementById("username").value = "";
        let password1 = document.getElementById("passwordd").value = "";


    }
    else if (logout.innerHTML == "LOGOUT") {
        logout.innerHTML = "Login"
        localStorage.removeItem("usernameEnter");
        localStorage.removeItem("passwordEnter")
      
    }
    else {
        loginn.style.display = "block";
    }
}


// contact us function
let contact = document.getElementById("contactusbox");

function contactus() {
    if (contact.style.display == "block") {
        contact.style.display = "none";
    }
    else {
        contact.style.display = "block";
    }
}


//login and logout logic...!!!!

localStorage.setItem("username", "admin");
localStorage.setItem("password", "admin");
var username = localStorage.getItem("username");
var password = localStorage.getItem("password");
console.log(username);
console.log(password);


function loginvalues() {
    let username1 = document.getElementById("username").value;
    let password1 = document.getElementById("passwordd").value;

    if (username1 != "" && password1 != "") {
        localStorage.setItem("usernameEnter", username1);
        localStorage.setItem("passwordEnter", password1);
        loginn.style.display = "none";

        document.getElementById("username").value = "";
        document.getElementById("passwordd").value = "";
        location.href = " ";
    }
    var usernamevalue = localStorage.getItem("usernameEnter");
    var passwordvalue = localStorage.getItem("passwordEnter");
    
    if (username !== usernamevalue && password !== passwordvalue){
    
        alert("incorreact details")
    }
    else if (username == usernamevalue && password == passwordvalue) {
        
        count++;
        console.log(count);
        logout.innerHTML = "LOGOUT"
        alert("you are login")
        
    }
    
}

// get localstorage username and password
let usernamevalue = localStorage.getItem("usernameEnter");
let passwordvalue = localStorage.getItem("passwordEnter");
console.log(usernamevalue);
console.log(passwordvalue);

if (username == usernamevalue && password == passwordvalue) {
    count++;
    console.log(count);
    logout.innerHTML = "LOGOUT"
    
    
}




