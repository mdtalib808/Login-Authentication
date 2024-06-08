
var userDb= [];
/*
function registerUser() {
    var email = document.getElementById("signup_email").value;
    console.log("email here is ", email);
    var password = document.getElementById("signup_password").value;
    console.log("password here is " + password);

    // Assuming userDb is a global variable holding the user database
    for (var i = 0; i < userDb.length; i++) {
        if (userDb[i].email == email) {
            return alert("Email already registered");
        }
    }

    var user = {email: email, password: password};
    userDb.push(user);

    console.log(userDb);
    alert("Successfully registered");
}
*/

function registerUser() {
    var email = document.getElementById("signup_email").value;
    console.log("email here is ", email);
    var password = document.getElementById("signup_password").value;
    console.log("password here is " + password);

    // Email validation regex
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Password validation regex (at least one letter and one number)
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!emailPattern.test(email)) {
        return alert("Invalid email format");
    }

    if (!passwordPattern.test(password)) {
        return alert("Password must contain at least one letter and one number, and be at least 6 characters long");
    }

    // Assuming userDb is a global variable holding the user database
    for (var i = 0; i < userDb.length; i++) {
        if (userDb[i].email == email) {
            return alert("Email already registered");
        }
    }

    var user = {email: email, password: password};
    userDb.push(user);

    console.log(userDb);
    alert("Successfully registered");
}


function loginUser(){
	console.log("login user");
var email = document.getElementById("login_email").value;
console.log("email here is " , email);
var password = document.getElementById("login_password").value;
console.log("password here is " + password);
var isFound = "false";

for(var i=0;i<userDb.length;i++){
	if(userDb[i].email == email && userDb[i].password==password){
		isFound = "true";
		window.location.href = '/secure.html';
	}
}
	if(isFound == "false"){
	alert("Invalid username and password");
	}


}

document.getElementById('myForm').addEventListener('submit', function(e) {
	e.preventDefault();
});

document.getElementById('myForm2').addEventListener('submit', function(e) {
	e.preventDefault();
});