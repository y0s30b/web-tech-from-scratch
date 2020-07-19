const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImageLoad(){
    console.log("finished loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("backgroundImage");
    //body.appendChild(image);
    body.prepend(image);
    //image.addEventListener("loadend", handleImageLoad);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();