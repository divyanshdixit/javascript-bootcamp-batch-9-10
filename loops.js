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