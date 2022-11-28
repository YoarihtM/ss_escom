import { getHeroById, getHeroByOwner, infoHeroe, heroesOwner } from './js/imp-exp';

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroById();
//         resolve( heroe ); 
//     }, 2000 );
// });

// promesa.then( (heroe) => {
//     infoHeroe(heroe);
// }).catch( err => console.warn( err ));

const getHeroByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroById(id);
            heroe != undefined ? resolve( heroe ) : reject( 'No se ha encontrado el heroe' ); 
        }, 2000 );

    });

};

getHeroByIdAsync(1).then( heroe => infoHeroe(heroe) ).catch( err => console.error( err ));

heroesOwner(getHeroByOwner('Marvel'));