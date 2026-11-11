const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

const CORRECT_USERNAME = "Oyebimpelydia";
const CORRECT_PASSWORD = "gig2";

loginBtn.addEventListener("click", function(){
    let username = usernameInput.value;
    let password = passwordInput.value;

   if (username === "" || password === ""){
    message.textContent = "please fill all the fields";
    message.style.color = "red";
    return;
}

if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD){
    message.textContent = "login successfully";
    message.style.color = "green";
}else{
    message.textContent = "wrong username or password";
    message.style.color = "red";
}
})

    

