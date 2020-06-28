const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector(".js-title");

function getTime(){
    const date = new Date();

    //const time = [date.getHours(), date.getMinutes(), date.getMinutes()];
    /*let time = [];
    time.push(date.getHours());
    time.push(date.getMinutes());
    time.push(date.getSeconds());*/

    //console.log(time[1]);

    /*for(let i=0;i<3;++i){
        if(time[i] < 10){
            time[i] = "0" + toString(time[i]);
            console.log(time[i]);
        }
    }*/

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours < 10? `0${hours}`: hours}:${minutes < 10? `0${minutes}`: minutes}:${seconds < 10? `0${seconds}`: seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();