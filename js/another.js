//  greeting.js
//  함수에 매개변수 있는 버전

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden'; // 중요한정보 없이 문자열만 담은 변수는 대문자로 표시하는 관습이 존재함
const USERNAME_KEY = 'username';

function onLoginSubmit(e) {
    e.preventDefault();
    const username = loginInput.value;
    localStorage.setItem('USERNAME_KEY', username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //greeting.innerText = "Hello " + username;
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 로컬 스토리지에 유저정보가 있다면 hello 부터 보여줘야 하고
// 유저정보가 없다면 form을 보여주고 값을 입력받아야 한다.

const savedUsername = localStorage.getItem('USERNAME_KEY');

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    paintGreetings(savedUsername);

}




// clock.js

function getClock() {
    const date = new Date();
    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    if (parseInt(`${date.getMinutes()}`) < 10) {
        clock.innerText = (`${date.getHours()}:0${date.getMinutes()}:${date.getSeconds()}`)
    }
    if (parseInt(`${date.getSeconds()}`) < 10) {
        clock.innerText = (`${date.getHours()}:${date.getMinutes()}:0${date.getSeconds()}`)
    }
    if (parseInt(`${date.getSeconds()}`) < 10 && parseInt(`${date.getMinutes()}`) < 10) {
        clock.innerText = (`${date.getHours()}:0${date.getMinutes()}:0${date.getSeconds()}`)
    }
}