// a         abc          abcd        abcde       abcdef         ''

// [a_]    [ab, c_]    [ab,cd]    [ab,cd, e_]  [ab,cd, ef]      []

var input = 'abc';

var output = []; 
var count = 0;
var chars = ''; 


function getStringAsArray(str){
    let strlen = str.length; 
    if(strlen%2 != 0){ // odd
        // str = str + '_';
        str += '_';
    }

    for(let i=0; i<str.length;i++){ // i++ => i+1, i +=2 => i = i + 2
         
        if(chars.length != 2){ //  2 != 2
            chars += str[i]; // ''+a => 'a' + 'b' => ab, c_
        }

        if(chars.length == 2){
            // push => will add element in the last index of array
            output.push(chars) // [ab, c_]
            chars = '';
        }
    }

    return output;
}

console.log(getStringAsArray(input));


// **********************************************************************

var phrase = "hey name is divyansh dixit";

var convert = "divyansh";


function capitalizeFirstLetter(phrase){
    phraseArr = phrase.split(' ');
    phraseArrLen = phraseArr.length
    let addPhrase = '';
    // template literals:
    for(let i=0;i<phraseArrLen;i++){ // i=0, i=1 i =4
        addPhrase = `${addPhrase}${capitalize(phraseArr[i])} `
        console.log(addPhrase)// 'Hey' + 'Name' => 'HeyName' + 'Dixit'
    }
    // phrase = `${capitalize(phraseArr[0])} ${capitalize(phraseArr[1])} ${capitalize(phraseArr[2])} ${capitalize(phraseArr[3])} ${capitalize(phraseArr[4])}`
    return addPhrase;
}
function capitalize(str){
    strArr = str.split(''); // a => A
    str = strArr.shift().toUpperCase() + strArr.join('')
    return str; // Hey
}   
console.log(capitalizeFirstLetter(phrase));
console.log(capitalize(convert));


// ***********************************

// "Divyansh" => "hsnayviD"

var strInput = "Divyansh";

console.log('****', strInput.charAt(0));

// strInput[0] = "A";
strInput.charAt(0);


console.log('****', strInput.charAt(0));


var strOutput = '';

for(let i=strInput.length-1;i>=0;i--){
    strOutput += strInput[i]; // complexity 
}
console.log(strOutput, strInput);



// recuerssion => function call itself

function reversStr(str){
    if(str.length == 0){
        return false;
    }
    else{
        return reversStr(str.substr(1)) + str[0];
    }
}
console.log(reversStr(strInput));

// function reverseString(str){

//     // simple solution using inbuilt fucntion

//     //  Number(num.toString().split('').reverse().join(''));

//     let strLen = str.length;
//     /* 
//         str[0] = D => h
//         str[7] = h => D

//     */

//         for(let i=0; i<strLen/2 ;i++){ // length/2 => complexity will be less

//             // swap two chars  divyansh
//             let temp = str[i]; // D, i
//             str[i] = str[strLen - (i+1)] // h, s
//             // str[strLen - (i+1)] = temp // D,i  // 0 = 7, 1 = 6, 2= 5, 3=4, 4 = 3, 5= 2  
//             console.log(str);
//         }

//     return str;
// }

// console.log(reverseString(strInput));

// 12345/10  => 5
// 1234/10 => 4
// 123/10 => 3
// 12/10 => 2
// 1

// %

// 12345%10 => 5
// 12345/10 => 1234%10 => 4
//             1234/10 => 123

// 5*10 => 50+4 => 54*10 => 540+3 = > 543*10 => 5430+2 => 5432*10 => 54320+1 => 54321

// var t = 2
// t = 21; => 2*10 + 1


// console.log(reverseString(strInput));

var Randomarr = [ 1, 4, 5,9, 10, 3, 2, 20, 1];
var maxValue = 0; // 4, 5, 10, 20


function findMaxValue(num){
    for(let i=0; i<num.length ;i++){
        if(num[i] > maxValue){
            maxValue = num[i];
        }
    }
    return maxValue;    
}
console.log(findMaxValue(Randomarr));



// **********************************************************************

var farr = [ 1, 4, 5,9, 10, 5, 4, 20, 1, 9];

function reverseGivenArray(arr){
    for(let i=0;i<arr.length/2;i++){
        let tmp = arr[i];
        arr[i] = arr[arr.length-(i+1)]
        arr[arr.length-(i+1)] = tmp;
    }
    return arr;
}

console.log(reverseGivenArray(farr));

// get duplicate item's value:

function getDuplicateElementValue(arr){
    var duplicateElem = [];
    var combineArr = [];
    var firstDuplicateIndex= [];

    for(let i=0;i<arr.length;i++){ // 9
        for(let j=i+1;j<arr.length;j++){ // j = 6
            if(arr[i] == arr[j]){
                combineArr.push([i, arr[i]])
                combineArr.push([j, arr[j]])
                duplicateElem.push(arr[j]);
                firstDuplicateIndex.push(i);
            }
        }
    }
    // var name = "divyansh";

    // var obj ={
    //     name:name,
    //     name
    // }
    let allResult = {
        combineArr,
        duplicateElem,
        firstDuplicateIndex
    }
    return allResult;
}
console.log(getDuplicateElementValue(farr), typeof getDuplicateElementValue(farr));

// destructuring:


// =====================================================

// "camelCasing"  =>  "camel Casing" // -6
// "identifier"   =>  "identifier"
// ""             =>  ""

// console.log('camelCasingTest'.slice(0,5)) 
var camelStr = 'CamelCasingTest';
var camelArr = [];
var resultStr = '';
// The legacy RegExp $1, $2, $3, $4, $5, $6, $7, $8, $9 properties are static and read-only properties of regular expressions that contain parenthesized substring matches.
// The non-standard lastMatch property is a static and read-only property of regular expressions that contains the last matched characters. RegExp.$& is an alias for this property
// string.replace(/[A-Z]/g, ' $&'));
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  
  }
  console.log(solution(camelStr))
function splitCamelCase(camelStr){
for(let i=0; i<camelStr.length ; i++){
    if(camelStr.charCodeAt(i) >= 65 && camelStr.charCodeAt(i) <= 90){
        console.log(i)
        camelArr.push(i);
    }
}

camelArr.unshift(0);
for(let j=0;j<camelArr.length;j++){
    resultStr += `${camelStr.slice(camelArr[j], camelArr[j+1])} `;
}
return resultStr;
}

console.log(splitCamelCase(camelStr))

// 3red solution:
function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }

//   4th :
  function solution(string) {
    return string.split('').map(s => {
      if(s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90)
        return ' ' + s;
      else
        return s;
    }).join('');
}
// function splitCamelCase(str){
//     for(let i=0; i<str.length ; i++){
//         if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){ 97, 122
//             console.log('small ')
//         }else{
//             var CamelCasePart = str.slice(i);
//             console.log(CamelCasePart, i);
//             // splitCamelCase(CamelCasePart);
//             // break;
//             var lowerCasePart = str.slice(-(i+1), 0)
//             console.log(lowerCasePart);
//         }
//     }
//     return `${CamelCasePart} ${lowerCasePart}`;
// }

// console.log(splitCamelCase('camelCasingTest'));