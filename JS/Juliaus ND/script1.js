const users = {
    1: {
        id: 1,
        name: 'Mykolas',
        city: 'Skuodas',
        follows: [4, 5]
    },
    2: {
        id: 2,
        name: 'Stasys',
        city: 'Pakruojis',
        follows: [3]
    },
    3: {
        id: 3,
        name: 'Janina',
        city: 'Vilnius',
        follows: [4, 5]
    },
    4: {
        id: 4,
        name: 'Paulius',
        city: 'Vilnius',
        follows: [6, 5]
    },
    5: {
        id: 5,
        name: 'Juozas',
        city: 'Kaunas',
        follows: [1, 3, 5]
    },
    6: {
        id: 6,
        name: 'Gediminas',
        city: 'Vilnius',
        follows: [2, 3]
    }   
}

//Sukuriam masyvą, kuriame surinkti visi follows masyvai;

const followsNestedArrays = Object.values(users).reduce((acc, curr) => {

    acc.push(curr['follows']);
    return acc; 
   
}, []);

//Surenkam followsNestedArrays masyvo skaičius į vieną masyvą;

const allFollowsInOneArray = followsNestedArrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, [] );

//Surenkam objektą - user id: kiek kartų kartojasi;

const objectWithCountedFollowers = allFollowsInOneArray.reduce((accum, currV) => {
    
    accum[currV] = accum[currV]+1 || 1;
    return accum;
}, {})

//Randam kuris user kartojasi daugiausiai kartų;

const superFinal = Object.keys(objectWithCountedFollowers).reduce((ac, cv) => {
    
    followers = objectWithCountedFollowers[cv];
    if (followers > ac.maxFollowers) {
        ac.maxFollowers = followers;
        ac.super_user = cv;
    }
    return ac;
}, {
    super_user: 0,
    maxFollowers: 0,
}
);
console.log(superFinal.super_user);






