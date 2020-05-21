// // Promises
// let cleanRoom = function() {
//     return new Promise(function(resolve, reject) {
//       resolve('Cleaned The Room');
//     });
//   };
  
//   let removeGarbage = function(message) {
//     return new Promise(function(resolve, reject) {
//       resolve(message + ' remove Garbage');
//     });
//   };
  
//   let winIcecream = function(message) {
//     return new Promise(function(resolve, reject) {
//       resolve( message + ' won Icecream');
//     });
//   };
  
//   cleanRoom().then(function(result){
//       return removeGarbage(result);
//   }).then(function(result){
//       return winIcecream(result);
//   }).then(function(result){
//       console.log('finished ' + result);
//   })
  
//   Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
//   console.log('all finished');
//   })
  
//   Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
//   console.log('one of them is finished');
//   })


      // naudodami šį endpoint'ą - https://petstore.swagger.io/#/store/placeOrder, 
    // siųskite POST request'ą (naudodami fetch API)
    // Siųskite šį objektą:
    // {
    //     id: ___;  // unikalus id iš minimum 6 skaitmenų
    //     petId: 1;
    //     quantity: 0;
    //     shipDate: new Date();
    //     status: placed;
    //     complete: true
    //   }

      const serverUrl = 'https://petstore.swagger.io/v2';
      const petPath = '/store/order';
      const newOrder = {       
          id: 898989, // unikalus id iš minimum 6 skaitmenų
          petId: 1,
          quantity: 0,
          shipDate: new Date(),
          status: "placed",
          complete: true
      }
      const orderArray = [];

      function postPet(pet) {
            return fetch(`https://petstore.swagger.io/v2/store/order`, {
              method: 'POST',
              body: JSON.stringify(pet),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                "accept": "application/json"
              }
            })
        }

      orderArray.push(newOrder);

      function putOrder() {
        orderArray.forEach(async function(pet) {
          await postPet(pet);
       })
       putOrder().then(res => res.json())
       console.log(res);
      }
 
       

            //   async function test() {
    //     return await fetch(`${serverUrl}`);
    //   }
        

      // Įsitikinkite, kad request'as įvyko sėkmingai, paskaitę jo respons'ą
      // Bonus - gaudykite klaidas



    //   const serverUrl = 'https://petstore.swagger.io/v2';
    //   const petPath = '/pet';
    //   async function getPet(id) {
    //     return await fetch(`${serverUrl}${petPath}/${id}`)
    //   }
    //   function postPet(pet) {
    //     return fetch(`${serverUrl}${petPath}`, {
    //       method: 'POST',
    //       body: JSON.stringify(pet),
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //         "accept": "application/json"
    //       }
    //     })
    //     .then(res => res.json())
    //     .then((data) => {
    //       let output = ['<h2>Pets</h2>'];
  