const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); // 이벤트 동작을 막는 1단계
    const currentValue = input.value;
    //console.log(currentValue);

    paintGreeting(currentValue); // Greeting 함수 호출 (이름 표시)
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        // no user
        askForName();
    } else {
        // user exists
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();