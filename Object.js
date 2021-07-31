// object literal
// new Object()
//  object function constructor
// Object.create()

// prototype:


// object are vairable too , it can contain many values

// object has props, methods(function) => actions

// var obj = {
//     key : "value",
//     method:function(){

//     }
// }

var detail = {
    name:'divyansh', // object, arrray , funciton , string , number, null 
    age:25,
    city:'kanpur',

    getDetail:function(){
        return this.name; // in a functioon defintion this refers to the owner of the function
    }
}


// access object props:


// ObjectName.propname

// Objectname[propname]

console.log( detail.age, detail["name"]);

// array => object

// for(i=0;i<3;i++){
//     console.log(detail[i]) // undefined
// }

// access object methods:

// object.method()

console.log(detail.getDetail())




var x = "10"

console.log(typeof x, typeof y)
// Number , String