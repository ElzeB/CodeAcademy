// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
//   }
//   class Rabbit extends Animal {
//     constructor(name) {
//       super(name);
//       this.created = Date.now();
//     }
//   }
//   let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
//   console.log(rabbit.name);



//   class Car {
//      constructor(name, model, year) {
//          this.name = name;
//          this.model = model;
//          this.year = year;
//      }

//     getIntroduction() {
//         return `${this.name}, ${this.model}.`;
//     }

//     getAge() {
//         return new Date().getFullYear() - this.year;
//     }

//     lessThan10Age() {
//         if (this.getAge() < 10) {
//           return `10 metų arba naujesnis`;
//         } else {
//           return `11 metų arba senesnis`;
//         }
//       }
//   }
//   let Audi = new Car('Audi', 'A6', 2020);
//   console.log(Audi.lessThan10Age());

//   class Motorcycle extends Car {
//       constructor(name, model, year, wheels) {
//           super(name, model, year);
//           this.wheels = wheels;
//       }

//       getWheelsNumber(){
//         if (this.wheels === 3) {
//             return `Motociklas turi 3 ratus`;
//           } else if (this.wheels === 2){
//             return `Motociklas turi 2 ratus`;
//           } else {
//               return `Check data!`
//           }
//       }
//   }
//   let BMW = new Motorcycle('BMW', 'M5', '1999', 2);
//   console.log(BMW.getWheelsNumber());
  

  