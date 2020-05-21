let receptai ={
    'avizine kose': {
        vanduo: 1,
        pienas: 1,
        aviziniaiDribsniai: 1
    },
    'kepta zuvis': {
        zuvis: 1,
        svogunas: 1,
        morka: 1
    }
};

let duokRecepta = (receptoPavadinimas,sveciuKiekis) => {
    let manoReceptoObjektas  =  receptai[receptoPavadinimas];
    for (let name in manoReceptoObjektas) {
        let ingridientas = name;
        let kiekis = manoReceptoObjektas[name];
        console.log (`${ingridientas} - ${kiekis*sveciuKiekis}.`);
        
        // console.log(name, kiekis);
      }

}


