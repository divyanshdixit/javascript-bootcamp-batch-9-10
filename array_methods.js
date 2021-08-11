var arr = [1,2,3,4,5];

// length: return the count of array element

console.log(arr.length)

function xy(a,b){

}

function name(xy){ // one function pass as parameter to another function => xy becomes a callback function 
    xy(4,3);
}
[1,2,3,4,5];

// forEach(function, thisvalue) => looping through array elements, it'll not retrun any value 

// inside callback function 3 params passed :

// value => current value of given array (required)
// index => index of current value of given array (optional)
// array => value and index belogn to array(same array) (optional)

// thisValue => some value of object(optional)

// syntax:

// arrayName.forEach(function(value, index, array){
// 
// })

console.log(arr);

arr.forEach(function(val,index,array){
    console.log(val*2, index, array)
})

arr.forEach((val,index, array) => {
    console.log(val*2, index, array)
})

// console.log(name());
// arrow function:

// shorter syntax of regular function 

name(); // => name is not a function 

function name(x){
    console.log('object')
}



var name = function(){

}

var name = () => {
    console.log('object')
}

// arrow function must define before calling:

var name = (x) => {
    console.log('object')
    return '';
}

// name = x => console.log('object')


console.log(name(1));

// same code using for loop :

// for(i=0; i<arr.length; i++){
//     console.log(arr[i]*2, i, arr)
// }

const newArr = [10,20,30,40]; // complex value have props and method,  
// value is not const, reference is constant
// if value is changed then reference is also changed
// but inner value oor attributes or values can be changed

newArr[0] = 100;
console.log(newArr);


// toString() : convert to string
console.log(newArr.toString())

// join('delimeter') : convert array to string, using passed delimeter, if not passed (,) comma is by default
console.log(newArr.join(''))


// popping(out) and pushing(in) element from/to array :

// pop() => remove the last element from an array , return the popped value

console.log(newArr.pop(), newArr) 

// push() => add new element at the end of an array, return new length of the array
console.log(newArr.push(50), newArr)


// shifting elements of array :

// shift() => remove the first element fro array and shift all oterh elemnt to a lower index, return the value that was shifted out
console.log(newArr.shift(), newArr);

// unshift() => add new element at the start of array & unshift other to higher index, return new length of the array 
console.log(newArr.unshift(100), newArr);


// Deleting the array element:

// js arrays are special kidn of object to we  can use delete property on array (but not recommended)

// delete on object

var obj = {
    name:"Divyansh",
    age:24
}

console.log(obj);

delete obj.age;

console.log(obj);


// delete on array:

// delete may leave undefined holes in array 

// delete newArr[2];
// console.log(newArr[2], newArr);


// splicing an array:

// can be used to add, remove item of any index position from an array :
// return an array of the removed element , if none return [] array 

// syntax:

// arrayName.splice(index(where new element should added), how_many_element_should_remove, "string, wht elment u want to add");

console.log(newArr.splice(0, 0, 10), newArr); // working as unshift()

console.log(newArr.splice(0,1), newArr) // working as shift()

console.log(newArr.splice(newArr.length-1, 1), newArr) // working as pop()

console.log(newArr.splice(newArr.length, 0, 60,70,43), newArr) // working as push()

console.log(newArr.splice(3,0, 40,50),newArr)  // => adding 2 new element at index 3
console.log(newArr.splice(3,2),newArr) // => removin 2 element form index 3
// push(), pop(), shift(), unshift(), splice()

