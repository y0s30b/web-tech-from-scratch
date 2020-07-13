const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
// toDoForm 이름에서 가져와야 한다.
const toDoList = document.querySelector(".js-toDoList"); // <ul> 로 정의되어 있음

const TODOS_LS = 'toDos';

const toDos = [];

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null) {
        console.log(loadedToDos);
        // JSON: Javascript Object Notation (object<->string)
        const parsedToDos = JSON.parse(loadedToDos);
        // 저장 시 stringify, 불러올 때는 parse 이용
        console.log(parsedToDos);

        for(let id in parsedToDos){
            console.log(parsedToDos[id]);
            //toDos.push(parsedToDos[id]);
            paintToDo(parsedToDos[id].text);
        }
    }
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // localStorage에 특정 데이터를 저장하고 싶을 때는 string의 형식으로
    // JSON.stringify()를 통해 데이터 타입 변환 가능 (모든 js object -> string)
}

function delToDo(event) {
    //console.log(event.id);
    //console.log(event["path"][1].id);

    const delId = Number(event["path"][1].id); // 그냥 받으면 string 자료형
    //toDos.remove(event.id);
    //console.log(toDos);
    //console.log(event);

    //console.log(delId);
    //console.log(typeof(delId));

    //const delPos = toDos.map(x => x.id).indexOf(delId);
    //const delPos = toDos.forEach(elem => {if(elem.id === delId) return });

    /*const delPos = */
    /*const delPos = */
    /*toDos.forEach(function(element, index, array){
        console.log(`${typeof(element.id)}, ${typeof(delId)}`);
        if(element.id == delId){ // 왜 여기서는 등호 세 개가 안 되지?
            return index;
            //console.log(index);
        }
    });*/

    const delPos = toDos.map(x => x.id).indexOf(delId);
    //const delPos = toDos.findIndex(x => x.id == delId);
    //console.log(delPos);

    //console.log(delPos);
    //toDos.remove(delPos);
    toDos.splice(delPos, 1);
    //console.log(toDos);

    //const delLi = toDoList.getElementById(delPos);
    //console.log(toDoList.childNodes);
    toDoList.removeChild(toDoList.children[delPos]);
    saveToDos();
}

var newId = 0; // Id는 계속 증가하는 방향으로

function paintToDo(text){
    //console.log(text);

    // https://www.w3schools.com/tags/tag_ul.asp 참조:
    // <ul> 은 하나의 list를 나타내고, <li> 는 list의 항목을 표시함.
    const li = document.createElement("li"); // 문서에 새 요소 생성
    const delBtn = document.createElement("button");

    delBtn.innerHTML = "&#x274C;"; // innerHTML로 넣어야 emoji 표현 가능.
    
    const span = document.createElement("span");
    // <span> <-> <div> 차이:
    // <span> 은 inline emelent, <div> 는 block-level element
    span.innerText = text;

    //const newId = toDos.length + 1;
    newId = newId + 1;
    //delBtn.setAttribute("id", toString(newId));

    // 자식으로 추가 - 계층적으로 화면 요소 설계
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId; // 각 li에 id 부여해서 편하게 선택하도록 설계

    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };

    toDos.push(toDoObj);
    saveToDos();

    delBtn.addEventListener("click", delToDo);
}

function handleSubmit(event){
    event.preventDefault(); // 기본 동작 억제 (자동 삭제)
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // 입력 시 입력 폼에 있는 내용 삭제
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();