// object literal
// new Object() (never use)
//  object function constructor
// Object.create()

// prototype:


// object are vairable too , it can contain many values

// object has props, methods(function) => actions

function method(){

}

console.log( method);
// var obj = {
//     key : "value",
//     method:function(){

//     }
// }

var detail = {
    name:'divyansh', // object, arrray , funciton , string , number, null
    lname:'dixit', 
    age:25,
    city:"kanpur",
    getDetail:function(){
        return "My name is " + detail.name + " and my age is " + detail.age + " , and i live in " + detail.city; // in a functioon defintion this refers to the owner of the function
    }
}

// "My name is name and my age is age , and i live in city"
// template literal: es6 

// var t = 10;
// ` value of t is ${t}`

// ` my         asdjasdjasdgashdgasduasdh  ${detail.name} ashdasdgas adsds ${asdas}`

// console.log("My name is " + detail.name + " and my age is " + detail.age + " , and i live in " + detail.city)
// console.log("My name is " + detail.name + " and my age is " + detail.age + " , and i live in " + detail.city)
// console.log("My name is " + detail.name + " and my age is " + detail.age + " , and i live in " + detail.city)
// console.log("My name is " + detail.name + " and my age is " + detail.age + " , and i live in " + detail.city)


// access object props:

// ObjectName.propname

// Objectname['propname']

// typeof array => object

console.log( detail.age, detail['name']);

// array => object

// for (var i in detail) {
//     console.log(detail[i]);
// }

// access object methods:

// object.method()

console.log(detail.getDetail())

// this keyword => define owner (Object)

// this keyword in object method(function)
const newObj = {
    fname:'divyansh',
    lname:'dixit',
    getFullName:function(){
        return `${this.fname} ${this.lname}`
    }
}

// this keyword used as global:
console.log(this); // window

console.log(newObj.getFullName())

// change property value:

// ObjectName.propName = "new value"

newObj.fname = "UPdate value";

console.log(newObj);

// add new property in existing object:

// ObjectName.newPropertyname = "value"

// newObj.color = "black";

console.log(newObj);

// add new method in existing object:

// ObjectName.methodName = function(){}

newObj.getColor = function(){
    return this.color;
}

console.log(newObj);

( newObj.hasOwnProperty('color') ) ? console.log(newObj.getColor()) : newObj.color = "fair";

console.log(newObj);
// console.log(newObj, newObj.getColor());


// Comparing two object (complex ) and number (primitive)

// destructing: 

// ES6 
// const newObj = {
//     fname:'divyansh',
//     lname:'dixit',
//     city:"kanpur"
//     // getFullName:function(){
//     //     return `${this.fname} ${this.lname}`
//     // }
// }

// const arr = ['div', 'dixit', 'kanour']
// const [f, l, c] = arr;

// var n = newObj.fname; 
// var l = newObj.fname; 
// var c = newObj.fname; 

// // unpacking of props or methods:

// const {fname, lname, city} = newObj; 

// console.log(fname)
var name = () => {
    // 
}
var obj = {
    getName:function(){
        return this.name + this.lname;
    }
}

var obj1 = {
    name:'Divyansh'
}

var obj1 = {
    lname:'Divyansh'
}

// console.log(obj.getBNa)

// used to call an object method with another obeject as an argument 

console.log(obj.getName.call(obj1));

