const BODY = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad(){
    console.log("finished Background loading!");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `./bg/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    // if(imgNumber ===1){
    //     BODY.style.color = 'black';
    // }
    BODY.prepend(image);
    image.addEventListener("loadend", handleImgLoad);
}


function RandomNUM(){
    const NUMBER = Math.floor(Math.random() * IMG_NUMBER); 
    return NUMBER;
}

function init(){
    const randomNumber = RandomNUM();
    paintImage(randomNumber);
}

init();