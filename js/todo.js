const toDoForm = document.querySelector('.js-todoForm'),
toDoInput = toDoForm.querySelector('input'),
toDoList = document.querySelector('.js-todoList');


//LocalStorage List에서 'toDos' key를 정의.
const TODOS_LS = 'toDos';


//filter
function filterFn(toDo){
    return toDo.id == 1
}
//toDo 값들이 생성될 떄마다 저장될 배열.
let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;  //li 변수를 btn의 부모 노드로 선언함.
    toDoList.removeChild(li);   //toDoList 객체의 자식요소 li 을 제거함.
    const cleanToDos = toDos.filter(function (toDo){
        //li에 없는 id인 toDos를 체크함.(지우고자 하는 li)
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos(); //toDos를 저장함.
}

//로컬스토리지에 toDos 값들을 저장하기 위한 함수
//localStorage.setItem(keyname, value);
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const list = document.createElement("li"); //toDo을 표현할 li 요소 생성.
    const delBtn = document.createElement("button"); //삭제 버튼 생성
    const span = document.createElement("span"); //빈 span 생성
    const newId = toDos.lengh + 1 //Todo 요소마다 붙일 Id
    delBtn.innerHTML = "❌"; //삭제 버튼에 삭제 그림 삽입.
    delBtn.addEventListener("click",deleteToDo); //삭제 버튼에 클릭 이벤트 추가.
    span.innerText = text; //생성한 빈 span 요소에 text 파라미터 입력
    list.appendChild(delBtn);   //li 의 자식요소로 delBtn, span 삽입.
    list.appendChild(span);
    list.id = newId;
    toDoList.appendChild(list); //toDoList(ul) 의 자식요소로 li 삽입.
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

//발생되는 event 제어하는 함수
function handleSubmit(event){
    event.preventDefault(); //발생되는 event 동작 막음.
    const currentValue = toDoInput.value; //toDo 입력 칸의 값을 currentValue 변수에 저장.
    paintToDo(currentValue); //초기화된 currentValue로 paintToDo() 함수 호출
    toDoInput.value = '';
}

//JSON.parse() ---> 문자화된 데이터를 JS의 객체로 변환
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){ //로컬스토리지에 저장된 값이 null이 아니라면?
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo){
            paintToDo(toDo.text);
        });
}
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}
init();