// Js error:

/*
TypeError
RangeError => Max_value
Refernce error =>
syntax error 
uri error 
*/

// try 
// catch -> handle error 
// throw => let's you create a custom error message
// finally => let you excute some code regardless of the result 

try{
// code 
console.log('object');
}catch(err){ // err object => name of error, message 
// code 

if(err) console.error(err, err.name, err.message)
// if(err) throw "this is custom error";
// if(err) throw 500;

}finally{
    // code
    console.log('finally run this ')
}

// throw:
throw "this is custom error";
