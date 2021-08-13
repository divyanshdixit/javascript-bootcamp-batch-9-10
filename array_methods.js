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
console.log(newArr.join())


// popping(out) and pushing(in) element from/to array :

// pop() => remove the last element from an array , return the popped value

console.log(newArr.pop(), newArr) 

// push() => add new element at the end of an array, return new length of the array
console.log(newArr.push(50), newArr)


// shifting elements of array :

// shift() => remove the first element from array and shift all oterh elemnt to a lower index, return the value that was shifted out
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

// Server to web page => JSON

// JSON.parse() => object

// console.log(obj);

delete obj.age;

console.log(obj);


// delete on array:

// delete may leave undefined holes in array 

// delete newArr[2];
// console.log(newArr[2], newArr);


// splicing an array:

// can be used to add, remove item on any index position from an array :
// return an array of the removed element , if none return [] array 

// syntax:

// arrayName.splice(index(where new element should be added), how_many_element_should_remove, "string, wht elment u want to add");

console.log(newArr.splice(0, 0, 10), newArr); // working as unshift()

console.log(newArr.splice(0,1), newArr) // working as shift()

console.log(newArr.splice(newArr.length-1, 1), newArr) // working as pop()

console.log(newArr.splice(newArr.length, 0, 60,70,43), newArr) // working as push()

console.log(newArr.splice(3,0, 40,50),newArr)  // => adding 2 new element at index 3
console.log(newArr.splice(3,2),newArr) // => removin 2 element form index 3


// merging arrays:

// concat() => create new array by merging(adding) two or more arrays:

const arr1 = [1,2,3];
const arr2 = [4,5,6];

// concat('sda', 'asdsd')
console.log(arr1.concat(arr2), arr1);

const mergeArr = arr1.concat(arr2,4, newArr);
console.log(mergeArr);


// slicing an array:

// slice out a piece of an array into new array
// start from given position
// ending index is not included

console.log(mergeArr.slice(6, 10), mergeArr);

console.log(mergeArr.slice(-5, -1), mergeArr) // start from last index of array
console.log(mergeArr.slice(8, 12), mergeArr)


// entries()

// return array iterator object wih key/value pair.

console.log(mergeArr.entries());

for (const i of mergeArr.entries()) {
    console.log(i);
}

var merge = {
    name:'Divyansh',
    city:'kanpur'
}
console.log(Object.entries(merge))


// keys()

// return an array iterator object only containing keys of an array:
console.log(mergeArr.keys());

for (const i of mergeArr.keys()) {
    console.log(i)
}


// values()

// return an array iterator object only containing values of an array:

console.log(mergeArr.values());

for (const i of mergeArr.values()) {
    console.log(i)
}

// filter() 

// return an array filtered with all array elements that passes condition(test)
// not chnaged the original array.

// syntax:

console.log(mergeArr.filter( (val, index, array) => {
    return !(val > 18); // true, false
}), mergeArr);


// arr.forEach( (val,index, array) => {

// })


// find() => 

// return the value of first element in array that passes a test(condition)

console.log(mergeArr.find( (val, index, array) => {
    return val > 20;
}))


console.log(mergeArr.findIndex( (val, index, array) => {
    return val > 20;
}))

