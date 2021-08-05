// but js treate primitive values as object when excuting methods and props

// var x = 10;
// var y = "";


// length  => stringName.length;


// 1- find string in a string:-

// "my name is divyansh divyansh":

// indexOf("word",index) => get the first occurance of text, return index number of find string
// if second argument is omitted searching willl start from zero index(starting of string)
// if word is not exist it'll return -1 always.

// starting index = 0

"name age city "

var str = "my name is Divyansh  asdas Divyansh ss";

console.log(str.length);

console.log(str.indexOf("divyansh")); //second parameter is omitted
console.log(str.indexOf("name", 9));

// lastIndexOf("word", index)
// 'Divyansh ss'
console.log(str.lastIndexOf("Divyansh", 11)); // 27 

// console.log(arr.constructor.toString().indexOf('Array'));

// if(arr.constructor.toString().indexOf('Array') > -1){
//     console.log('object')
// }


// Search for a string in string :

// str.search("word")
// str.search(/[(A-Z){1}(a-z)]/)

// difference in search and indexOf()

// "search can't take second arguent(starting postition)""
// regularExpression pattern can be used in search

console.log(str.search(/^[(A-Z){1}(a-z)]/))


// 2-  Extract string part:

// slice(start, end)

// substring(start, end)

// substr(start, length)

// slice(start, end) => index

// extreact a part of string return extracted part in new string.
// ending index is not included
// if ommited then return whole string
// slice() accept -ve index, if used then position counted from end of the string



var string1 = "give me some part of string!";
var len = string1.length;
console.log(string1.slice(0,9))
console.log(string1)

console.log(string1.slice(-12, -9)); // start index from last = -12 (last),  ending index from last= -6(last)


// substring(start, end) => index

// it'll not accept -ve indexes rest is similar to slice

console.log(string1.substring(9,12));


// substr(start, length):

// similar to slice() but second param specifies the length of extracted part
// length is optional
// first param can be -ve , if so count will start from end of the string

console.log(string1.substr(-10,10));

// *************

// 3- replace string content:

// str.replace("Divyansh", "abhishek")

// it dont change the original string , return new string
// case sensitive, replace only first occurance of word
// it can take regexp as an argument

var newstr = "Hy name is divyansh divyansh";

console.log(newstr.replace("divyansh", "abhishek"));

console.log(newstr.replace(/Divyansh/ig, "abhishe"))
console.log(newstr);


// Convert in uppercase & lowercase

// toUpperCase();
// toLowerCase();

console.log(str.toUpperCase())


// + , concat("string1", "string2") => concat two or more string


// trim whitespaces from string:

// removes whitespaces from both side of string:

var trimString = "            Divyansh          ";
console.log(trimString.trim())


// extracting string char:-

// charAt(position) => return char at given index.
// charCodeAt(position) => return unicode of char at specified index


console.log(str.charAt(109)) // retrun empty stirng
console.log(str[109]) // return undefined
console.log(str.charCodeAt(0));