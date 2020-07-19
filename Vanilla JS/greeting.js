// 하나의 함수는 하나의 기능만을 수행하도록 구성
// 함수의 갯수가 많아지더라도 이것이 최선인 듯하다.

const form = document.querySelector(".js-form");
const input = form.querySelector("input"); // form에서 실제 입력받는 부분
const greeting = document.querySelector(".js-greetings");

// querySelector를 사용하는 방법에 -> .sth #sth 둘다 가능한듯

const USER_LS = "currentUser";
const SHOWING_CN = "showing";
// 보여지는 경우의 className(CN)

function saveName(text){
    localStorage.setItem(USER_LS, text); 
    // localStorage에 저장, 이후 새로 고침해도 적용
}

function handleSubmit(event){
    event.preventDefault(); // 이벤트 동작을 막는 1단계 (내부 데이터 자동 삭제)
    const currentValue = input.value;
    //console.log(currentValue);

    paintGreeting(currentValue); // Greeting 함수 호출 (이름 표시)
    saveName(currentValue);
}

function askForName(){
    // SHOWNING_CN을 추가하면 CSS의 보여지는 속성이 부여
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    // form에 SHOWING_CN을 제외하면 CSS의 보여지는 속성이 제거
    form.classList.remove(SHOWING_CN);
    // greeting message에 SHOWNING_CN을 추가하면 CSS의 보여지는 속성이 부여
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
    // javascript 에서 추구하는 중괄호 스타일이 있나봄
}

function init(){
    loadName();
}

init();