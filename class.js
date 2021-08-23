//  class : introduced es6 
// class is the template for js object.
// classes are used to make one kind of object

class ClassName{
    // constructor(){}
    // it's required to add a constructor function , if not added Js will add empty constructor
    // while creating an object of class, constructor function called first automatically.

    constructor(n, b){
        // properties
        this.name = n // "Divyansh";
        this.birthYear = b //25;
    }

    // getAge(){
    //     let date = new Date(); // utc 
    //     return date.getFullYear() - this.birthYear; 
    // }

    getAge(currentYear){
        return currentYear - this.birthYear;
    }
}

var obj1 = new ClassName("Divyansh", 1996);
console.log(obj1);

let date = new Date(); // utc 
let currentYear = date.getFullYear();

console.log(obj1.getAge(currentYear));
