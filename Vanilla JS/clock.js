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
    // 위의 방법이 왜 안되는지는 모르겠다...?

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // 삼항 연산자로 처리
    clockTitle.innerText = `${hours < 10? `0${hours}`: hours}:${minutes < 10? `0${minutes}`: minutes}:${seconds < 10? `0${seconds}`: seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();