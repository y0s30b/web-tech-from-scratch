const title = document.querySelector("#title");

const CLICKED_CLASS = "clickedkk";

function handleClick(){
    /*
    //const currentClass = title.className;
    const hasClass = title.classList.contains(CLICKED_CLASS);

    //if(currentClass !== CLICKED_CLASS){
    if (!hasClass) {
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS);
    }*/

    // 위의 코드와 완전히 똑같은 기능을 수행하는 아래의 코드:
    title.classList.toggle(CLICKED_CLASS);

    console.log(title.className);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();