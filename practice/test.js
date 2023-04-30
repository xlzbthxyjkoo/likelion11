//const array = [1,2,3,4,5];

//forEach 사용해보기
// forEach((array) => {
//     console.log(array);
// });

//filter 사용해보기
// let answer = [];
// answer = array.filter((i) => i % 2 != 0);
// console.log(answer);

//함수 만들기
// function sum(numbers) {
//     let total = 0;
//     for(let i = 0; i < numbers.length; i++){
//         total += numbers[i];
//     }
//     return total;
// }
// console.log(sum(array));

//화살표함수

//객체
// var stu = [
//     {
//         name: "John",
//         age: 20,
//         grage: "A"
//     },
//     {
//         name: "Mary",
//         age: 19,
//         grage: "B"
//     },
//     {
//         name: "David",
//         age: 21,
//         grage: "C"
//     }
// ];
// console.log(stu[2].name);
// console.log(stu[2].age);

//map
let array = [1,3,5,6,8];

array = array.map(function(value){
    if(value%2 != 0) {
        return 0;
    }
    else {
        return value;
    }
});

console.log(array);