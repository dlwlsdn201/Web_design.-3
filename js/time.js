const clockContainer = document.querySelector('.js-time'),
    clockTitle = clockContainer.querySelector('.js-title');


function getTime(){
    const date = new Date();
    const Hour = date.getHours();
    const Minute = date.getMinutes();
    const Second = date.getSeconds();
    clockTitle.innerText = `${Hour <10? `0${Hour}` : Hour}:${Minute<10? `0${Minute}` : Minute}:${Second < 10? `0${Second}`:Second}`;


}


function init(){
    getTime();
    setInterval(getTime,1000);
}

init();

