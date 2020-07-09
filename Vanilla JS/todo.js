const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
// toDoForm 이름에서 가져와야 한다.
const toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = 'toDos';

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);

    if(toDos !== null) {
    }
}

function paintToDo(text){
    //console.log(text);

    const li = document.createElement("li"); // 문서에 새 요소 생성
    const delBtn = document.createElement("button");

    delBtn.innerText = ":x:";
    
    const span = document.createElement("span");
    span.innerText = text;

    // 자식으로 추가 - 계층적으로 화면 요소 설계
    li.appendChild(span);
    li.appendChild(delBtn);

    toDoList.appendChild(li);

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // 입력 시 입력 폼에 있는 내용 삭제
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();