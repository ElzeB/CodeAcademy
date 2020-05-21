let sugar = [7, 4, 10, 6, 1];
let good_jar_index = false;
let bad_jar_index = false;


let goodProducts = sugar.reduce((accum, currentValue) => {

if (accum.length === 0) {
    accum.push([]);
    if (currentValue < 5) {
        good_jar_index = 0;
    } else {
        bad_jar_index = 0;
    }
 };

if (currentValue < 5) {
    if (good_jar_index === false) {
        accum.push([]);
        good_jar_index = 1;
    }
        accum[good_jar_index].push(currentValue);
    } else {
        if (bad_jar_index === false) {
            accum.push([]);
            bad_jar_index = 1;
        }
            accum[bad_jar_index].push(currentValue);
        } 
return accum;
}, []);
console.log(goodProducts);
