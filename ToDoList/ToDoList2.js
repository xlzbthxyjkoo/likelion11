const ToDo = {
    index: Number,
    content: String,
    check: Boolean,
};

let arr = [];
let index = 0;

var text = document.getElementsByClassName('todo-input');
console.log(text);

function Add(){
    const ToDo1 = {
        index: 1,
        content: text,
        check: false,
    };
}

text[0].addEventListener('keydown', (event) => {
    if(event.key == 'Enter') {
        console.log(Add);
    }
})
