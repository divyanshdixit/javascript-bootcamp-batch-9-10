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


// slicing an array:-

// slice out a piece of an array into new array (retrun new array)
// start from given position
// ending index is not included
// -ve indecies are also 

console.log(mergeArr.slice(6, 10), mergeArr);

console.log(mergeArr.slice(-5, -1), mergeArr) // start from last index of array
console.log(mergeArr.slice(8, 12), mergeArr)


// entries(), keys(), values()

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

// filter():-

// return new array with filtered value of array that passes given condition(test)
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



// sorting()
// arrayName.sort(compare function(a,b))
// sort oder based on unicode of element in asc order
// used for sorting string(oringally)

// compare fuction accept two argument & return a value taht determinss the sort order
// if return value is greater than 0 (+ve) sort b to lower index than A (b comes first ) 
// if return valus is less than 0 (-ve) sort a to lower index than B (a comes first) if(a < b) retrun 0 
// if return valus is 0 thn their postion remains same.

var unsortArr = [9,8,6,5,0];

console.log(unsortArr.sort())

var unsortArr1 = [1,2,19,33,33,100]; // 1,2,19,33,100

console.log(unsortArr1.sort())

var strArr = ['ear', 'cat', 'div', 'boy', 'abhi']; // e, d, c , b, a
console.log(strArr.sort())

// compare function: 
var numbers = [30, 20,10,0,1,3,2,5] // 0,1,2,3,5,10,20,30
console.log(numbers.sort())
console.log(numbers.sort( function(a,b){
    return a-b; // ascending order
}))

console.log(numbers.sort( function(a,b){
    return b-a; // descending order
}))

console.log(strArr.sort( function(a,b){
    return a-b; // ascending order
}))

console.log(strArr.sort( function(a,b){ // for decending array
    if(a>b){
        return -1;
    }

    if(b>a){
        return 1;
    }

    
    return 0;
}))

// mixed char array:

// console.log(arr.sort(function(a,b) { // asecending order
//     let x = a.toUpperCase();
//     let y = b.toUpperCase();

//     if(x>y){
//         return 1;
//     }
//     if(x<y){
//         return -1;
//     }
//     return 0;
// }))

// JSON.parse()
// {
//     "details":[
//         {
//             "name":"div",
//             "id":11
//         },
//         {
//             "name":"div",
//             "id":11
//         }
//     ]
// }

var emp = [
    {name:"div", id:12},
    {name:"abhi", id:11}
]

var jsonObj = [
    {
    details:[
        {
            name:"div",
            id:12
        },
        {
            name:"abhi",
            id:12
        }
    ]
}
]
console.log(jsonObj[0].details.sort(function(a,b){
    if(a.id > b.id){
        return [
            {
                details : a.id - b.id
            }
        ]
    }
    if(b.id > a.id){
        return [
            {
                details : b.id - a.id
            }
        ]
    }
    return jsonObj;
}))
console.log(emp.sort(function(a,b){
     return a.id-b.id;
}))

// console.log(jsonObj.details[1].id)


// copyWithin()

// copies array eelemetn to another position in array and overwrite the existing values
// changes original array
// ending index is not included

// arr.copyWithin(target, start, end)

var ff = [1,2,3,4,5]
console.log(ff.copyWithin(3, 0, 3))

for(let i =0; i<ff.length ; i ++){
    console.log( ff[i]*4)
}

// includes():
// check whether an array contains specific elementor not  , if yes retun true , else false, 
// case sensitive

// syntax: arr.includes(element, start(optional))

console.log(arr.includes('divyansh', 0));

// map(), filter(), forEach()

// return an array with the rsult  of calling a function on each aaray elements 

console.log(ff.map( function(val){ // val,index, array
    return val*4; // 4 []
}))

// reduce()

// reverse()

// given array will be reversed
// change original array

console.log(ff.reverse())

// Reduce():

// reduces the array to single value 
// excute a provied function for each value of thr array 
// return value of the function is stored in accumulator (variable)
// doesn;t chnage origianl array

// retrun tehe accumulated vaue of the callback function

// array.reduce((total, val, index, arr) => {}, init);

var reduceArr = [10,30, 50];

var reducerFun = (total, val) => {
    console.log(total, val);
    return total + val;
}
console.log(reduceArr.reduce(reducerFun));

// every(): 
// return true if all the array element passed given condition else false;
