const serverUrl = 'https://petstore.swagger.io/v2';
const petPath = '/pet';
const myPets = [{ id: 24533453, name: 'name1' }, {id: 345345345, name: 'name2'}, {id: 345345345, name: 'name3' }];
/* **** call API functions ***** */
function getPet(id) {
  return fetch(`${serverUrl}${petPath}/${id}`)
    .then(response => response.json())
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

function createPets() {
    myPets.forEach(async function(pet) {
      await postPet(pet);
      getPet(pet.id)
    })
  }
  createPets();
  
// /* **** Helper function to generate unique id ***** */
// function generateId() {
//   return Math.floor(Math.random() * 100000);
// }
// /* ***** Examples how to call API ******** */
// const id = generateId();
// const myPet = {
//   "id": id,
//   "name": "MyPet",
// }
// getPet(1).then(pet => {
//   console.log(pet)
// })
// postPet(myPet).then(
//   getPet(id).then(console.log)
// )
// /* */
// const myPetsIds = [];
// function savePet() {
// }
// function consolePet() {
// }



console.log(myPets);

function generateId() {
  return Math.floor(Math.random() * 100000);
}
function createPets() {
  myPets.forEach(async function(pet) {
    await postPet(pet);
    getPet(pet.id)
  })
}
createPets();

