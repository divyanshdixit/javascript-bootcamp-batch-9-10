var arr = [1,2,3,4,5];

var filterArr = arr.filter( (val) =>{
    return !(val > 3); // false, true
});

console.log(filterArr);
