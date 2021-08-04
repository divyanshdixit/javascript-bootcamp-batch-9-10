// but js treate primitive values as object when excuting methods and props

// var x = 10;
// var y = "";


// length  => stringName.length;


// find string in a string:-

// "my name is divyansh divyansh":

// indexOf("word",index) => get the first occurance of text, return index number of find string
// if second argument is omitted searching willl start from zero index(starting of string)
// if text is not exist it'll return -1 always.

// starting index = 0
var str = "my name is divyansh  asdas divyansh ss";

console.log(str.length);

console.log(str.indexOf("divyansh")); //second parameter is omitted
console.log(str.indexOf("name", 5));

// lastIndexOf("word", index)

console.log(str.lastIndexOf("divyansh", 21));

// console.log(arr.constructor.toString().indexOf('Array'));

// if(arr.constructor.toString().indexOf('Array') > -1){
//     console.log('object')
// }