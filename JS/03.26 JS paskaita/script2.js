const pets = [
    {
        name: 'Sargis',
        valid: false
    },
    {
        name: 'Lakis',
        valid: true
    },
    {
        name: 'Fanta',
        valid: true
    },
    {
        name: 'Fanta',
        valid: false
    },
    {
        name: 'Kudlius',
        valid: true
    }, 
    {
        name: 'Fanta',
        valid: false
    },              
];

const a = Object.keys(pets).reduce((acc, curr) => {
    
    if (pets[curr].valid === false) {
        let myObj = {
            name: pets[curr].name   
        }
        acc.push(myObj);
    }
    return acc;
    
}, []);

console.log(a);