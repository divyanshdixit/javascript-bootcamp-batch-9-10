// "use strict"; // js code should excuted in strict mode and follow W3C standard.

// new in ES5
// add starting of the script or in function
var x = 10
console.log(x);

function fun(){
    var y = 10
    console.log(y);
}

fun();

function fun2(){
    "use strict";
    let y = 2;
}

fun2()
var z= 10;

// this 

this.x = 10 //(refers to the global window object)

// if "this" used in function (this refers to global window object) => without strict 
// undefined for strict mode (if used in function) => JS doesn't allow default binding

function checkThis(){
    "use strict";
    return this;
}

console.log(checkThis());

// explicit binding:

// call()
// apply()

