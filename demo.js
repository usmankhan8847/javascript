// Variables

// var n = 'usman';  //var value change
// n = 'aqib';
// console.log(n);

// const s = 'siayb'; //const value not change
// console.log(s);

// Hoisting  || first declaration and  second initialazation
// var a;
// a = 4;
// console.log(a);

// Types
// 1) primitives  = number, string, undefine, null, boolean
// 2) reference = [], (), {}

// primitives Example
// var a = 12
// console.log(a);

// reference Example
// var a = [2,3,4];
// var b = a;
// console.log(b,a);

// Loops
// for(start,end,change)
// Examlpe
// for(var i = 0; i < 11; i++){
//     console.log(i);
// }

// var s = 2
// while(s > 23){
//     s++;
// }

// Arrays
var data = [1,2,3,4,5,6,7];

// push || add values last in array 
// data.push(8,9); 

// POP || remove the last value in array
// data.pop()

// shift || remove the first value in array
// data.shift();

// unshift || add value first in array 
// data.unshift(0);

// splice || remove any value in array
// data.splice(2,1); 
// console.log(data);

// Es6 ----------------------------------------------------------
// JS Arrows Function
const hello = name => ({
    user: 'Usman',
    age: '24',
    status: "unMarried"
});
// console.log(hello());

// ------------------- The concept of `this` -----------------------
// In Objects
const userdata = {
    name: 'Usman',
    age: '24',
    walk: () =>{
        console.log(this.name);
    }
};

userdata.walk();

// In event listeners
// const btn = document.getElementById("btn");

// btn.addEventListener('click', () => {
//     // console.log(this);
// })

// // JS Es6 arrays Method
// const ages = [20,23,24,12,13,16,15];
// // const user = ['Usman', 'Subhan', 'Siyab'];

// // const lessThanTwenty = [];

// // for(let i=0; i<ages.length; i++){
// //     if(ages[i]<20){
// //         lessThanTwenty.push(ages[i]);
// //     }
// // }
// // console.log(lessThanTwenty);

// // Spread Operator Array ko kesy copy karna hy
// // var a = [1,2,3,4,5];
// // var b = [...a];
// // // b.pop();

// // var obj = {name: 'usman'};
// // var copy = {...obj};

// // // forEach and forin
// // var num = [1,2,3,4,5,6];
// // num.forEach(val => {
// //     console.log(val+1);
// // });

// const users = [
//     {
//       username: "john_doe",
//       age: 28,
//       status: "active",
//       city: "New York"
//     },
//     {
//       username: "jane_smith",
//       age: 32,
//       status: "inactive",
//       city: "Los Angeles"
//     },
//     {
//       username: "mike_jones",
//       age: 25,
//       status: "active",
//       city: "Chicago"
//     },
//     {
//       username: "susan_brown",
//       age: 40,
//       status: "pending",
//       city: "Houston"
//     },
//     {
//       username: "anna_white",
//       age: 22,
//       status: "active",
//       city: "Phoenix"
//     }
//   ];
  
// users.forEach(user => {
//     for(var key in user){
//         console.log(user[key]);
//     }
// });

// callback function
// setTimeout(function () {
//   console.log("hello");
// }, 2000);

// first class function
const num = function(){
  return 'hello';
}
console.log(num());