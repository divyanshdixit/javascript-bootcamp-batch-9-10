// a         abc          abcd        abcde       abcdef         ''

// [a_]    [ab, c_]    [ab,cd]    [ab,cd, e_]  [ab,cd, ef]      []

var input = 'abc';

console.log(object)
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
var strOutput = '';

for(let i=strInput.length-1;i>=0;i--){
    strOutput += strInput[i]; // complexity 
}
console.log(strOutput, strInput);




function reversStr(str){
    if(str.length == 0){
        return false;
    }
    else{
        return reversStr(str.substr(1)) + str[0]
    }
}
console.log(reversStr(strInput));

function reverseString(str){

    // simple solution using inbuilt fucntion

    //  Number(num.toString().split('').reverse().join(''));

    let strLen = str.length;
    /* 
        str[0] = D => h
        str[7] = h => D

    */

        for(let i=0; i<strLen ;i++){ // length/2 => complexity will be less

            // swap two chars  divyansh
            let temp = str[i]; // D, i
            str[i] = str[strLen - (i+1)] // h, s
            // str[strLen - (i+1)] = temp // D,i  // 0 = 7, 1 = 6, 2= 5, 3=4, 4 = 3, 5= 2  
            console.log(str);
        }

    return str;
}

console.log(reverseString(strInput));

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



// **********************************************************************