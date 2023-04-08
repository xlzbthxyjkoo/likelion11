const InputElement = document.querySelector('.todo-input'); //querySelector로 원하는 요소 찾기
const ToDoListElement = document.querySelector('.todo-list');

let todolist = []; //할 일을 담는 배열
let id = 0; //각 할 일을 구별하는 키 값

const setToDoList = (newToDoList) => {
    todolist = newToDoList;
}

const getAllToDoList = () => {
    return todolist;
}

//할 일의 타입 { id: number;  isCompleted: boolean;  content: string }
//id : 할 일의 유니크한 키 값
//isCompleted : 할 일의 완료상태 
//content : 할 일의 내용
const appendToDoList = (text) => {
    const newId = id++;
    //concat을 사용해서 getAllToDoList 뒤에 새로운 할 일 합쳐주기
    //concat()은 기존 todolist배열에 아무런 영향을 주지 않고 todolist배열을 복사한 값에 추가한 할 일을 반환
    const newToDoList = getAllToDoList().concat({id: newId, isCompleted: false, content: text})
    //반횐된 newToDoList를 기존 todolist배열로 변경
    setToDoList(newToDoList)
    paintToDoList();
}

const deleteToDoList = (todoId) => {
    //입력받은 todo의 id값과 filter를 이용해 삭제하고자 하는 할 일을 제외한 새로운 할 일 목록을 가지는 배열 만듦
    const newToDoList = getAllToDoList().filter(todo => todo.id !== todoId);
    //setToDoList 이용해 기존의 todolist 배열을 바꿔줌
    setToDoList(newToDoList);
    //paintToDoList 함수를 이용해 삭제가 완료된 todolist 배열로 다시 HTML 렌더링
    paintToDoList();
}

const completeToDoList = (todoId) => {
    //map을 사용하여 isCompleted 값을 토글(true이면 false, false이면 true로) 처리하여 새로운 todolist 배열 저장
    const newToDoList = getAllToDoList().map(todo => todo.id === todoId ? {...todo,  isCompleted: !todo.isCompleted} : todo );
    setToDoList(newToDoList);
    paintToDoList();
}
//user가 할 일 추가하면 html 그려주는 함수
const paintToDoList = () => {
    ToDoListElement.innerHTML = ''; //InputElement 요소 안의 HTML 초기화
    const allToDoList = getAllToDoList(); //todolist 배열 가져오기

    //todo-item에 해당하는 html을 그려서 todo-list에 추가하기
    allToDoList.forEach(todo => {
        const ItemElement = document.createElement('li');
        ItemElement.classList.add('todo-item');

        const checkboxElement = document.createElement('div');
        checkboxElement.classList.add('checkbox');
        checkboxElement.innerText = '⬜';
        //checkbox click event 발생 시 - 완료 처리
        checkboxElement.addEventListener('click', () => completeToDoList(todo.id))

        const todoElement = document.createElement('div');
        todoElement.classList.add('todo');
        todoElement.innerText = todo.content;

        const deleteBTNElement = document.createElement('button');
        deleteBTNElement.classList.add('deleteBTN');
        deleteBTNElement.addEventListener('click', () => deleteToDoList(todo.id)) //클릭 이벤트 발생 시, 해당 할 일 삭제
        deleteBTNElement.innerHTML = '✖';

        if(todo.isCompleted) {
            ItemElement.classList.add('checked');
            checkboxElement.innerText = '✅';
        }

        ItemElement.appendChild(checkboxElement);
        ItemElement.appendChild(todoElement);
        ItemElement.appendChild(deleteBTNElement);

        ToDoListElement.appendChild(ItemElement)

    })
}

//입력에 대한 이벤트 리스너 등록
const init = () => {
    InputElement.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') { //입력되는 키가 enter이면
            appendToDoList(e.target.value); //input의 value를 appendToDoList 함수로 넘겨줌
            InputElement.value = ''; //InputElement의 value를 초기화
        }
    })
}


init();

