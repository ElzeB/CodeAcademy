const users = [
    {
        name: 'Juozas',
        age: 25
    },
    {
        name: 'Vaclovas',
        age: 63
    },
    {
        name: 'Alina',
        age: 32
    },
    {
        name: 'Tauras',
        age: 22
    },
]

let ageAverage = () => {
    let ageSum = 0;
    users.forEach(a=>{
        ageSum+=a.age;
    });
    return (ageSum/users.length);
}

let moreThan25 = users.filter(user => user.age > 25);
// console.log(moreThan25);

let more25 = () => {
    let allAges = [];
    let over25 = [];
    users.forEach(a=>{
        allAges.push(a.age);
        // console.log(age25);
    });
    allAges.forEach(a=>{
        if (a>25) {
            over25.push(a);
        }
    } );
    // console.log(over25);   
}

const hacking = () => {
    users.forEach(a=>{
        a.age='corona';
        
    });
}

let includesNumber = (...val) => {
   
    my_array = val[0];
    
    my_value = val[1];
    // console.log(`my array is ${my_array}`);
    // console.log(`my value is ${my_value}`);

if (my_array.indexOf(my_value) == -1) {
    return false;
} else {
    return true;
}

}




const obj = {
    p1: 'Val',
    p2: {
        p1: {
            p1: 'Val',
            p2: 'Val',
            p3: {
                p1: [121, 21, null, 44, 5, 677, 6, '8', 8, 9, 10]
            }
        }
    }
}

let tikrinamasMasyvas = obj.p2.p1.p3.p1;
console.log(tikrinamasMasyvas);
let skaiciuMasyvas = [];
console.log(skaiciuMasyvas);

tikrinamasMasyvas.forEach(a=>{
    
    if(typeof a === 'number'){
        
        skaiciuMasyvas.push(a);
    }

});

let didziausiasSkaitmuo = Math.max(...skaiciuMasyvas);
console.log(`Didziausias skaitmuo ${didziausiasSkaitmuo}`);
    









