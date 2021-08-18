// for loop => excat number of time 
// for/in loop .,[] arr[i]
// for/of loop => loop throught the values of iterating object
// while => loop till condition is true
// do while => 
count = 0;
// let i=0;
var i =0 
// for(let i=0, len=arr.length; i<length; ){
//     console.log(i); //0
//     // break;
//     i+=4; // i = i + 4
// }

// console.log(i);
// state 1: init varaible , init many values as you want , optional
// state 2: check condition  , optional
// state 3: inc, dec   , optional


// for/in loop => iterate through props of an object
var obj = {
    name:'divyansh',
    city:'kanpur'
}

console.log(obj);
var arr  = [0,1,2,3,11];

// console.log(obj.name)
// . , obj["name"]
for(let k in obj){
    console.log(k, obj[k])
}

for(let k in arr){
    console.log(k,arr[k])
}


// for/of loop: use tpo iterate for any iterator object
// iterate thorigh value of object

for (const j of arr) {
    console.log(j)
}
// entries, keys, values
console.log(Object.values(obj));
var str = "Divyansh";
for (const j in  str) {
    console.log(j, str[j])
}

for (const j of  str) {
    console.log(j)
}

// while() => excute a block of code as long as condition is true
var i =0;
// while(i < 5){
//     // console.log(i);

    
//     if(i == 2) continue; // jump  over one iteration in the llop
//     else { console.log(i); i++;}

//     // 0 1
    
// }

// list:{
//     arr[0];
//     arr[1];
//     break list //(labelname)
//     arr[2];
//     arr[3];
// }

// type conversion
Number('3.14') // 3.14 (Number)
Number(' ') // 0 (Number)
Number('99 88 ') // NAN (Number)

console.log(Number(new Date())) // milisecond
console.log(new Date().getTime())


// + => unary operator
let y = '5';
let x = +y; 
console.log(x);
Number(true) // 1
Number(false) // 0
console.log(String(true)) // Boolean to stirng
x.toString()
// break & continue : 

// IIFE
// immediate invoked function expression

// self invoked 
// (function(){

// })();

// (function(){

// })();

// (function(){
//     console.log('object')
// })();