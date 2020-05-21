let carOne = {make: "Audi"};

let carOneModel = Object.create(carOne, {
    model: {value: "A6"}, 
    year: {value: 2012}
});

console.log(carOneModel);
