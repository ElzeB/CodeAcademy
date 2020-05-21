// UŽDUOTIS: Naudojant ES6 klases sukurkite objekto Filmai (Movies) kūrimo konstruktorių, kuris turės šias savybes: 
// 1. name; 2. year; 3. director; 4. budget; 5. income. 
// ir metodus: 
// 1. getIntroduction, kuris grąžins filmo pilną pavadinimą (su name, year, director); 
// 2. getProfit, kuris grąžins sumą, kurią uždirbo (pelną) filmas.
// Testavimui, sukurkite du filmus, kurie turės nurodytas savybes ir metodus.

// class Motocycles {
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

// let Skoda = new Cars("Skoda", "Yeti", 2015);
// let BMW = new Motocycles("BMW", "XRP", 2006);

// console.log(Skoda.getFullName());
// console.log(BMW.getFullName());
// console.log(Skoda.getUnitAge());
// console.log(BMW.getUnitAge());

// class Movies {
//     constructor(name, year, director, budget, income) {
//         this.name = name;
//         this.year = year;
//         this.director = director;
//         this.budget = budget;
//         this.income = income;
//     }

//     getIntroduction() {
//         return `${this.name}, ${this.year}, ${this.director}.`;
//     }

//     getProfit() {
//         return `Profit ${this.income - this.budget} Eur.`
//     }

// }

// let TwoPopes = new Movies("Two Popes", "2020", "Fernando Meirelles", "500000", "1000000");
// let Shrek = new Movies ("shrek", "2001", "Andrew Adamson", "2000000", "50000000");

// console.log(TwoPopes.getIntroduction());
// console.log(TwoPopes.getProfit());
// console.log(Shrek.getIntroduction());
// console.log(Shrek.getProfit());

// class  Movie {
//     constructor(name, year, director) {
//         this.name = name;
//         this.year = year;
//         this.director = director;
//     }
//     get name1() {
//         return this.name;
//     }

//     get year1(){
//         return this.year;
//     }

//     set newDirector(newDirector) {
//         this.director = newDirector;
//     }
// }

// let movie1 = new Movie("Titanic", "2020", "Name Surname");
// console.log(movie1);

// class Clock {
//     constructor(template) {
//         this.template = template;
//     }
//     render() {
//         let timer;
//         let date = new Date();

//           let hours = date.getHours();
//           if (hours < 10) hours = '0' + hours;

//           let mins = date.getMinutes();
//           if (mins < 10) mins = '0' + mins;

//           let secs = date.getSeconds();
//           if (secs < 10) secs = '0' + secs;

//           let output = this.template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);

//           console.log(output);
//         }
//         stop(){
//             clearInterval(timer);
//         }
//         start(){
//             this.render();
//             this.timer = setInterval(() => this.render(), 1000)
//         }
// }
// let clock = new Clock('h:m:s');
// clock.start();


class Movie {
    constructor(name, year, director) {
      this.name = name;
      this.year = year;
      this.director = director;
    }
    getIntroduction() {
      return `${this.name}, ${this.year}, ${this.director}.`;
    }
  }
  let TwoPopes = new Movie('Two Popes', '2020', 'Fernando Meirelles');
  
  class Series extends Movie {
    constructor(numberOfSeasons, name, year, director) {
      super(name, year, director);
      this.numberOfSeasons = numberOfSeasons;
    }
    lessThan10Seasons() {
      if (this.numberOfSeasons < 10) {
        return `Serialas ${this.name} turėjo mažiau nei 10 serijų`;
      } else {
        return `Serialas ${this.name} turėjo daugiau nei 10 serijų`;
      }
    }
  }
  let Friends = new Series(560, 'Friends', '1989', 'Name Surname');
  console.log(Friends.lessThan10Seasons());
  
