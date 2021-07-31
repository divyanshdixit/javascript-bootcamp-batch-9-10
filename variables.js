var n2 ; // (declaration)
n2 = ""
// var x; // 'undefined'
// console.log(x); 
var y = 10

// + (concat) -, *, /, **

// x = 'divyansh';
// console.log(x + y)

var y=10; // window => global object
// 10 + 10
// 10 + '20' => concat 1020

// console.log(y, window.y);
 
// console.log(x-y)

// console.log('Divyansh' * 10);

var a = 10, b='2', c= 30;  // (one line many variables)
console.log(a,b,c)

// if JS "var" varibales will re-declare it'll not loose theie value:


// var g = 20;
// var g; // 20
// console.log(g);

// scope 

// var x , window.x global object => global scope

// let y , window.y => not used as global scope

// // let, const => block scope (es2015) es6

// // function scope(local), global scope before es2015

// Re-declaration using let and var:

{
   
}

console.log('***')
var d = 10; // global scope
console.log(d);


{
    let d = 2; // use var and let and const both
    // d = 5;
    console.log(d);// 2
}

// var d = 5
console.log(d); //2

console.log('***')
// // loop scope: let will give only block scope 

var i = 5;

for(let i=0; i<2;i++){ // use let instead will change the result (i will visible to all over the script using var)
    console.log(i); // 0, 1, 
}

 
// const name = "adasddasd"; (primitive data type)


console.log(i); // 5

console.log('***')

// // "var" belong to window Object(global scope) but let and const will not the part of window 

// var fname = "Divyansh";
// console.log(fname);
// console.log(window.fname); // both gives same result

let lname = "Dixit";
console.log(lname);
// console.log(window.lname); // will not give same result

// Re-declare "var" with "let" in same scope and block:

var f = 2;
// let f = 3; // not allowed
console.log(f)

{
    var f = 4; // allowed
    // let f = 5; // not allowed
    console.log(f)
}

console.log(f)


// Re-declare "let" variable with "let" in same block and scope

// let g = 2;
// let g = 3; // not allowed

// {
//     let g = 4; // allowed
//     let g = 5; // not
// }

// Re-declare a "let" variable with "var" in same scope and block

// let x = 2; 
// var x = 3; // Not allowed

// {
//     let x = 4;  
//     var x = 5; // not allowed
// }

// Re-declare variable with "let" in another scope or block is allowed:

let x = 2;

{
    let x = 3;
    console.log(x) // 3
}

console.log(x) // 2
// {
//     let x = 5;
//     console.log(x)
// }


// Hoisting: 

// var => top hoisted, can be initalised at any Time

// can be use the variable before it is declared

console.log("***");


a = 10;
console.log(a);
var a;


// hoisting using let: hoisted on top but not initalized

// fname = "Divyansh";
// console.log(fname);
// let fname; // gives reference error

// Const:  
// it defines a constant reference to value (that's why we cant change the primitive value but we can change the props of const object)

// let name;
// var name;
// const name = "Divyansh"; //(primtive) => single variable hold singl value , primitive value dont have props and methods
const bol = true;
// bol = false; // not allowed

const person = { //(non-primitive )
    name : "div",
    height:170
}

// person = 10;
console.log(person)
person.name = "divyansh"
console.log(person)

// obj.name = "asdasdasd"

// const obj = null

// reference const 

// value is not const 



var j = 10;
console.log(j)

{
    const j = 20;
    console.log(j)  // 20
}

console.log(j)

// ***************************

// // Primitive value: that has single data value not have props or methods
// // Number, strings, boolean, undefined

// // var obj1 = {
// //     key : value
// // }

// const person = {
//     name:"Divyansh",
//     city:"kanpur",
//     age: 25
// }

// person.name = "kishu";

// console.log(person.name)


// // Re-decalre "var" or "let " variable with const in same block or scope is not allowed

// var e = 10;
// // let e = 20; // not allowed
// const e = 30; // not allowed


// // Const hoisting: varianle define with "const" are also hoisted on top but not initialised so gives referenceError


console.log(fname);
// var fname="kishu";
// let fname="kishu";
// const fname="kishu";

