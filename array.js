// js array are used to store multiple values of multiple data types  in single variable

var arr = ["div1",'div2', 'div3', 24, 25, {}];
console.log( arr);

// to get the data type of object(array) use 'instanceof' operator

console.log( arr instanceof Array ) // true

// console.log(arr.constructor.toString().indexOf('Object') > -1)


// create an array:

// 1- array literal => ['item1', 20, {}, [] ]
// 2- using new keyword => var arr = new Array('1',2,3)


var arrs = [
        [
            'abhishek',
            [10,20,30],
            
        ],
        {
            city: 'kanpur',
            color:'fair'
        }
]

console.log(arrs[1].city)

// accessing the elements of array :

// by referring to the index number

arr[0];
// [1,    2,  3]

// last index 2 => length - 1

// [
//     0 => 1,
//     1 => 2,
//     2=>3
// ]

// changing array value : using index


arr[0] = 'divyansh';
console.log(arr);


// 

// {
//     name:'div'
//     city"
// }

// obj.name
// obj['name']