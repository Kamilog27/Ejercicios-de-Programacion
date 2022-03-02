
function filtrarPorLetra(heroes,letra){
    let nuevoArr=[];

    for (let i = 0; i < heroes.length; i++) {
        let nombre=heroes[i];
        if(nombre[0]===letra){
            nuevoArr.push(nombre);
        }
        
    }

    return nuevoArr;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk','She Hulk','Spiderman', 'Captain Marvel'];
let heroesCon = filtrarPorLetra(heroes, 'S');
console.log(heroesCon);