const ToDo = {  //to-do 객체
    index: Number,
    content: String,
    check: Boolean,
};

let arr = [];  //to-do list
let cnt = 0;  //목록의 개수

var text = document.getElementsByClassName('todo-input');

function Add(){
    const ToDo = {
        index: cnt++,
        content: text,
        check: false,
    };

    arr.push(ToDo);
}

function View() {
    arr.forEach()
}

function Delete() {
    
}


text[0].addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        console.log(Add);
    }
})
