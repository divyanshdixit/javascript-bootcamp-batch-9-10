// toString() => covert object to string

// 1- to return a string

// toExponential(parameter => defines the no of char after the decimial point)

var num = 15668;

console.log(num.toExponential());
console.log(num.toExponential(2));

// toFixed() ==> return number as string, parameter => char after the decimal point
// (0-20)

// console.log(1.6666666666666667897821548)
console.log(10/6, (10/6).toFixed(5));


// toPrecision() => retrun number as a string, parameter => with number writren with specified length
console.log(10/6, (1.4).toPrecision(100));


// valueOf() => return a number as a number 

// 2- converting variable(string) to numbers


// global JS methods => can be used on all js data types, these are not number methods

// Number()
// parseInt()
// parseFloat()

// Number() => retun a number coverted from it's argument

console.log(Number('100'));
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(' 10 ')); // 10
console.log(Number('10,33')); // nan
console.log(Number('divyansh')); // nan


// Date() 

// Number(Date()) => it 'll convert data to number(milisecond) 
// 1 ST JANURARY 1970

// console.log(new Date(year, month, date, h, m, s, milisecond))
console.log(new Date(2021,08,08))


// parseInt() => prase a string and return a whole number
// space are allowed
// only first number is returned

console.log(parseInt('10')) // 10
console.log(parseInt('10.33')) // 10
console.log(parseInt('10_20_30')) // 10
console.log(parseInt('10 years')) // 10
console.log(parseInt('years 10')) // nan
console.log(parseInt('10,33')) // 10
console.log(parseInt(' 10 33 ')) // 10
console.log('***',parseInt(true)) // nan

// parseFloat() => parse a string & return a number
// spaces are allowed
// only first number is returned

console.log(parseFloat('10.00')) // 10
console.log(parseFloat('10.5556')) // 10.556
console.log(parseFloat('10 20 30.33')) // 10
console.log(parseFloat('10.5 yreas')) // 10.5
console.log(parseFloat('years 10.44')) // nan


// properties


// MAX_VALUE
// MIN_VALUE
// POSITIVE_INFINITY
// NEGATIVE_INFINITY
// NaN



// console.log(Number.NaN)
var x = Number.POSITIVE_INFINITY; // 1.79e+308
console.log(x)


// number props cant be used on varaibles
var y = [1,2,3];
console.log(y.MAX_VALUE)


// isInteger() => check whether a value is integer or not , if so then return true, else false
var z = 10;

console.log(Number.isInteger(z)) // true
console.log(Number.isInteger(10.33)) // false
console.log(Number.isInteger(10)) // true
console.log(Number.isSafeInteger(Number.MAX_VALUE))  // false but it's integer not safe integer
console.log(Number.isSafeInteger(999999999999999)) // true

console.log(Number.MIN_VALUE)