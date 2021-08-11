var newArr = [100,20,30,40]

// arrayName.splice(index(where new element should be added), how_many_element_should_remove, "string, wht elment u want to add");

console.log(newArr.splice(0, 0, 10), newArr); // working as unshift()

console.log(newArr.splice(0,1), newArr) // working as shift()

console.log(newArr.splice(newArr.length-1, 1), newArr) // working as pop()

console.log(newArr.splice(newArr.length, 0, 60), newArr) // working as push()

console.log(newArr.splice(3,0, 40,50),newArr)  // => adding 2 new element at index 3
console.log(newArr.splice(3,2),newArr) // => removin 2 element form index 3
