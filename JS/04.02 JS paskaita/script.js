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
  .then(res => res.json())
  .then((data) => {
    let output = ['<h2>Pets</h2>'];
    
      output += `
        <ul>
          <li>${pet.name} ${pet.id}</li>
        </ul>
      `;
   
    document.getElementById('output').innerHTML  = output;
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

let pets = [];
let myPetsIds = [];

function generateId() {
  let id = Math.floor(Math.random() * 10000000);
  return id;
}

function savePet() {

  let myPet = {
    "name": document.querySelector("#petName").value, 
    "id": generateId()
  }; 

  myPetsIds.push(myPet.id);
  pets.push(myPet);

  function createPets() {
    pets.forEach(async function(pet) {
      await postPet(pet);
      getPet(pet.id)
    })
  }
  createPets();

  console.log(myPetsIds);
  console.log(pets);

};







