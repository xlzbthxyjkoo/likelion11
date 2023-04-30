let elToday = document.getElementById('today');
let elSubmit = document.getElementById('submit');

function date() {
    var day = new Date();
    elToday.innerHTML = day;
}

elSubmit.addEventListener('click', date);