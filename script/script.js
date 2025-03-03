

// // integer
// // 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15

// // float
// // 1.1,2.1,3.1

// // string
// // 'Kamran', 'Ali', 'Ahmed', 'usama'

// // Boolean
// // true, false

// // Array
// // Collection of data of same or different data type
// // 0,1,2,3


// // types of variable

// // let & var
// // const

// // Variable Declaration
// // varibale_type variable_name = variable_value
// const arrayVar = [20, 'Ali', true]

// // console.log(arrayVar[1])

// // Object
// // Collection of key value pair of same or different data type
// const objectVar = {
//     // key:value 
//     name: 'Ali',
//     age: 20,
//     floatingValue: 20.2,
//     isMale: true
// }



// var names = 'Kamaran'
// let floatingValue = 20.3
// const age = 20

// // names = 'usama'

// console.log(names, age)

// // const func = require('fileName')


// // let & var

// // ES6
// // ECMAScript 6

// // var global Scope but it will be accessable in whole code
// // let local Scope but it will be accessable only in a code block


// function Scope() {
//     if (true) {
//         let name_1 = 'Ali'
//         console.log(name_1)
//     }
//     // console.log(name_1, "Out side if")
// }

// // console.log(name_1)


// Scope();


// let a = 5
// let b = 3

// a += b


// console.log("JavaScript Arithmetic Operators", a)

// // AND  && if both are true than it returns true otherwise it returns false
// // NOT  !   true --> false --> true
// // OR   || if both are false then it returns false otherwise it returns true

// // Logical AND operator
// // true && true;  // true
// // true && false; // false
// // false && true;  // false
// // false && false; // false

// // // Logical OR operator
// // true || true;  // true
// // true || false; // true
// // false || true;  // true
// // false || false; // false



// // variable types ==> Let and var difference
// // Operators ==> Arithmetic, Logical, Comparison, Assignment, Increment, Decrement
// // Event

// var sum = 0;

// // Function

// The function which takes some parameters is called parametric function
// The function which do not take any parameters is call non-parametric function

function sumFunction(a = "", b = 50) {
    // let a = 5
    // let b = 10
    console.log("Hello", a)
    // let sum = a + b;
    // return sum;
}

const sum = () => {
    let a = 5
    let b = 10
    let sumNo = a + b;
    return sumNo
}
let a = "Usama irfan"
let b = 20

console.log("SUM ARROW FUNCTION", sumFunction(a))