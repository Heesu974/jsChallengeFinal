const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greetings = document.querySelector("#greetings");


const HIDDEN = "hidden";
const USERNAME_KEY = "username";


function paintGreetings(username) {

    greetings.innerText = `Hello ${username}`;
    greetings.classList.remove(HIDDEN);
}

function submitHandler(e) {
    e.preventDefault();
    let username = loginInput.value;

    loginForm.classList.add(HIDDEN);

    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);




}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if (savedUsername === null) {
    //show loginForm
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", submitHandler);
} else {
    //show greetings
    paintGreetings(savedUsername);
}




