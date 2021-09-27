/* 
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button"); 
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden'; // 중요한정보 없이 문자열만 담은 변수는 대문자로 표시하는 관습이 존재함
const USERNAME_KEY = 'username';

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = "Hello " + username;
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    console.log(username)
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 로컬 스토리지에 유저정보가 있다면 hello 부터 보여줘야 하고
// 유저정보가 없다면 form을 보여주고 값을 입력받아야 한다.

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    paintGreetings();

}