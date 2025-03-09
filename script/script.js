

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






// ==== FUNCTIONS AND IF ELSE IF CONDTIONAL STATEMENTS ==== 




// // Function

// The function which takes some parameters is called parametric function
// The function which do not take any parameters is call non-parametric function

function sumFunction(a, b) {
    let sum = a + b;
    return sum;
}

const sum = () => {
    let a = 5
    let b = 10
    let sumNo = a + b;
    return sumNo
}
let a = "Usama irfan"
let b = 20

// console.log("SUM ARROW FUNCTION")


function toCelsius(fahrenheit) {
    console.log(fahrenheit, "FAHRENHEIT VALUE")
    if (fahrenheit) {
        return (5 / 9) * (fahrenheit - 32);
    } else {
        alert("You must enter a fahrenheit value !!!")
    }
}



// let value = toCelsius(77);
// console.log(value, "CELSIUS VALUE")

function GradeOfStudent(marks) {
    // AND && If one of them is false than it means it is false
    // OR || If one of them is true than it means it is true
    // NOT ! If condition is true then it means it is false
    // 91
    // Nested If conditions
    let grade = '';
    if (marks <= 100) {
        // code block 1
        if (marks > 90) {
            // code block 1
            console.log("YOUR ARE GREAT!")
            grade = 'A+';
        } else if (marks >= 80 && marks <= 90) {
            // code block 2
            console.log("YOUR ARE VERY GOOD!")
            grade = 'A';
        } else if (marks >= 70 && marks <= 80) {
            // code block 3
            console.log("YOUR ARE GOOD!")
            grade = 'B';
        } else if (marks >= 60 && marks <= 70) {
            console.log("YOUR ARE AVERAGE!")
            grade = 'C';
        } else if (marks >= 50 && marks <= 60) {
            console.log("YOUR ARE BELOW AVERAGE!")
            grade = 'D';
        } else {
            console.log("YOUR ARE FAILED !")
            grade = 'F';
        }
    } else {
        // code block 2
        console.log("Please enter marks between 0 to 100")
        return "INVALID MARKS"
    }
    // return grade
    // if (condition) {
    //     // code block 1 
    // } else {
    //     // code block 2
    // }
    return grade;
}

console.log("GRADE = ", GradeOfStudent(100))

// marks > 80 :
// Grade A
// marks > 70 && marks < 80:
// Grade B
// marks > 60 && marks < 70:
// Grade C
// marks > 50 && marks < 60:
// Grade D


// ===== SWITCH CASE STATEMENTS ===== 

// switch (key) {
//     case value:

//         break;
//     case value:

//         break;
//     case value:

//         break;

//     default:
//         break;
// }

let key = 2
let marks = 90
let fahrenheit = 77
switch (key) {
    case 1:
        // code 1
        // console.log("Code 1") 
        const cel = toCelsius(fahrenheit)
        console.log("Celsius: " + cel)
        break;
    case 2:
        // code 2
        // console.log("Code 2")
        const grades = GradeOfStudent(marks)
        console.log("from calling Grade: " + grades)
        break;


    default:
        console.log("Invalid key")
        break;
}