const names = ['Kudlius', 'Mauras', 'Sargis'];

let getNewArray = (a) => {
    
    return names.map(dogName => {
        function generateId() {

            let id = Math.floor(Math.random()*100);
            return(id);
        }
            return {
                name: dogName,
                id: generateId()
            }
        });
};
console.log(getNewArray(names));
