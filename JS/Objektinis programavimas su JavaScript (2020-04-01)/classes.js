// class Books {
//     constructor(author, name, year) {
//         this.author = author;
//         this.name = name;
//         this.year = year;
//     }
//     getFullName() {
//         return `Book ${this.name} was wrriten by ${this.author}`
//     }
//     getBookAge() {
//         return new Date().getFullYear() - this.year;
//     }
// }

// let book1 = new Books("Name Surname", "Harry Potter", 1998);


// console.log(book1);
// console.log(book1.getFullName());

// console.log(book1.getBookAge());

// class Cars {
//     constructor(maker, name, year) {
//         this.maker = maker;
//         this.name = name;
//         this.year = year;
//     }
//     getFullName() {
//         return `This units is ${this.maker} ${this.name}`;
//     }
    
//     getUnitAge() {
//         return new Date().getFullYear() - this.year;
//     }

// }

class Motocycles {
    constructor(maker, name, year) {
        this.maker = maker;
        this.name = name;
        this.year = year;
    }
    getFullName() {
        return `This units is ${this.maker} ${this.name}`;
    }
    
    getUnitAge() {
        return new Date().getFullYear() - this.year;
    }
}

let Skoda = new Cars("Skoda", "Yeti", 2015);
let BMW = new Motocycles("BMW", "XRP", 2006);

console.log(Skoda.getFullName());
console.log(BMW.getFullName());
console.log(Skoda.getUnitAge());
console.log(BMW.getUnitAge());



