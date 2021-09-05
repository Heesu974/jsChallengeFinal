const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById('todo-list');
const TODOSKEYNAME = 'todosKeyName';
let toDos = [];

//새로 고침할 때, toDos 가 localStorage에는 남아 있지만, 화면에는 나타나지 않는 문제점 해결. 

// todo List localStorage에 저장하기 
// localstage에는 string만 저장할 수 있다.
function saveToDos() {
    localStorage.setItem(TODOSKEYNAME, JSON.stringify(toDos));

}



function deleteTodo(event) {

    const li = event.target.parentElement;
    li.remove();
    console.log(typeof li.id)

    // 많은 버튼 중에 클릭한 버튼이 무엇일까 ?
    toDos = toDos.filter((item) => item.id !== parseInt(li.id))
    saveToDos();


}

//여기도 왜 (newTodo)인지 모르겠음 
function paintToDo(newTodoObj) {
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    const span = document.createElement('span');
    span.innerText = newTodoObj.text;
    // 왜 이(newTodo)의 .text인지 7분 08초 에서 설명
    const button = document.createElement('button');
    button.innerText = '🥴'
    button.addEventListener('click', deleteTodo);



    li.appendChild(span);
    li.appendChild(button);


    toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;

    toDoInput.value = '';
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

// function sayHello(item) {
//     console.log('this is turn of', item);
// }

const savedToDos = localStorage.getItem(TODOSKEYNAME);
console.log(savedToDos);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach((paintToDo))
}