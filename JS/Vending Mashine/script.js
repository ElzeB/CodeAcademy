let coins = ['1eur', '50ct', '20ct', '10ct', '5ct', '1ct'];

let change = (price, payedAmount) => {
    let diferent = Math.round((payedAmount - price)*100);
    
    let changeArray = [];
   
    coins.forEach ( coin => {
        if (diferent >= 100 ) {
            do {
            changeArray.push(coins[0]);
            diferent = diferent - 100;
            } while (diferent >= 100);
        }
        else if ( diferent >= 50 ) {
            do {
            changeArray.push(coins[1]);
            diferent = diferent-50;
            } while (diferent >= 50);  
        } 

        else if (diferent >= 20 && diferent < 50) {
            do {
            changeArray.push(coins[2]);
            diferent = diferent-20;
            } while (diferent >= 20);
        } 
    
        else if (diferent >= 10 && diferent < 20 ) {
            do {
            changeArray.push(coins[3]);
            diferent = diferent-10;
            } while (diferent >= 10);
        } 
    
        else if (diferent >= 5 && diferent < 10) {
            do {
            changeArray.push(coins[4]);
            diferent = diferent-5;
            } while (diferent >= 5);
        } 

        else if (diferent > 0 && diferent < 5 ) {
            do {
            changeArray.push(coins[5]);
            diferent = diferent-1;
            } while (diferent >= 1);
        } 
    
        else if (diferent === 0) {
            return 'Grazos nebus';
        } 

        else {
            return "Tikrinti duomenis";  
        }
    });

    return(changeArray);
}

console.log(change(2, 2));

