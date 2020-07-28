const form = document.querySelector(".js-name"),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

const USER_LS = "currentUser",   //유저의 로컬스토리지 
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text); //로컬스토리지에 (key:USER_LS, value:text) 값 저장.
}

function handleSubmit(event){
    event.preventDefault(); //event의 실행 저지.
    const currentValue = input.value; //input 요소의 입력값을 currentValue 에 저장.
    paintGreeting(currentValue); // input 요소의 입력값을 paintGreeting 함수의 인자값으로 줌.
    saveName(currentValue); //input 요소의 입력값을 savename 함수 인자값으로 줌 
}

function askForName(){
    form.classList.add(SHOWING_CN); //'js-name' class의 HTML form 요소에 'showing' 이라는 클래스 이름 추가.
    form.addEventListener("submit",handleSubmit); //form에 submit 이벤트 발생 시 handleSubmit 함수 호출.
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN); //form의 클래스 리스트에서 'currentUser' 클래스 삭제
    greeting.classList.add(SHOWING_CN); // greeting(인사말 넣을 <h4>태그)의 클래스리스트에 currentUser 클래스 추가.
    greeting.innerText = `Good day! ${text}`; //greeting(인사말 넣을 <h4>태그)에 text 삽입.
}

function loadname(){
    const currentUser = localStorage.getItem(USER_LS); //로컬스토리지에서 USER_LS 키의 값을 currentUser 변수에 저장.
    
    //만약 로컬스토리지에 currentUser key의 값이 없을 경우
    if(currentUser ===null){
        askForName();
    }else{
        //user 이름이 존재할 경우 유저 이름 출력.
        paintGreeting(currentUser);
    }
}

function init(){
    loadname();
}

init();