//1. Object literal

let user = {
    name: "Elze",
    surname: "Vaina",
    age: 35,
    language: ['Russian', 'Latvian'],
    userInformation() {
        return `User ${this.name} ${this.surname} is ${this.age} year old and knows ${this.language[0]} and ${this.language[1]} languages. `
    }
};

console.log(user.userInformation());


//2. Constructor

    function vehicle(make, model, maxSpeed) {
        this.make = make;
        this.model = model;
        this.maxSpeed = maxSpeed;  
    }

    vehicle.prototype.getCarType = function() {
        if (this.maxSpeed <= 220) {
            return `Tai yra standartinis automobilis`;
          } else if (this.maxSpeed >= 220){
            return `Tai yra sportinis automobilis`;
          } else {
              return `Check data!`
          }
    }    

let Audi = new vehicle("Audi", "A6", 280);


console.log(Audi.getCarType());

//3.
class Computer {
    constructor(make, model, price) {
        this.make = make;
        this.model = model;
        this.price = price;
    }

    computerInformation() {
        return `Your computer name is ${this.make} ${this.model} and it price is ${this.price} Eur. `;
    }
}

let Mac = new Computer('Mac', 'Air', '1500');
console.log(Mac.computerInformation());
