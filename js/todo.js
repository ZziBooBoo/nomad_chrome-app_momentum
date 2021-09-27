const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
// document.querySelctor('#todo-form input')과 같다.
const todoList = document.getElementById("todo-list");

const TODOS_KEY = 'todos'

let todos = []; // 배열 안의 내용이 바뀔 수 있으므로 let

function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = ""; // 엔터누르면 입력한 값 안보이도록
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), // id로 li의 item을 구분하려고
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj)
    saveTodos();

}

function paintTodo(newTodo) {
    const li = document.createElement('li')
    //console.log(li);
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text; // paintTodo는 인자로 핸들서브밋함수의 paintTodo(newTodoObj) 에서 오브젝트를 받는다.
    // 따라서, 이때 newTodo는 newTodoObject 이므로 .text를 붙여서 id가 포함된것이 아닌 텍스트만을 저장하도록 하는 것이다.
    const button = document.createElement('button');
    button.innerText = '✖';
    button.addEventListener('click', deleteTodo);
    li.appendChild(span); // <li>태그안에 <span>넣고싶어서
    li.appendChild(button);
    todoList.appendChild(li);
}

function deleteTodo(e) {
    // event에서 클릭된 위치를 알려준다.
    //event.target.parentElement --> target은 클릭된 HTML 엘리먼트, parentElement는 클릭된 엘리먼트의 부모를 알려줌
    // 여기서는 target이 <button>이고 parentElement가 <li>
    // <li>태그가 변수 li에 저장되는 것! 
    const li = e.target.parentElement; // 삭제하려는 li
    li.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
    // filter함수에서의 toDo는 의미없는 거, 그냥 변수이름일뿐
    // 필터 실행하면서 todos배열 안에 요소들을 하나씩 나타내주는 거라고 생각하면됨
    // 필터링된 배열의 요소들을 다시 todos배열에 업데이트
    // 이때, toDo.id는 string, li.id는 number타입이다.
    // 따라서, 이 둘은 그냥 다르므로 아무것도 지워지지 않는다.
    saveTodos();

}

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));// 로컬에는 배열로 저장이 안됨 - text만 가능함
    // 따라서 stringify로 배열처럼 생긴 string으로 변환 
    // 가져올때는 parse를 이용해 진짜 배열형태로 꺼냄
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos); // ["a","b","c"] 배열처럼 생긴 텍스트

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    //console.log(parsedTodos); //
    //JSON.parse 이용 (3) ["a","b","c"] 찐배열 - 배열에는 여러가지 메서드가 존재! 
    todos = parsedTodos; // 선언한 빈 배열에 로컬저장소에 있는 내용을 넣음 -> 이전에 저장한 내용 없어지지 않음 
    parsedTodos.forEach(paintTodo);

}