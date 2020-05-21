const obj = {
    1: {
        name: 'Name1'
    },
    2: {
        name: 'Name2'
    },
    3: {
        name: 'Name3'
    },
    4: {
        name: 'Name4'
    },
    5: {
        name: 'Name5'
    }                
}

const a = Object.keys(obj).reduce((acc, curr) => {
    let myObj = {
        name: obj[curr].name,
        id: curr
    }
    acc.push(myObj);
    return acc;
}, [])
console.log(a);