let el = document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');

const today = new Date();

function calculateAge() {

    let birthDate = new Date(el.value);

    let age;

    // 생일이 지난 경우
    if(today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() == birthDate.getMonth() &&
         today.getDate() >= birthDate.getDate()
         )
    ) {
        age = today.getFullYear() - birthDate.getFullYear();
    } else { //생일이 지나지 않은 경우
        age = today.getFullYear() - birthDate.getFullYear() - 1;
    }

    elResult.innerText = `귀하의 만 나이는 ${age} 입니다.`;

    return age;
}


elSubmit.addEventListener('click', calculateAge);