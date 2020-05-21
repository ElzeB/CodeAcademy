const users = [
    {
        name: 'Mykolas',
        city: 'Skuodas'
    },
    {
        name: 'Stasys',
        city: 'Pakruojis'
    },
    {
        name: 'Janina',
        city: 'Vilnius'
    },
    {
        name: 'Paulius',
        city: 'Vilnius'
    },
    {
        name: 'Juozas',
        city: 'Kaunas'
    },
    {
        name: 'Gediminas',
        city: 'Vilnius'
    }       
]


let city = users.reduce ((accum, user) => {
        accum = user.city;
        user.total =  0;
    users.reduce ((accumulator, curentValue) => {
        if (curentValue.city === accum) {
            user.total +=1 || 1;
        }
    }, 0);
}, []);
console.log(users);

 

     

