//Du būdai kurti opjektus su new
//pirmas būdas

// let car1 = new Object();
// car1.make = "Audi";
// car1.model = "A6";
// car1.year = 2019;
// car1.getFullName = function() {
//     return `This car maker is ${this.make} and its name is ${this.model}`
// }

// console.log(car1.getFullName());

//antras būdas

// function Cars(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.getFullName = function() {
//         return `This car maker is ${this.make} and its name is ${this.model}`
//     };
// }
// Cars.prototype.getFullName = function() {
//     return `This car maker is ${this.make} and its name is ${this.model}`
// }

// Cars.prototype.getAge = function() {
//     let age = new Date().getFullYear() - this.year;
//     return `Car is ${age} years old`;
// }

// Cars.prototype.changeYear = function(newYear) {
//     this.year = newYear;
// }

// let audi = new Cars("Audi", "A6", 2001);
// let opel = new Cars("Opel", "Moke", 2020)
// console.log(audi);
// console.log(opel);

// console.log(audi.getFullName());
// console.log(audi.getAge());

// console.log(audi);
// audi.changeYear(2012);


function Books(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;  
}

Books.prototype.nameAndAuthor = function(name) {
    return `This book name is ${this.name} and author is ${this.author}`
}

Books.prototype.getYear = function() {
    let age = new Date().getFullYear() - this.year;
    return `This book age is ${age} year`;
}

let book1 = new Books("Harry Potter", "Name Surname", 2012);

console.log(book1);
console.log(book1.getYear());
console.log(book1.nameAndAuthor());


