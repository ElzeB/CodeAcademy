// const arr = [{id:123, name: 'Karolis'}, {id: 124, name: 'Alina'}]

// arr.reduce ((acc, curr) => {
//     acc[curr.id] = curr;
//     return acc;
// }, {})

// Islogina 123: {id:123, name: 'Karolis'};


// const obj = {
//     1: {
//         prop: val
//     },
//     2: {
//         prop: val
//     },
//     3: {
//         prop: val
//     }      
// }
// Object.keys(obj).reduce((acc, curr) => {
//     acc.push(curr);
//     return
// }, [])


// const obj = {
//     1: {
//         name: 'Mykolas',
//         age: 22,
//         city: 'Skuodas'
//     },
//     2: {
//         name: 'Stasys',
//         age: 26,
//         city: 'Pakruojis'
//     },
//     3: {
//         name: 'Janina',
//         age: 45,
//         city: 'Vilnius'
//     }
// };

// const a = Object.keys(obj).reduce((acc, curr) => {
//     acc.push(obj[curr]);
//     return acc;
// }, [])


// Rezultatas - [
//     {
//         name: 'Mykolas',
//         age: 22,
//         city: 'Skuodas'
//     },
//     {
//         name: 'Stasys',
//         age: 26,
//         city: 'Pakruojis'
//     },
//     {
//         name: 'Janina',
//         age: 45,
//         city: 'Vilnius'
//     }
// ]

// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let rez = arr.reduce ((acc, curr) => {
//     return acc.concat(curr)
// },
// []
// )

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


let rez = arr.reduce ((acc, curr) => {
    
    if (acc.length !== 0) {
        if (acc[acc.length-1].length>2){
         acc.push([curr])
            } else {
                acc[acc.length-1].push(curr);
            }
    } else {
        acc.push([curr]);
    }
    return acc;
},
[]
);

