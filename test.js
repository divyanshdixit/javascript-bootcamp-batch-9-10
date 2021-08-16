var arr = [1,2,1,3,4,5, 'Divyansh'];
var arr1 = [1,2,1,3,4,5, 'Divyansh'];
var arr2 = [1,2,1,3,4,5, 'Divyansh'];
var arr3 = [1,2,1,3,4,5, 'Divyansh'];
var arr = [1,2,1,3,4,5, 'Divyansh'];
var arr = [1,2,1,3,4,5, 'Divyansh'];
var arr = [1,2,1,3,4,5, 'Divyansh'];

// var filterArr = arr.filter( (val) =>{
//     return !(val > 3); // false, true
// });

// console.log(filterArr);


var mapArr = arr.map((val) => {
    return val*3; // [3, 6]
})

console.log(mapArr);

arr.forEach((val) => {
    val*3; // [3, 6]
})


console.log(arr.includes('divyansh', 0));

// arr.every()


Array.prototype.CustomFunction = (param) => {
    
    return `Custom function using prototype ${param}`;
}

console.log(arr.CustomFunction('array0'));
console.log(arr1.CustomFunction('array1'));

