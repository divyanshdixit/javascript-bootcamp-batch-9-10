

// var name = function() {
// //     code
// } // annoymys function

// var name;  // declare
// function functionname(){
// console.log('object')
// };  // declare

// // js function are varibales too 
// console.log(typeof name); //function 
// // Function is not a data type, Object => js

// to call the function use functionName with ();

// // forEach => assoicative array

// function first(){

// }



function name() { // parameter
//      j = 10;
    console.log('object')
    
}

console.log(name());

var first = function(){ // anonymous  function
      console.log('first');
      return '' ;
}
console.log(first());

function second(){

      console.log('second function')
      
      return 'second'; // last statement
      
}

console.log(second());

function third(){
      return 10+10;
}
console.log(third());


function fourth(){
      // local scope => function scope => varible access only within the function 
      var i = 10;
      var j = 20;

      var sum= i + j; // 30

      return sum;
}


console.log(fourth())

// console.log(i,j, sum);


function fifth(){
      k = 10; // varaible declared without using any keyword , it becomes a global varible
      var l = 40; // local vairable

      return k + l;
}

console.log(fifth());

console.log(k);

// k = 11;

// function with parameter, argument:

function sixth(i,j=1){ // parameter
      // default value < argument
      var res = i * j;
      return res;
}



console.log(sixth(199,299)) // argument
console.log(sixth(298)) // argument
console.log(sixth(197,297)) // argument

function getMyAge(currentYear, birthYear){
      return currentYear - birthYear;
}

var age = getMyAge(2021,1996); // 0 argument is passed

console.log('My age is ' + age)
console.log('My age is ' + age)
console.log('My age is ' + age)
console.log('My age is ' + age)
// console.log(name(1,2,3)) // arguments

// // 
// var v = name(1,2,3);

// console.log('fucntion value is ' + name(1,2,3))

// // anonymus 
// var name = function(){

// }
// // arrow function
// const name = () => {} 

// // async

// // callback 

// function name(){
//       // self invoked
// }

// (function () {
    
// }())

