let car1 = {
    make: "Audi",
    model: "A2",
    yearMAde: 2010,
    getFullName() {
        return `This car maker is ${this.make} and its name is ${this.model}`
    }
};
let car2 = {
    make: "BMW",
    model: "A5",
    yearMAde: 2015,
    getFullName() {
        return `This car maker is ${this.make} and its name is ${this.model}`
    }

};
let car3 = {
    make: "Opel",
    model: "Moka",
    yearMAde: 2020,
    getFullName() {
        return `This car maker is ${this.make} and its name is ${this.model}`
    }

};

console.log(car1.getFullName());
console.log(car2.getFullName());
console.log(car3.getFullName());
