// but js treate primitive values as object when excuting methods and props

// length  => stringName.length;


// find string in a string:-

// "my name is divyansh divyansh":

// indexOf("word",index) => get the first occurance of text, return index of find string
// if text is not exist it'll return -1 always.

var str = "my name is divyansh  asdas divyansh ss";

console.log(str.indexOf("divyansh", 5));
console.log(str.indexOf("name", 5));

// lastIndexOf("word", index)
console.log(str.lastIndexOf("divyansh",3));

// console.log(arr.constructor.toString().indexOf('Array'));

// if(arr.constructor.toString().indexOf('Array') > -1){
//     console.log('object')
// }