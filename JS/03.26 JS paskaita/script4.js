const pets = [
    {
        name: 'Sargis',
        id: 12134234234
    },
    {
        name: 'Lakis',
        id: 34523534534
    },
    {
        name: 'Fanta',
        id: 1231536456
    },
    {
        name: 'Fanta',
        id: 1231536456
    },
    {
        name: 'Kudlius',
        id: 24534636
    }, 
    {
        name: 'Fanta',
        id: 1231536456
    },              
];


let myArray = pets.reduce ((accum, curr) => {
  
   accum.some(i => i.id === curr.id)? accum : accum.push(curr); return accum;}, [])

console.log(myArray);
