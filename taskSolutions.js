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



// **********************************************************************