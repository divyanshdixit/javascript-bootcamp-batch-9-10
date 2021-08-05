// calculator: 

const doMath = {

    sum:function(num1,num2){
        return num1 + num2;
    },

    substract:function(num1,num2){
        return num1 - num2;
    },
    mul:function(num1,num2){
        return num1 * num2;
    },

    divide:function(num1,num2){
        if(num2 == 0){
            return 'Can\'t divide by zero';
        }
        return num1/num2;
    }
}

// window => global
var num1 = prompt('Write first value here'); // string
var num2 = prompt('Write second value here'); // string

num1 = parseFloat(num1); // 10.00 10
num2 = parseFloat(num2); // 11

console.log(parseFloat(num1), parseFloat(num2));

console.log(doMath.sum(num1, num2))
console.log(doMath.substract(num1, num2));
console.log(doMath.mul(num1, num2));
console.log(doMath.divide(num1, num2));