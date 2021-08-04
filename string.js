var x = ""; // stirng literals 
// var y = new String('divyansh'); // string object

console.log(x);

// if(""){ // false
//     console.log('string');
// }else{
//     console.log('else');
// }


// escape char: \ 

var t = "my name is \\divyansh\" ";

var t1 = 'I\'ve car';

var t2 = '126\\31'

var x = 10;
var y = 10;

x == y; // true (value comparison)

y = 20;


var obj = { // 1000
    city:'kanpur'
}

var obj1 = { // 1001
    city:'kanpur'
}

console.log(obj.city);
var obj2 = obj;  // 1000 copy address 

obj == obj1 ; // 1000 == 1001  (reference comparison)

obj == obj1; 
obj2.city = "lko";

console.log(obj.city);

var x = 10;
var y = x;
y = 11;
console.log(y, x)

console.log(obj2 == obj);
console.log(x == y );
console.log(obj1 === obj)



var str = " divyanshs //developer  "

var str1 = "divyansh";
var str2 = new String('divyansh');

var str3 = str2;

console.log(str3 == str2, str3 === str1);

console.log(str1 === str2);

// length:

console.log(str.length);
