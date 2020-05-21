const serverUrl = 'https://petstore.swagger.io/v2';
const petPath = '/pet';
async function getPet(id) {
  return await fetch(`${serverUrl}${petPath}/${id}`)    
}
function postPet(pet) {
  return fetch(`${serverUrl}${petPath}`, {
    
    method: 'POST',
    body: JSON.stringify(pet),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "accept": "application/json"
    }
  })
}
function updatePet(pet) {
  return fetch(`${serverUrl}${petPath}`, {
    method: 'PUT',
    body: JSON.stringify(pet),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "accept": "application/json"
    }
  })
}




// let pet = {name: 'Poltava'}
// let id = [258963]

// function doSmth() {
//     Object.keys(pet).forEach(async function(obj) {
//       await postPet(obj);
//       getPet(obj.id)
//     })
//   }
//   doSmth();



// const myIds = [{ id: 24533453, name: 'name1' }, {id: 345345345, name: 'name2'}, {id: 345345345, name: 'name3' }];
// function generateId() {
//   return Math.floor(Math.random());
// }
// function doSmth() {
//   myIds.forEach(async function(obj) {
//     await postPet(obj);
//     getPet(obj.id)
//   })
// }
// doSmth();

function generateId() {
  return Math.floor(Math.random() * 100000);
}
/* ***** Examples how to call API ******** */
const id = generateId();
const myPet = {
  "id": id,
  "name": "MyPet",
}
getPet(1).then(pet => {
  console.log(pet)
})
postPet(myPet).then(
  getPet(id).then(console.log)
)
/* */
const myPetsIds = [];
function savePet() {
}
function consolePet() {
}