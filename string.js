var x = ""; // stirng literal 
// var y = new String('dasdasdad'); // string object

console.log(x);

// if(x){
//     console.log('sting');
// }else{
//     console.log('esle');
// }


// escape char: 

var obj = {
    city:'kanpur'
}

var obj1 = {
    city:'sads'
}

var obj2 = obj;  // copy address 
obj2.city = "lko";

console.log(obj.city);

var x = 10;
var y = x;
y = 11;
console.log(y, x)

console.log(obj2 === obj);
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
