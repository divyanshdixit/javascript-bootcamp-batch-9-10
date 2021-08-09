var arr = [1,2,3,4,5];

// length: return the count of array element

console.log(arr.length)


// forEach(function, thisvalue) => looping through array elements

// value => current value of given array (required)
// index => index of current value of given array (optional)
// array => value and index belogn to array(same array) (optional)

// thisValue => some value of object(optional)

// syntax:

// arrayName.forEach(function(value, index, array){
// 
// })

console.log(arr);
arr.forEach(function(val, index, array){
    console.log(val*2, index, array)
})


// console.log(name());
// arrow function:

// shorter syntax of regular function 

function name(x){
    console.log('object')
}


// arrow function must define before calling:

var name = (x,y) => {
    console.log('object')
    return '';
}

// name = x => console.log('object')


console.log(name(1));






// for(i=0; i<arr.length; i++){
//     console.log(arr[i]*2, i, arr)
// }

// push(), pop(), shift(), unshift(), splice()